import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

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
img{
  cursor: pointer;
}
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

const UserModal = styled.div`
position:absolute;
padding:${({navbar}) => (navbar ? '5px 5px' : '0px 0px')};
border-radius: 10px;
background: #F5F5F5;
top: ${({navbar}) => (navbar ? '80px' : '70px')};
opacity: ${({navbar}) => (navbar ? '1' : '0')};
transition: 450ms;
right:10px;
display: flex;
flex-direction: column;
ul {
    list-style: none;
    width: 100%;
    li{
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        color: #3A4F5C;
        :hover{
          background: #00806E;
          color: #FFFFFF;
        }
    }
}
`


const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  const [navbar,setNavBar] = useState(false)
  
  const toggleNav = () => {
    setNavBar(!navbar)
  }
      
      const handleSignOut = (e) => {
          e.preventDefault();
          signOut(auth).then(() => {
           console.log("User has logged out")
          }).catch((error) => {
            console.log(error);
          })
        }

  return (
    <Container>
      <Wrapper>
     <Link to="/"> <Logo src='./images/Logo.png' alt='Logo'  /></Link>
      <Center >
      <Link to="/" style={{textDecoration:"none",color: '#3A4F5C'}}><p>Home</p></Link>
      <Link to="/Explore" style={{textDecoration:"none",color: '#3A4F5C'}}> <p>Explore</p></Link>
      <Link to="/Inventors" style={{textDecoration:"none",color: '#3A4F5C'}}><p>Inventors</p></Link>
      <Link to="/Investors" style={{textDecoration:"none",color: '#3A4F5C'}}><p>Investors</p></Link>
        <Link to="/About" style={{textDecoration:"none",color: '#3A4F5C'}}> <p>About Us</p></Link>
      </Center>
      <Right>
        <img src='./images/Vector.png' alt='search'/>
        {currentUser ?
         <Button onClick={handleSignOut}>Log out</Button> : 
         <Link to="/Landing" style={{textDecoration:"none"}}> <Button>Sign Up</Button> </Link>}
        <img onClick={toggleNav} src='./images/menuicon.png' alt='menu'/>

        <UserModal navbar={navbar}>
                <ul>
                <Link to="/Profile" style={{textDecoration:"none"}}> <li>Profile</li></Link>
                  <li onClick={handleSignOut}>Log out</li>
                </ul>
              </UserModal>

      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
