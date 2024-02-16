import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button1 } from "./Landing";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { storage } from "../firebase"; // Import Firebase storage
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-top:200px;
  @media only screen and (max-width: 580px) {
    padding: 0px;
    padding-top: 10px;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    padding: 0px;
  }
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
  @media only screen and (max-width: 580px) {
   justify-content: center;
   height: fit-content;
   width: fit-content;
  }
`;
export const Imagebox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: fit-content;
  height: 108px;
  padding-top: 140px;
  img {
    object-fit: cover;
    width: 204px;
    height: 204px;
    border-radius: 50%;
  }
  @media only screen and (max-width: 580px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
  }
`;

export const Namebox = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  padding: 10px;
  @media only screen and (max-width: 580px) {
  display: flex;
  flex-direction: column;
  }
`;

const Descriptionbox = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 100px;
  padding-top: 150px;
  @media only screen and (max-width: 580px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  }
  
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
  @media only screen and (max-width: 580px) {
  display: flex;
  width: 100%;
  height: fit-content;
  padding-left: 0px;
  padding: 20px;
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
  @media only screen and (max-width: 580px) {
 width: 100%;
 padding: 10px;
  }
`;

const Contactdetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;
  gap: 10px;
  @media only screen and (max-width: 580px) {
  display: flex;
  flex-direction: column;
  padding: 20px;
  }
`;

const Profile = () => {
  const { currentUser,  updateCurrentUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState("")

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `profileImages/${currentUser.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Progress tracking observer
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // You can update the UI with the progress if needed
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload error:', error);
        }, 
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // Update the user's photoURL in the AuthContext
            updateCurrentUser({ ...currentUser, photoURL: downloadURL });
          });
        }
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <Info>
          <Imagebox>
            <Namebox>
            <img src={currentUser.photoURL} alt="image" />
            <label htmlFor="picture" style={{display:"flex", alignItems:"center", gap:"3px"}}>
            <span>Change profile picture</span>
            <img style={{width:"30px", height:"30px",cursor:"pointer"}} src="./images/picture.png" alt="profile" />
          </label>
          
          {/* Input for file upload */}
          <input 
            type="file" 
            id="fileInput" 
            onChange={handleFileUpload} 
            style={{ display: 'none' }} // Hide the default input styling
          />
              <h3>{currentUser.displayName}</h3>
              <p>Ogun State, Nigeria </p>
              <p>1:00am Local time</p>
            </Namebox>
          </Imagebox>
        </Info>
        
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
            <li>Industry: Loading...</li>
            <li>Stage: Loading... </li>
            <li>Location: Loading...</li>
          </ul>
          <hr />
          <h3>Investment Portfolio</h3>
          <ul>
            <li>Amount: Loading...</li>
            <li>Valuation: Loading...</li>
            <li>Percentage Ownership: Loading...</li>
          </ul>
          <hr />
          <h3>Active Deal</h3>
          <ul>
            <li>Size: Loading...</li>
            <li>stage: Loading...</li>
            <li>Expected ROI: Loading...</li>
          </ul>
          <hr />
          <h3>Patent</h3>
          <ul>
            <li>Size: Loading...</li>
            <li>stage: Loading...</li>
            <li>Expected ROI: Loading...</li>
          </ul>
          <hr />
          <h3>Patent</h3>
          <ul>
            <li>Size: Loading...</li>
            <li>stage: Loading...</li>
            <li>Expected ROI: Loading...</li>
          </ul>
          <hr />
          {/* <h3>Projects that might interest you</h3> */}
        </Leftbox>
      </Descriptionbox>
      <Footer />
    </Container>
  );
};

export default Profile;
