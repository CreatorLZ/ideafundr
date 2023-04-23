import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 90vh;
flex-direction: column;
background: white;
color: #3A4F5C;
overflow: hidden;
display: flex;
position: relative;
align-items: center;

form{
    margin-top: 40px;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    input{
        padding: 15px;
    }
}

`
const Checkbox = styled.div`
display: flex;
gap: 10px;
`

const Whybox = styled.div`
width:100%;
height: 65px;
display: flex;
align-items: center;
left: 529px;
top: 27px;
justify-content: center;
p{
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;

}
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

const Newsletter = () => {
  return (
    <Container >
            <Whybox> <p style={{fontSize:"24px"}}> Join our Newsletter</p> </Whybox>
            <p>Discover new and clever products in the IdeaFundr newsletter</p>
            <form>
                <input type='text' placeholder='name@gmail.com'/>
                <Checkbox>
                <input type='checkbox' style={{width:"30px", cursor:"pointer"}}/>
                <p>I agree to the Terms of Use and have read and understand <br/>the Privacy Policy</p>
                </Checkbox>
                <Button>Join Newsletter</Button>
            </form>
        </Container>
  )
}

export default Newsletter
