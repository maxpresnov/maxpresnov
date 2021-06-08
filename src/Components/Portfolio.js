import React, { Component, useState } from "react"
import styled from 'styled-components'
import data from '../Images/SliderData'
import { Grid, Row, Col } from 'react-flexbox-grid';


const PortfolioItem = styled.div`
    width: 100%;
    min-height: 350px;
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    transition: 0.4s ease-in-out all;
    &:hover {
        opacity: 0.5;
    }
    @media (min-width: 400px) {
        height: 450px;
    }
`

const PortfolioContainer = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; */
    margin-top: 30rem;
    padding-left: 1.85rem;
    padding-right: 3rem;
    padding-bottom: 3rem;
`

const Cell = styled(Col)`
    margin-bottom: 1rem;
`

const FullscreenImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 99999;
`

export default function PortfolioComponent () {
    const [selected, setSelected] = useState(null)
    const renderItems = (e, key) => <PortfolioItem key={`ts:${key}`} image={e.image.default} />
    return (
        <PortfolioCon`tainer>
            {selected && selected !== null && <FullscreenImage image={data[selected].image.default} onClick={() => setSelected(null)} />}
            <Grid fluid>
                <Row spacer={0}>
                    {data.map((e, key) => <Cell key={`ts:${key}`} xs={9} md={6} lg={3}>
                        <PortfolioItem onClick={() => setSelected(key)} image={e.image.default} />
                    </Cell>)}
                </Row>
            </Grid>
        </PortfolioContainer>
    )
}
