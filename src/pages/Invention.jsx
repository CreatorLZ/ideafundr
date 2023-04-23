import React from 'react'
import { Button } from './Landing'
import { Buttondiv, Container } from './Home'
import { Left, P1, Right } from './About'
import styled from 'styled-components'
import Footer from '../components/Footer'


const Productbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
   align-items: flex-start;
`

const Info = styled.div`
display: flex;
flex-direction: column;
width: 405px;
height: 278px;
align-items: center;

h2{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 44px;
color: #FFFFFF;
padding-top: 40px;
}
h3{
    color: #FFFFFF;
}
p{
    color: #FFFFFF;
}
`
const Imagebox = styled.div`
align-items: center;
justify-content: center;
display: flex;
width: 70%;
height: 108px;
padding-top: 120px;
img{
    width: 94px;
height: 94px;
border-radius: 50%;
object-fit: cover;
}
`

const Namebox = styled.div`
align-items: center;
justify-content: center;
gap: 10px;
display: flex;
width: 400px;
height: 100%;
padding:10px;
`

const Descriptionbox = styled.div`
gap: 10px;
display: flex;
width: 100%;
height: 1128px;
padding:10px;
padding-top:150px;
`
const Leftbox = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
width: 60%;
height: 100vh;
padding:10px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;

h3{
    margin-top:20px
}
ul{
    padding:30px;
}
`
const Rightbox = styled.div`
display: flex;
flex-direction: column;
background: #3A4F5C;
border-radius: 8px;
width: 405px;
height: 80%;
padding:10px;
h2{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 44px;
color: #FFFFFF;
}
h3{
    color: #FFFFFF;
}
p{
    color: #FFFFFF;
}
`

const Contactdetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 60px;
`

const Invention = () => {
  return (
    <Container>
    <Productbox>
   <P1 style={{fontSize:'28px', color:'#1D2D35'}}>Invention Information</P1>
   <iframe src='https://workpls.swiftxr.app/' style={{width:'1264px',height:'400px', flexDirection:'column'}}/>
   <P1 style={{fontSize:'28px', color:'#1D2D35'}}>Invention Name</P1>
   <p>Key Features: 67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</p>
   <p>Key Features: 67 layers Damascus steel with a VG10 steel core. Danish design. Built to last a lifetime.</p>

    </Productbox>
   <Button style={{width:'300px',marginTop:'20px' }}>Contact Inventor</Button>
<Descriptionbox>
    <Leftbox>
    <h3>
    Description
    </h3>
    <p>Turn any computer screen in a touch Screen.
Navigate in 3 dimensions
discover the infinite possibilities offered by "Infinity Smart Mouse"
As for smartphones, Infinity Smart mouse comes with a set of pre-installed features, but the number of applications that will be developed in all areas, are limitless
Try it , you'll adopt it</p>
    <h3>
    Technical Specification
    </h3>
    <ul>
    <li>Size</li>
    <li>Weight</li>
    <li>Material used</li>
    <li>Power Requirement</li>
    </ul>
    <h3>
    Legal information
    </h3>
    <ul>
    <li>Patents</li>
    <li>Trademark</li>
    <li>Partners</li>
    <li>Power Requirement</li>
    </ul>
    </Leftbox>
    <Rightbox>
   <Info >
    <h2>Inventor Information</h2>
    <Imagebox>
   <img src='./images/Recta.png'/>
<Namebox style={{display:'flex', flexDirection:'column'}}>
    <h3>Rokeeb Abdul</h3>
    <p>Ogun State, Nigeria</p>
</Namebox>
    </Imagebox>
   </Info>
   <Contactdetails>
    <h3>Contact</h3>
    <p>email@gmail.com</p>
    <p>+234- 1111-567-670</p>
    <p>website.com</p>
    <p>Social media</p>
   </Contactdetails>
   <Buttondiv>
    <Button style={{width:'300px' }}>View Profile</Button>
   </Buttondiv>
   </Rightbox>
   </Descriptionbox>
   <Footer/>
    </Container>
  )
}

export default Invention
