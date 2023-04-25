import React, {  useState } from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Landing'
import styled from 'styled-components';
import { Wrapper } from '../components/Registerstyles';
import Footer from '../components/Footer';



export const AnimatedLoader = styled.img`
width: 1px;
height: 1px;
object-fit: cover;
`
export const Container = styled.div`
width: 100%;
height: 100%;
padding: 37px;
background: #FAFAFA;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Login = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);




  const handleSubmit = async(e) => {
    e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  setLoading(true)
 try{
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
 }catch (error){
    setError(true);
    setLoading(false)
 }
}

  return (

    <Container>
   <Wrapper style={{paddingTop:'100px'}}>
        <form onSubmit={handleSubmit}>
        
          <input placeholder='email address'
            type="email"
            name='email'

            required />
          <input placeholder='password'
            type="password" minLength="6"
            name='password'

            required />
          <Button style={{width:'550px'}}>{loading ? <AnimatedLoader src='./images/loading-gif2.gif' alt='loading'/> :" Sign in"}</Button>
          {error && <span style={{ fontSize: "14px", color: "red", fontWeight: "200" }}>something went wrong...</span>}
        </form>
        <p >Don't have an account?  <Link style={{textDecoration:"none"}} to="/Register">Sign up</Link></p>
      </Wrapper>
      <Footer/>
    </Container>

  )
}

export default Login