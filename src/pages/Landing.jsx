import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'



const Container = styled.div `
width: 100%;
height: 100%;

`
const Wrapper = styled.div`
display: flex;
width: 100%;
height:100%;
flex-direction:column;

`

const Firstprompt = styled.div`
width: 100wh;
height: 100vh;
background:#F5F5F5; ;
overflow-y: hidden;
display: flex;
line-height: 87px;
align-items: center;
justify-content: space-between;
padding: 15px 60px;
padding-top:50px;
@media only screen and (max-width: 850px) {
   img{
    display: none;
   }
   background: linear-gradient(101.97deg, #FDFAFA 0.31%, rgba(217, 217, 217, 0.48) 100%), url(./images/Rectangle1.png) no-repeat center center fixed;
   background-size:cover;
   overflow: hidden;
 
}
@media only screen and (max-width: 580px) {
   img{
    display: none;
   }
   background: linear-gradient(101.97deg, #FDFAFA 0.31%, rgba(217, 217, 217, 0.48) 100%), url(./images/Rectangle1.png) no-repeat center center fixed;
   background-size:cover;
   overflow: hidden;
   padding-left: 30px;
}
`

const Right = styled.div`
display: flex;
align-items: center;
img{
width: 552px;
height: 455px;
object-fit: cover;
margin-left:30px;
margin-bottom:150px;
}
`

const P1 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
color: white;
`

const P2 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: white;
`

const P3 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: white;
margin-top:25px;
margin-bottom:10px;
`
const Whattododiv = styled.div`
display: flex;
gap: 20px;
margin-bottom:80px;
`
const Whattodobox2 = styled.div`
display: flex;
width: 200px;
height: 160px;
background: #FFFFFF;
border-radius: 8px;
align-items: center;
justify-content: center;
text-align: center;
p{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;

color: #1D2D35;
}
@media only screen and (max-width: 850px) {
  width: 150px;
}
@media only screen and (max-width: 550px) {
   width: 140px;
}
`


export const Button = styled.button`
padding: 16px 32px;
gap: 8px;
background-color: #00806E;
color:#FEFEFE ;
border: none;
border-radius:8px;
cursor: pointer;
:hover{
  transition:250ms;
  background-color: white;
  color:#00806E;
}
`

export const Button1 = styled.button`
padding: 16px 32px;
gap: 8px;
background-color: white;
color: #00806E;
border: 1px solid #00806E;
border-radius:8px;
cursor: pointer;
width: 250px;
:hover{
  transition:250ms;
  background-color: #00806E;
  color: white;
}

@media only screen and (max-width: 580px) {
   width: 230px;
}
`

const Button2 = styled.button`
padding: 16px 32px;
gap: 8px;
background-color: #00806E;
color: white;
border: none;
border-radius:5px;
width: 250px;
cursor: pointer;
:hover{
  transition:250ms;
  background-color: white;
  color: #00806E;
}

@media only screen and (max-width: 580px) {
   width: 230px;
}
`

const Firstp = styled.p`
font-style: normal;
font-weight: 600;
font-size: 64px;
line-height: 87px;
`
const Secondp = styled.p`
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 33px;
margin-bottom:30px;
`


const Left = styled.div`
display: flex;
flex-direction:column;
`

const Buttondiv = styled.div`
display: flex;
gap: 10px;
`

const Secondprompt = styled.div`
width: 100%;
height: 90vh;
background: #1D2D35;
align-items: center;
overflow: hidden;
display: flex;

img{
    width: 553px;
height: 387px;
padding-left:88px;
object-fit: cover;
}
@media only screen and (max-width: 850px) {
   img{
    display: none;
   }
   
}
`
const Thirdprompt = styled.div`
width: 100%;
height: 90vh;
background: #F2F2F2;
align-items: center;
color: #3A4F5C;
overflow: hidden;
display: flex;

img{
    width: 553px;
height: 387px;
padding-left:88px;
object-fit: cover;
}
@media only screen and (max-width: 850px) {
   img{
    display: none;
   }
   overflow: scroll;
}
`

export const Thirdprompt2 = styled.div`
width: 100%;
margin-top:40px;
padding-top:50px;
height: 90vh;
flex-direction: column;
background: #FFFFFF;
color: #3A4F5C;
overflow: hidden;
display: flex;
position: relative;
img{
    width: 553px;
height: 387px;
padding-left:88px;
object-fit: cover;
}
@media only screen and (max-width: 850px) {
   img{
    display: none;
   }
   
}
`
export const Whybox = styled.div`
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
@media only screen and (max-width: 850px) {
   margin-bottom:38px;
}
`

export const Thirdpromptdiv1 = styled.div`
width: 405px;
height: 66px;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #3A4F5C;
width: 546px;
height: 149px;
margin-top:20px;
margin-left:120px;
background: rgba(253, 253, 253, 0.1);
box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
backdrop-filter: blur(20px);

p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
}
@media only screen and (max-width: 850px) {
   width: 250px;
   margin-left:30px;
}
`
export const Thirdpromptdiv2 = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #3A4F5C;
position: absolute;
width: 546px;
height: 149px;
left: 80px;
top: 320px;

background: rgba(253, 253, 253, 0.1);
box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
backdrop-filter: blur(20px);

p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
}
@media only screen and (max-width: 850px) {
   width: 250px;
   left:45px;
   top: 350px;
}
`

export const Thirdpromptdiv3 = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #3A4F5C;
position: absolute;
width: 546px;
height: 189px;
left: 750px;
top: 120px;

background: rgba(253, 253, 253, 0.1);
box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
backdrop-filter: blur(20px);

p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
}
@media only screen and (max-width: 850px) {
   width: 260px;
   left:320px;
   top: 150px;
}
`

export const Thirdpromptdiv4 = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #3A4F5C;
position: absolute;
width: 546px;
height: 189px;
left: 680px;
top: 330px;

background: rgba(253, 253, 253, 0.1);
box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
backdrop-filter: blur(20px);

p{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
}
@media only screen and (max-width: 850px) {
   width: 260px;
   left:310px;
   top: 350px;
}
`

export const Thirdprompt3 = styled.div`
width: 100%;
margin-top:40px;
padding-top:50px;
height: 90vh;
flex-direction: column;
background: white;
color: #3A4F5C;
overflow: hidden;
display: flex;
position: relative;
align-items: center;
justify-content: center;
`


export const Comingsoon = styled.div`
width: 90%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(101.97deg, #FDFAFA 0.31%, rgba(217, 217, 217, 0.48) 100%);
p{
    font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 22px;
text-align: center;
}

`

const Secondprompttext = styled.div`
display: flex;
flex-direction: column;
margin-left:40px;
`;


const Landing = () => {
  return (
    <div>
   <Container>
    <Wrapper>
        <Firstprompt>
    <Left>
    <Firstp>
    Showcase your invention to investors with immersive tech
    </Firstp>
    <Secondp>
    Get investment for your brightest Idea by demonstrating<br/> in a fully immersive virtual environment
    </Secondp>
    <Buttondiv>
    <Link to="/Login"><Button1>Sign In</Button1></Link>
        <Link to="/Register"> <Button2>Sign Up Now</Button2></Link>
    </Buttondiv>
    </Left>
    <Right>
    <img src='./images/Rectangle1.png' alt='image'/>
    </Right>
        </Firstprompt>
        <Secondprompt>
        <img src='./images/Rectangle2.png' alt='image'/>
        <Secondprompttext>
        <P1>
            Are you an inventor?
          </P1>
          <P2>
          Showcase your invention to prospective investors, so you <br/> can secure funding to bring your product to market and<br/> scale as you wish.
          </P2>
          <P3>
          Here’s what you need to do
          </P3>
          <Whattododiv>
            <Whattodobox2><p>Create a detailed profile of your invention</p></Whattodobox2>
            <Whattodobox2><p>Upload your invention demonstration using AR/VR</p></Whattodobox2>
            <Whattodobox2><p>Connect with potential investors who might be interested in your idea</p></Whattodobox2>
          </Whattododiv>
          <Buttondiv style={{justifyContent:"center"}}>
            <Button2>Showcase Your Invention</Button2>
          </Buttondiv>
        </Secondprompttext>
        </Secondprompt>
        <Thirdprompt>
        <Secondprompttext>
        <P1 style={{color:" #3A4F5C"}}>
        Are you an Investor?
          </P1>
          <P2 style={{color:" #3A4F5C"}}>
          Find promising inventions to invest in, so that you can<br/> support innovative ideas and potentially earn a return <br/>on your investment.          </P2>
          <P3 style={{color:" #3A4F5C"}}>
          Here’s what you need to do
          </P3>
          <Whattododiv>
            <Whattodobox2 style={{background: "#1D2D35"}}><p style={{ color:"#FFFFFF"}}>Create a detailed profile of your invention</p></Whattodobox2>
            <Whattodobox2 style={{background: "#1D2D35"}}><p style={{ color:"#FFFFFF"}}>Search for inventions based on your investment criteria</p></Whattodobox2>
            <Whattodobox2 style={{background: "#1D2D35"}}><p style={{ color:"#FFFFFF"}}>Connect with inventors</p></Whattodobox2>
          </Whattododiv>
          <Buttondiv style={{justifyContent:"center"}}>
            <Button2>Discover New Inventions</Button2>
          </Buttondiv>
        </Secondprompttext>
        <img src='./images/Rectangle3.png' alt='image'/>
        </Thirdprompt>
        <Thirdprompt2>
        <Whybox>
            <p>Why choose us?</p>
        </Whybox>
        <Thirdpromptdiv1>
            <p>With our platform, you can easily
                 discover a revolutionary invention, 
                 which you can invest in and help bring to market.
                 </p>
        </Thirdpromptdiv1>
        <Thirdpromptdiv2>
            <p>With our platform , you can showcase your new invention to investors.
                 which will lead to successful crowdfunding campaign and help you lunch your invention.
                 </p>
        </Thirdpromptdiv2>
        <Thirdpromptdiv3>
            <p>With our platform , you can showcase your new invention to investors.
                 which will lead to successful crowdfunding campaign and help you lunch your invention.
                 </p>
        </Thirdpromptdiv3>
        <Thirdpromptdiv4>
            <p>With our platform , you can showcase your new invention to investors.
                 which will lead to successful crowdfunding campaign and help you lunch your invention.
                 </p>
        </Thirdpromptdiv4>
        </Thirdprompt2>
        <Thirdprompt3>
            <Whybox> <p>Frequently asked question (FAQs)</p> </Whybox>
            <Comingsoon><p>Coming Soon</p></Comingsoon>
        </Thirdprompt3>
       <Newsletter/>
       <Footer/>
    </Wrapper>
   </Container>
   </div>
  )
}

export default Landing
