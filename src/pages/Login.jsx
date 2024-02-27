import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Container = styled.div`
  width: 100vw !important;
  height: 100vh;
  background: linear-gradient(to bottom, #fafafa 20%, #e5e5e5);

  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px !important;
  width: 100%;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    input {
      padding: 16px 24px;
      border: 1px solid #8095a2;
      font-size: 16px;
      border-radius: 5px;
      :focus {
        outline: 2px solid #8095a2;
      }
    }
    @media only screen and (max-width: 1000px) {
      width: 100%;
      padding: 10px;
    }
  }
`;
const Button = styled.button`
  padding: 20px 32px;
  background-color: #00806e;
  color: #fefefe;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    transition: 250ms;
    background-color: #038d7b;
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const schema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .refine((data) => !!data, {
      message: "Enter a valid email address",
    }),
  password: z.string().min(1, "Enter password"),
});

export const AnimatedLoader = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  padding: 0;
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
      let errorMessage =
      "An error occurred during registration. Please try again.";

    // Check for specific Firebase error codes and customize the error message
    if (error.code === "auth/network-request-failed") {
      errorMessage =
        "Network error. Please check your internet connection and try again.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage =
        "Wrong password. Please try again";
    }
      console.log(error);
      console.log(error.message);
      setErrorMsg(errorMessage);
      setError(true);
      return;
    }
  };

  return (
    <Container>
      <Wrapper style={{ paddingTop: "100px" }}>
        <form style={{ gap: "10px" }} onSubmit={handleSubmit(handleSubmit2)}>
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
          <Button disabled={isSubmitting} type="submit">
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
