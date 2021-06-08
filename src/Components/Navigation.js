import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Colors from '../Colors'

const Logo = styled(Link)`
    background-color: ${Colors.yellow};
    color: #fff;
    padding: 2rem 2rem;
    display: block;
    text-decoration: none;
    font-weight: 350;
    display: inline-flex;
    font-family: Roboto;
    font-size: 50px;
    margin-bottom:0;
    text-transform: uppercase;
    z-index: 1500;
    @media (max-width: 320px) {
        animation: slide 7s linear infinite;
    }
`

const MenuContainer = styled.div`
    position: absolute;
    top: 3.0rem;
    left: 3rem;
    z-index: 1111;
`

const MenuItem = styled(Link)`
    background-color: #000;
    padding: 1rem;
    display: block;
    text-decoration: none;
    font-family: Roboto;
    font-size: 25px;
    color: white;
    margin: 0rem;
    transition: all 0.4s linear;
    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
    cursor: pointer;
`

export default function Navigation () {
    return (
        <MenuContainer>
            <Logo to="/">Max<br /> Presnov</Logo>
            <MenuItem to='/portfolio'>ПОРТФОЛИО</MenuItem>
            <MenuItem>ОБО МНЕ</MenuItem>
            <MenuItem>КОНТАКТЫ</MenuItem>
        </MenuContainer>
    )
}