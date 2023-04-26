import React from 'react'
import { Comingsoon } from './Landing'
import { Container } from './Home'
import Navbar from '../components/Navbar'

const Investors = () => {
  return (
    <div>
      <Navbar/>
        <Container>
      <Comingsoon style={{width:'100%', heigth:'100%'}}>
        Coming soon
      </Comingsoon>
      </Container>
    </div>
  )
}

export default Investors