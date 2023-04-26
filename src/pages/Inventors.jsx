import React from 'react'
import { Comingsoon } from './Landing'
import { Container } from './Home'
import Navbar from '../components/Navbar'

const Inventors = () => {
  return (
    <div>
      <Navbar/>
        <Container>
      <Comingsoon style={{width:'100%', heigth:'100%'}}>
        Coming soon
      </Comingsoon>
      {/* <iframe src="https://ideafundr.wordpress.com" title="Ideafundr Blog" style={{width:'100%', height:'600px'}}></iframe> */}
      </Container>
    </div>
  )
}

export default Inventors
