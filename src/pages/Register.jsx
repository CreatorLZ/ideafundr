import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Landing";
import styled from "styled-components";
import { Wrapper } from "../components/Registerstyles";

export const AnimatedLoader = styled.img`
  width: 1px;
  height: 1px;
  object-fit: cover;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  padding: 37px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  @media only screen and (max-width: 850px) {
    margin-top:100px;
    height: 110vh;
    padding-top: 20px;
  }
`;

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    // Use onAuthStateChanged to listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to the homepage
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const oneHourInMs = 60 * 60 * 1000;
    // record all required form events
    const email = e.target[2].value;
    const password = e.target[3].value;
    const displayName = e.target[0].value;
    const file = e.target[5].files[0];

    try {
      // Create user
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      // Set session persistence
      await setPersistence(auth, browserSessionPersistence);

      // Sign in with the created user
      await signInWithEmailAndPassword(auth, email, password);

      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(error.message)
      setErrorMsg(error.message)
      setError(true);
      setLoading(false);
    }
  };



  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <input placeholder="First name" type="text" name="name" required />
          <input placeholder="Last Name" type="name" name="lastname" required />
          <input
            placeholder="email address"
            type="email"
            name="email"
            required
          />
          <input
            placeholder="password"
            type="password"
            minLength="6"
            name="password"
            required
          />
          <input
            placeholder="re-enter password"
            type="password"
            minLength="6"
            name="password"
            required
          />
          <input
            type="file"
            name="file"
            id="picture"
            style={{ display: "none" }}
            required
          />
          <label htmlFor="picture">
            <img src="./images/picture.png" alt="profile" />
            <span>choose a profile picture</span>
          </label>
          <p style={{ marginBottom: "20px" }}>
            By clicking “Sign Up” you agree to our Term of use and our Privacy
            Policy
          </p>
          {error && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "200",
                margin: "20px",
              }}
            >
              {/* something went wrong... */}
              {errorMsg}
            </span>
          )}
          <Button>
            {loading ? (
              <AnimatedLoader src="./images/loading-gif2.gif" alt="loading" />
            ) : (
              " Sign up"
            )}
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            Sign in
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default Register;
