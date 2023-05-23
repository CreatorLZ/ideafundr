import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top:15px;
img{
    width: 100%;
   height: 60vh;
   object-fit: contain;
}
Link{
    text-decoration: none;
}
`


const NotFound = () => {
  return (
    <Container>
        <img src="./images/404.gif" alt="not found" />
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'10px'}}>
        <h1>Sorry,</h1>
        <p>The page you are looking for cannot be found.</p>
        <Link to="/" style={{textDecoration:'none'}}>Go Back to the Homepage....</Link>
        </div>
    </Container>
  )
}

export default NotFound
