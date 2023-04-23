import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
padding-bottom: 87px;
Link{
  text-decoration: none;
}
`

const Wrapper = styled.div`
display: flex;
align-items: center;
background-color:#F2F2F2;
width: 100%;
gap: 8px;
padding: 15px 87px;
justify-content: space-between;
`

const Center = styled.div`
display: flex;
align-items: center;
padding: 0px;
gap: 32px;
width: 576px;
line-height: 33px;

p{
  font-weight: 400;
font-size: 24px;
}
`

const Right = styled.div`
display: flex;
align-items: center;
padding: 0px;
gap: 32px;

img {
  object-fit: cover;
  height: 20px;
  width: 20px;
}

`

export const Logo = styled.img`
width: 183px;
height: 64px;
object-fit: cover;
`
const Button = styled.button`
padding: 16px 32px;
gap: 8px;
background-color: #00806E;
border: none;
border-radius:8px;
cursor: pointer;
:hover{
  transition:250ms;
  background-color: white;
}
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
     <Link to="/"> <Logo src='./images/Logo.png' alt='Logo'  /></Link>
      <Center >
      <Link to="/" style={{textDecoration:"none"}}><p>Home</p></Link>
      <Link to="/Explore" style={{textDecoration:"none"}}> <p>Explore</p></Link>
      <Link to="/Inventors" style={{textDecoration:"none"}}><p>Inventors</p></Link>
      <Link to="/Investors" style={{textDecoration:"none"}}><p>Investors</p></Link>
        <Link to="/About" style={{textDecoration:"none"}}> <p>About Us</p></Link>
      </Center>
      <Right>
        <img src='./images/Vector.png'/>
        <Link to="/Landing" style={{textDecoration:"none"}}> <Button>Sign Up</Button> </Link>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
