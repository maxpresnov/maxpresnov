import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import styled from 'styled-components'
import Navigation from './Components/Navigation'
import Slider from './Components/Slider'
import Portfolio from './Components/Portfolio'

const Container = styled.div`
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
`

export default function App () {
  return (
    <Router>
      <Container>
        <Navigation />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home () {
  return <Slider />
}

function About () {
  return <h2>About</h2>
}

function Contacts () {
  return <h2>Contacts</h2>
}
