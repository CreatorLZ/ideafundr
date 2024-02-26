import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Landing";
import styled from "styled-components";
import { Wrapper } from "../components/Registerstyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z.object({
  email: z.string().email("Invalid email").refine((data) => !!data, {
    message: "Enter a valid email address",
  }), 
  password: z.string().min(1, "Enter password"),
  
});

export const AnimatedLoader = styled.img`
  width: 1px;
  height: 1px;
  object-fit: cover;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
  }
`;

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      handleLogout();
    }, 3600000); //1 hour
    return () => clearTimeout(sessionTimeout);
  }, [user]);

  const handleSubmit2 = async (data) => {
    const email = data.email;
    const password = data.password;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setError(true);
    
    }
  };

  return (
    <Container>
      <Wrapper style={{ paddingTop: "100px" }}>
        <form style={{gap:"10px"}} onSubmit={handleSubmit(handleSubmit2)}>
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
                fontWeight: "400",
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
                fontWeight: "400",
              }}
            >
              {/* something went wrong... */}
              {errors.password.message}
            </span>
          )}
          <Button style={{marginTop:"10px"}} disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <AnimatedLoader src="./images/loading-gif2.gif" alt="loading" />
            ) : (
              "Log in"
            )}
          </Button>
          {error && (
            <span
              style={{
                fontSize: "14px",
                color: "red",
                fontWeight: "400",
                margin: "20px",
              }}
            >
              {/* something went wrong... */}
              {errorMsg}
            </span>
          )}
        </form>
        <p>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: " #00806e" }}
            to="/Path"
          >
            Sign up
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default Login;
