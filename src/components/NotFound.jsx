import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top:90px;
padding-bottom:50px;
img{
    width: 100%;
   height: 50vh;
   object-fit: contain;
}
Link{
    text-decoration: none;
    padding: 20px;
    background: #00806e;
}
@media only screen and (max-width: 500px) {
    img{
      height: 40vh;
    }
  }
`


const NotFound = () => {
  return (
    <Container>
        <img src="./images/404.gif" alt="not found" />
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'10px'}}>
        <h1>Sorry,</h1>
        <p>The page you are looking for cannot be found.</p>
        <Link to="/" style={{textDecoration:'none',padding:'15px',background:'#00806e',borderRadius:'5px',color:'white'}}>Go Back to the Homepage....</Link>
        </div>
    </Container>
  )
}

export default NotFound
