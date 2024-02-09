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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.message);
      setErrorMsg(error.message);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper style={{ paddingTop: "100px" }}>
        <form onSubmit={handleSubmit}>
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
              " Sign in"
            )}
          </Button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: " #8095A2;" }}
            to="/Register"
          >
            Sign up
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default Login;
