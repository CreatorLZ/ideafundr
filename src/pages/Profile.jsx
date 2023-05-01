import React from 'react'
import styled from 'styled-components'
import {  Button1 } from './Landing'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
width: 100%;
height: 100%;
background: #F5F5F5;
display: flex;
flex-direction: column;
`
const Wrapper = styled.div`
width: 100%;
height: 150px;
background: #F5F5F5;
display: flex;
align-items: center;
justify-content: space-between;
padding: 120px;
`

export const Info = styled.div`
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
/* padding-top: 40px; */
}
h3{
    color: #1D2D35;
}
p{
    color: #1D2D35;
}
`
export const  Imagebox = styled.div`
align-items: center;
justify-content: center;
display: flex;
width: 70%;
height: 108px;
padding-top: 140px;
img{
    width: 94px;
height: 94px;
border-radius: 50%;
object-fit: cover;
}
`

export const Namebox = styled.div`
align-items: center;
justify-content: center;
text-align: center;
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
height: 100%;
padding:100px;
padding-top:150px;
`
const Leftbox = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
width: 60%;
height: 100vh;
padding:10px;
padding-left:70px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 40px;

h3{
    margin-top:20px
}
ul{
    padding-top:30px;
    list-style: none;
}

hr{
    color: 0.8px solid #8095A2;
    width: 100%;
    height: 1px;
}
`
const Rightbox = styled.div`
display: flex;
flex-direction: column;
background: #3A4F5C;
border-radius: 8px;
width: 405px;
height: 100%;
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
padding: 60px;
gap: 10px;
`

const Profile = () => {
  return (
    <div>
        <Navbar/>
   <Container>
   <Wrapper>
   <Info >
    <Imagebox>
   <img src='./images/Recta.png' alt='image'/>
<Namebox style={{display:'flex', flexDirection:'column'}}>
    <h3>Rokeeb Abdul</h3>
    <p>Ogun State, Nigeria  1:00am Local time</p>
</Namebox>
    </Imagebox>
   </Info>
    <Button1>Profile settings</Button1>
   </Wrapper>
   <Descriptionbox>
    <Rightbox>
   <Contactdetails>
    <h3>Contact</h3>
    <p>email@gmail.com</p>
    <p>+234- 1111-567-670</p>
    <p>website.com</p>
    <p>Social media</p>
   </Contactdetails>
   <Contactdetails>
    <h3>Language(s)</h3>
    <p>Igbo</p>
    <p>Hausa</p>
    <p>Yoruba</p>
    <p>English</p>
   </Contactdetails>
   <Contactdetails>
    <h3>Skill</h3>
    <p>Business management</p>
    <p>Leadership</p>
    <p>UX Design</p>
    <p>Marketing</p>
   </Contactdetails>
   <Contactdetails>
    <h3>Education</h3>
    <p>University of Benin</p>
    <p>English and Literature(ed)</p>
    <p>Educational Foundations</p>
    <p>2017-2021</p>
   </Contactdetails>
   <Contactdetails>
    <h3>Investment History</h3>
    <p>University of Benin</p>
    <p>English and Literature(ed)</p>
    <p>Educational Foundations</p>
    <p>2017-2021</p>
   </Contactdetails>
   </Rightbox>
   <Leftbox>
    <h3>
    Investment Preferences
    </h3>
    <ul>
    <li>Industry: </li>
    <li>Stage: </li>
    <li>Location: </li>
    </ul>
    <hr/>
    <h3>
    Investment Portfolio
    </h3>
    <ul>
    <li>Amount</li>
    <li>Valuation</li>
    <li>Percentage Ownership</li>
    </ul>
    <hr/>
    <h3>
    Active Deal
    </h3>
    <ul>
    <li>Size</li>
    <li>stage</li>
    <li>Expected ROI</li>
    </ul>
    <hr/>
    <h3>
    Patent
    </h3>
    <ul>
    <li>Size</li>
    <li>stage</li>
    <li>Expected ROI</li>
    </ul>
    <hr/>
    <h3>
    Patent
    </h3>
    <ul>
    <li>Size</li>
    <li>stage</li>
    <li>Expected ROI</li>
    </ul>
    <hr/>
    <h3>
    Projects that might interest you
    </h3>
    </Leftbox>

   </Descriptionbox>
   <Footer/>
   </Container>
   </div>
  )
}

export default Profile
