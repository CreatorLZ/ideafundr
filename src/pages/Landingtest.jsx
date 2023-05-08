import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
width: 100%;
height: 100%;
`

const Button = styled.button`
padding: 16px 32px;
gap: 8px;
background-color: #00806E;
border: none;
border-radius:10px;
cursor: pointer;
:hover{
  transition:250ms;
  background-color: white;
}
`


const Firstprompt = styled.div`
width: 100wh;
height: 80vh;
background: linear-gradient(101.97deg, #FDFAFA 0.31%, rgba(217, 217, 217, 0.48) 100%), url(./images/Rectangle1.png) no-repeat center center fixed;
overflow-y: hidden;
display: flex;
flex-direction: column;
line-height: 87px;
align-items: center;
justify-content: center;

`
const Firstp = styled.p`
font-weight: 400;
font-style: normal;
font-weight: 600;
font-size: 64px;
line-height: 87px;
`


const Secondp = styled.p`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
text-align: center;
margin-bottom:30px;
`
const Secondprompt = styled.div`
width: 100%;
height: 670px;
background: #1D2D35;
align-items: center;
overflow: hidden;
display: flex;


`

const Imagebox= styled.div`
box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.2);
width: 513px;
height: 290px;
margin-left:40px;
img{
  width: 100%;
height: 280px;
object-fit: cover;
padding-bottom:10px;
}
`
const Secondprompttext = styled.div`
display: flex;
flex-direction: column;
margin-left:40px;
`;
const P1 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
color: white;
`
const P11 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
color: #3A4F5C;
`


const P2 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: white;
`

const P22 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #3A4F5C;
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

const P33 = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #3A4F5C;
margin-top:25px;
margin-bottom:10px;
`
const Whattododiv = styled.div`
display: flex;
gap: 20px;
`
const Whattodobox = styled.div`
display: flex;
width: 200px;
height: 160px;
background: #F2F2F2;
border-radius: 8px;
align-items: center;
p{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;

color: #000000;
}
`
const Whattodobox2 = styled.div`
display: flex;
width: 200px;
height: 160px;
background: #1D2D35;
border-radius: 8px;
align-items: center;
text-align: center;
p{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
margin-left:12px;

color: #F2F2F2;
}
`
const Thirdprompt = styled.div`
width: 100%;
height: 697px;
align-items: center;
overflow: hidden;
display: flex;
background: #F2F2F2;

`
const Thirdprompttext = styled.div`
display: flex;
flex-direction: column;
margin-left:40px;
`;





const Landingtest = () => {
  return (
    <Container>
    <Firstprompt>
        <Firstp>
        Showcase your invention to <br/>investor with immersive tech
        </Firstp>
        <Secondp>
        Get investment for your brightest Idea by demonstrating <br/> in a fully immersive virtual environment 
        </Secondp>
        <Button>Sign Up Now</Button>
      </Firstprompt>
      <Secondprompt>
        <Imagebox>
      <img src='./images/Rectangle2.png'/>
      <Button>Showcase Your Invention</Button>
        </Imagebox>
        <Secondprompttext>
          <P1>
            Are you an inventor?
          </P1>
          <P2>
          Showcase your invention to prospective investors, so you <br/> can secure funding to bring your product to market and scale as you wish.
          </P2>
          <P3>
          Here’s what you need to do
          </P3>
          <Whattododiv>
            <Whattodobox><p>Create a detailed profile of your invention</p></Whattodobox>
            <Whattodobox><p>Upload your invention demonstration using AR/VR</p></Whattodobox>
            <Whattodobox><p>Connect with potential investors who might be interested in your idea</p></Whattodobox>
          </Whattododiv>
        </Secondprompttext>
      </Secondprompt>
      <Thirdprompt>
        <Thirdprompttext>

        <P11>
        Are you an Investor?
        </P11>
        <P22>
        Find promising inventions to invest in, so that you can <br/> support innovative ideas and potentially earn a return <br/> on your investment.
        </P22>
        <P33>
        Here’s what you need to do
        </P33>
        <Whattododiv>
          <Whattodobox2><p>Create a detailed profile</p></Whattodobox2>
          <Whattodobox2><p>Search for inventions based on your investment criteria</p></Whattodobox2>
          <Whattodobox2><p>Connect with inventors</p></Whattodobox2>
        </Whattododiv>
        </Thirdprompttext>
        <Imagebox>
          <img src='./images/Rectangle3.png' />
          <Button style={{marginLeft:"305px"}}>Discover New Iventions</Button>
        </Imagebox>
      </Thirdprompt>
    </Container>
   
  )
}

export default Landingtest
