import React, { Component, useState } from "react"
import styled from 'styled-components'
import data from '../Images/SliderData'

const PortfolioItem = styled.div`
    width: 100%;
    height: 350px;
    display: inline-flex;
    background-image: url(${props => props.image});
    background-size: cover;
    transition: 0.4s ease-in-out all;
    &:hover {
        opacity: 0.5;
    }
    /* @media (max-width: 600px) {
        bottom: 7rem;
        z-index: 50;
    } */
`

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30rem;
`

export default function PortfolioComponent () {
    const [selected, setSelected] = useState(0)
    const renderItems = (e, key) => <PortfolioItem key={`ts:${key}`} image={e.image.default} />
    return (
        <PortfolioContainer>
            {data.map(renderItems)}
        </PortfolioContainer>
    )
}
