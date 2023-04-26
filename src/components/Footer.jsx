import React from 'react'
import styled from 'styled-components'
import { Logo } from './Navbar'
import { Link } from 'react-router-dom'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 88px;
gap: 8px;
width: 100%;
height: 370px;
padding: 100px;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
 width: 100%;
 padding-top:20px;
`;

const FlexItem = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  color: #3A4F5C;
`;

const Socialdiv = styled.div`
display: flex;
flex-direction: column;
width: 200px;
object-fit: cover;
gap: 20px;
box-sizing: border-box;
padding: 25px;
`
const Icons = styled.div`
display: flex;
gap: 15px;
img{
width: 22px;
height: 20px;
object-fit: cover;
cursor: pointer;
}
`

const Footer = () => {
  return (
   <Container>
    <Logo src='./images/Logo.png' alt='Logo'  />
    <Wrapper>
    <FlexContainer>
      <FlexItem><Link to="/About" style={{textDecoration:"none",color: '#3A4F5C'}}>About Us</Link></FlexItem>
      <FlexItem>FAQ's </FlexItem>
      <FlexItem><Link to="/Home" style={{textDecoration:"none",color: '#3A4F5C'}}>Home</Link></FlexItem>
      <FlexItem><Link to="/Inventors" style={{textDecoration:"none",color: '#3A4F5C'}}>Inventors</Link></FlexItem>
      <FlexItem>Privacy Policy</FlexItem>
      <FlexItem>Contact Us</FlexItem>
      <FlexItem><a href="https://ideafundr.wordpress.com" style={{textDecoration:'none',color: '#3A4F5C'}}>Blog</a></FlexItem>
      <FlexItem><Link to="/Explore" style={{textDecoration:"none",color: '#3A4F5C'}}>Explore</Link></FlexItem>
      <FlexItem><Link to="/Investors" style={{textDecoration:"none",color: '#3A4F5C'}}>Investors</Link></FlexItem>
      <FlexItem>Terms & Condition</FlexItem>
    </FlexContainer>
    <Socialdiv>
        <p>Social Media</p>
        <Icons>
        <img src='./images/001-facebook.png' />
        <img src='./images/003-twitter.png' />
        <img src='./images/004-instagram.png' />
        </Icons>
    </Socialdiv>
    </Wrapper>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", marginTop:"20px"}}>
    <p>Copyright © 2023. Ideafundr. All rights reserved.</p>
    </div>
   </Container>
  )
}

export default Footer
