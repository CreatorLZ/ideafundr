import React from 'react'
import styled from 'styled-components'
import Slider from '../components/Slider'
import { Button, Button1, Whybox } from './Landing'
import Coming from '../components/Coming'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MobileSlider from '../components/MobileSlider'

export const Container = styled.div`
width: 100%;
height: 100%;
background: #FAFAFA;
display: flex;
flex-direction: column;
overflow: hidden;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 376px;
/* padding: 40px; */
/* overflow: hidden; */
`
export const Buttondiv = styled.div`
display: flex;align-items: center;
justify-content: center;
gap: 20px;
padding: 50px;
@media only screen and (max-width: 500px) {
      margin-top:60px;
}
`
const P1 = styled.p`
 font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding-bottom:0px;
`
const P2 = styled.p`
font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;`

const Wrappercard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 410px);
  grid-gap: 20px;
  padding: 55px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      gap: 100px;
}
`;

const Wrappercard2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(1, 410px);
  grid-gap: 20px;
  padding: 55px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    display: flex;
      flex-direction: column;
      gap: 80px;
}
`;

const Child = styled.div`
  width: 400px;
  height: 410px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid lightgray; */
  border-radius: 10px;
  object-fit: cover;

  img{
    height: 340px;
    width: 100%;
  }
  button{
    width: 86px;
    border-radius: 4px;
height: 38px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 24px;
gap: 8px;
  }
  @media only screen and (max-width: 500px) {
    width: 300px;
  height: 380px;
  img{
    height: 320px;
    width: 100%;
  }
}
`;

const Categories = styled.div`
    height: 100vhpx;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
        @media only screen and (max-width: 500px) {
   margin-top:100px;
   margin-bottom:50px;

    }
`

const Categorycard = styled.div`
width: 190px;
height: 180px;
margin-top: 60px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img{
width: 100%;
height: 100px;
background: #FF6B6B;
}
p{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
padding: 5px;
}
/* @media only screen and (max-width: 500px) {
    width: 80px;
  height: 80px;
} */
`

const Categorydiv = styled.div`
@media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
   
}
`

const Home = () => {
  return (
    <div>
        <Navbar/>
    <Container>
        <Wrapper>
        <Slider/>
        <MobileSlider/>
        </Wrapper>
        <Buttondiv>
        <Button style={{width:"250px"}}>Explore Investments</Button>
        <Button1>Add Invention</Button1>
        </Buttondiv>
        <Whybox style={{paddingTop:"80px"}}>
            <p>Trending Inventions </p>
        </Whybox>
        <Wrappercard>
            <Child>
            <img src='./images/SwiftXR 2.png' alt=''/>
                <P1>Headset</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>6061 aluminum frame and fork provide a smooth, stable ride Mechanical disc brakes offer excellent...</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
            <Child>
                <img src='./images/Bicyle1.png'alt=''/>
                <P1>Bicycles - 26 inches Adult big size tyre bicycle</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>6061 aluminum frame and fork provide a smooth, stable ride Mechanical disc brakes offer excellent...</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
            <Child>
                <img src='./images/mouse.png'alt=''/>
                <P1>Mouse - Easy to use Wireless optical mouse</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>Quiet tactile clicking, Long-lasting battery life, Customizable seven-button inputs</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
            <Child>
                <img src='./images/Ride.png'alt=''/>
                <P1>Bicycles - 26 inches Adult big size tyre bicycle</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>6061 aluminum frame and fork provide a smooth, stable ride Mechanical disc brakes offer excellent...</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
            <Child>
                <img src='./images/SwiftXR.png' alt=''/>
                <P1>Bmax car</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>Front-wheel drive, 18-In. Graphite-Colored Alloy Wheels, LED Headlights With DRL</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
            <Child>
                <img src='./images/Knife.png' alt=''/>
                <P1>Qknives - The perfect kitchen knife series</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</P2>
                <Link to="/Invention"><Button>View</Button></Link>
                </div>
            </Child>
        </Wrappercard>
        <Buttondiv>
            <Button>View all inventions</Button>
        </Buttondiv>
        <Whybox style={{paddingTop:"80px"}}>
            <p>Popular Investors </p>
        </Whybox>
        <Wrappercard2>
        <Child>
                <img src='./images/2.png' alt=''/>
                <P1>Aliko Dangote</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</P2>
                <Button>View</Button>
                </div>
            </Child>
            <Child>
                <img src='./images/1.png' alt=''/>
                <P1>Nigerian man</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</P2>
                <Button>View</Button>
                </div>
            </Child>
            <Child>
                <img src='./images/Rectangle 11 (3).png' alt=''/>
                <P1>Nigerian woman</P1>
                <div style={{display:"flex", paddingLeft:"2px", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
                <P2>67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</P2>
                <Button>View</Button>
                </div>
            </Child>
        </Wrappercard2>
            <Buttondiv >
            <Button>View More</Button>
        </Buttondiv>
        <Categories>
            <Whybox style={{marginTop:"100px", flexDirection:"column"}}>
            <p>Which categories interest you? </p>
            <p style={{fontWeight:"400",fontSize:"15px"}}>Discover project just for you and get great recommendation when you select your interst.</p>
        </Whybox>
        <Categorydiv style={{display:"flex", gap:"60px",marginTop:"40px"}}>
            <Categorycard>
                <img src='images/Frame 436.png' alt=''/>
                <p>Home</p>
            </Categorycard>
            <Categorycard>
            <img src='images/Frame 437.png' alt=''/>
                <p>Phones </p>
            </Categorycard>
            <Categorycard>
            <img src='images/Frame 438.png' alt=''/>
                <p>Health</p>
            </Categorycard>
            <Categorycard>
            <img src='images/Frame 439.png' alt=''/>
                <p>Transportation</p>
            </Categorycard>
            </Categorydiv>
        </Categories>
        <Coming/>
        <Newsletter/>
        <Footer/>
    </Container>
    </div>
  )
}

export default Home
