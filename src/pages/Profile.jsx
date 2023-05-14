import React, { useContext } from "react";
import styled from "styled-components";
import { Button1 } from "./Landing";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  height: 278px;
  align-items: center;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: #ffffff;
    /* padding-top: 40px; */
  }
  h3 {
    color: #1d2d35;
  }
  p {
    color: #1d2d35;
  }
`;
export const Imagebox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 70%;
  height: 108px;
  padding-top: 140px;
  img {
    width: 204px;
    height: 94px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const Namebox = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  display: flex;
  width: 400px;
  height: 100%;
  padding: 10px;
`;

const Descriptionbox = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 100px;
  padding-top: 150px;
`;
const Leftbox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 60%;
  height: 100vh;
  padding: 10px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  h3 {
    margin-top: 20px;
  }
  ul {
    padding-top: 30px;
    list-style: none;
  }

  hr {
    color: 0.8px solid #8095a2;
    width: 100%;
    height: 1px;
  }
`;
const Rightbox = styled.div`
  display: flex;
  flex-direction: column;
  background: #3a4f5c;
  border-radius: 8px;
  width: 405px;
  height: 100%;
  padding: 10px;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: #ffffff;
  }
  h3 {
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
`;

const Contactdetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;
  gap: 10px;
`;

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
      <Container>
        <Wrapper>
          <Info>
            <Imagebox>
              <img src={currentUser.photoURL} alt="image" />
              <Namebox style={{ display: "flex", flexDirection: "column" }}>
                <h3>{currentUser.displayName}</h3>
                <p>Ogun State, Nigeria 1:00am Local time</p>
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
            <h3>Investment Preferences</h3>
            <ul>
              <li>Industry: </li>
              <li>Stage: </li>
              <li>Location: </li>
            </ul>
            <hr />
            <h3>Investment Portfolio</h3>
            <ul>
              <li>Amount</li>
              <li>Valuation</li>
              <li>Percentage Ownership</li>
            </ul>
            <hr />
            <h3>Active Deal</h3>
            <ul>
              <li>Size</li>
              <li>stage</li>
              <li>Expected ROI</li>
            </ul>
            <hr />
            <h3>Patent</h3>
            <ul>
              <li>Size</li>
              <li>stage</li>
              <li>Expected ROI</li>
            </ul>
            <hr />
            <h3>Patent</h3>
            <ul>
              <li>Size</li>
              <li>stage</li>
              <li>Expected ROI</li>
            </ul>
            <hr />
            <h3>Projects that might interest you</h3>
          </Leftbox>
        </Descriptionbox>
        <Footer />
      </Container>
  );
};

export default Profile;
