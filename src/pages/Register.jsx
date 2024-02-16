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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  reenterpassword: z.string().min(8),
  firstname: z.string().min(8),
});

export const AnimatedLoader = styled.img`
  width: 1px;
  height: 1px;
  padding: 0;
`;
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  /* overflow: scroll; */
  padding: 37px;
  padding-top: 60px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 850px) {
    margin-top: 60px;
    height: fit-content;
    padding-top: 50px;
  }
`;

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

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

  const handleSubmit2 = async (data) => {
    const oneHourInMs = 60 * 60 * 1000;
    // record all   form events
    const email = data.email;
    const password = data.password;
    const displayName = data.firstname;
    const file = selectedFile;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Create FormData object and append file data
      // const formData = new FormData();
      // formData.append("file", file);

      await uploadBytesResumable(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);
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
    } catch (error) {
      console.log(error);
      console.log(error.message);
      setErrorMsg(error.message);
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper style={{ textAlign: "flex-start" }}>
        <form onSubmit={handleSubmit(handleSubmit2)}>
          <label htmlFor="name">First name</label>
          <input
            {...register("firstname")}
            placeholder="First name"
            type="text"
          />
          {errors.firstname && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "200",
              }}
            >
              {/* something went wrong... */}
              {errors.firstname.message}
            </span>
          )}
          <label htmlFor="lastname">Last name</label>
          <input
            {...register("last Name")}
            placeholder="Last Name"
            type="text"
          />
          <label htmlFor="Email">Email</label>
          <input
            {...register("email")}
            placeholder="email address"
            type="email"
          />
          {errors.email && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "200",
              }}
            >
              {/* something went wrong... */}
              {errors.email.message}
            </span>
          )}
          <label htmlFor="Password">Password</label>
          <input
            {...register("password")}
            placeholder="password"
            type="password"
          />
          {errors.password && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "200",
              }}
            >
              {/* something went wrong... */}
              {errors.password.message}
            </span>
          )}
          <label htmlFor="password">Re-enter password</label>
          <input
            {...register("reenterpassword")}
            placeholder="re-enter password"
            type="password"
          />
          {errors.reenterpassword && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "200",
              }}
            >
              {/* something went wrong... */}
              {errors.reenterpassword.message}
            </span>
          )}
          <input
            type="file"
            {...register("picture")}
            id="picture"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              setSelectedFile(file);
              setValue("picture", selectedFile);
            }}
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
          {/* <Button>
            {loading ? (
              <AnimatedLoader src="./images/loading-gif2.gif" alt="loading" />
            ) : (
              " Sign up"
            )}
          </Button> */}
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <AnimatedLoader src="./images/loading-gif2.gif" alt="loading" />
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "#00806e" }}
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default Register;
