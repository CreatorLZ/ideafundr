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
import styled, { css } from "styled-components";
import { Wrapper, Buttondiv } from "../components/Registerstyles";
import { countryStateData } from "../components/CountryStateData";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

export const AnimatedLoader = styled.img`
  width: 1px;
  height: 1px;
  padding: 0;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 30px;
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
export const Previous = styled.button`
  padding: 18px 32px;
  background-color: transparent;
  width: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 3px;
  color: #00806e;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: ease 1s;
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 1000px) {
    width: 230px;
    display: none;
  }
`;
export const Previous2 = styled.button`
  display: none;
  padding: 18px;
  letter-spacing: 1px;
  background-color: transparent;
  width: 40%;
  border: 2px solid #00806e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #00806e;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: ease 1s;
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 1000px) {
    width: 50%;
    display: flex;
  }
`;

export const Nextstep = styled.button`
  padding: 10px 15px;
  letter-spacing: 1px;
  gap: 8px;
  background-color: #00806e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: normal;
  width: 120px;
  margin-top: 10px;
  cursor: pointer;
  transition: ease 1s;
  :hover {
    transition: 250ms;
    background-color: #029480;
    color: white;
  }
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Nextstep2 = styled.button`
  display: none;
  padding: 20px 32px;
  letter-spacing: 1px;
  background-color: #00806e;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: ease 1s;
  border: none;
  :hover {
    transition: 250ms;
    background-color: #029480;
    color: white;
  }
  :focus {
    outline: none;
  }

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}

  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;

const Left = styled.div`
  flex: 1;
  overflow-y: scroll;
  height: 100%;
  padding: 60px 40px;
  letter-spacing: 1px;

  /* Customizing the scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 10px;
    background: transparent;
    form {
      /* padding-left: 0px; */
    }
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 50px 40px;
  /* background-color: #0bbeaa; */
  background: linear-gradient(to bottom, #fafafa 20%, #e5e5e5);

  overflow-y: scroll;
  @media only screen and (max-width: 1000px) {
    padding: 10px;
    background: transparent;
  }
`;

const RightContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  letter-spacing: 2px;
  transition: 250ms;
  @media only screen and (max-width: 1000px) {
    height: fit-content;
    width: 100%;
  }
`;

const DetailNo = styled.div`
  display: flex;
  align-items: center;
  /* height: 30px */
  gap: 10px;
  font-size: 18px;
  text-align: center;
  p {
    font-size: 20px;
    color: black;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Detaildiv = styled.div`
  display: flex;
  padding-left: 10px;
  padding-bottom: 20px;
  width: 100%;
  gap: 10px;
  p {
    color: black;
    font-weight: normal;
    font-size: 16px;
    background-color: #e5e5e5;
    padding: 10px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const Name = styled.p`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Firstnameinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const Lastnameinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const Emailinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const Phoneinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const Passwordinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const Confirmpasswordinput = styled.input`
  width: 400px;
  @media only screen and (max-width: 1000px) {
    min-width: 80vw !important;
  }
`;
const ProgressBar = styled.progress`
  width: 100%;
  height: 5px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #ddd;
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: #00806e;
    border-radius: 5px;
  }
`;

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const zipCodeRegex = /^[a-zA-Z0-9\s-]+$/;

const schema = z
  .object({
    email: z
      .string()
      .email("Invalid email")
      .refine((data) => !!data, {
        message: "Enter a valid email address",
      }),
    password: z.string().min(8),
    reenterpassword: z.string().min(1),
    firstname: z.string().min(1, "Enter firstname"),
    lastname: z.string().min(1, "Enter lastname"),
    country: z.string().min(1, "Select a country"),
    state: z.string().min(1, "Select a state"),
    city: z.string().min(1, "Enter city"),
    zipcode: z
      .string()
      .min(4, "Enter a valid code")
      .refine((data) => zipCodeRegex.test(data), {
        message: "Enter a valid zip code",
      }),
    phone: z
      .string()
      .min(1)
      .refine(
        (data) => {
          return phoneRegex.test(data);
        },
        {
          message: "Enter a valid phone number",
        }
      ),
  })
  .refine(
    (values) => {
      return values.password === values.reenterpassword;
    },
    {
      message: "Passwords must match!",
      path: ["reenterpassword"],
    }
  );

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [progress, setProgress] = useState(0);

  // const [firstName, setFirstName] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    email: "",
    phone: "",
  });

  const delta = currentStep - previousStep;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Function to update form data
  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const steps = [
    {
      id: "Step 1",
      name: "Personal Information",
      fields: ["firstname", "lastname"],
    },
    {
      id: "Step 2",
      name: "Address",
      fields: ["country", "state", "city", "zipcode"],
    },
    { id: "Step 3", name: "Contact details", fields: ["email", "phone"] },

    { id: "Step 4", name: "Security", fields: ["password", "reenterpassword"] },
    // { id: "Step 5", name: "Complete", fields: ["picture"] },
    { id: "Step 5", name: "Complete" },
  ];

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
    const displayName = data.firstname + " " + data.lastname;
    // setFirstName(data.firstname);
    // const file = selectedFile;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      // const date = new Date().getTime();
      // const storageRef = ref(storage, `${displayName + date}`);

      // await uploadBytesResumable(storageRef, file);

      // const downloadURL = await getDownloadURL(storageRef);
      // console.log("Download URL:", downloadURL);
      // Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: null,
      });

      // Create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: null,
      });

      // Set session persistence
      await setPersistence(auth, browserSessionPersistence);

      // Sign in with the created user
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      console.error("Firebase Error:", error);

      let errorMessage =
        "An error occurred during registration. Please try again.";

      // Check for specific Firebase error codes and customize the error message
      if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "The email address is already in use. Please use a different email.";
      }
      console.log(error);
      console.log(error.message);
      setErrorMsg(errorMessage);
      setError(true);
      return;
    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1 && currentStep !== 4) {
      if (currentStep === steps.length - 2) {
        handleSubmit(handleSubmit2)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
      // Calculate and update progress
      const newProgress = ((currentStep + 2) / steps.length) * 100;
      setProgress(newProgress);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
      // Calculate and update progress
      const newProgress = ((currentStep - 1) / steps.length) * 100;
      setProgress(newProgress);
    }
  };

  return (
    <Container>
      <Wrapper style={{ textAlign: "flex-start" }}>
        <Left>
          <form onSubmit={handleSubmit(handleSubmit2)}>
            <Previous onClick={prev} disabled={currentStep === 0}>
              <img src="./images/goback.png" alt="back" /> Back
            </Previous>
            {currentStep === 0 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "20px 5px",
                    color: "black",
                  }}
                >
                  Personal information <br />
                  <br />{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#8095a2",
                    }}
                  >
                    {" "}
                    Provide your personal information
                  </span>
                </p>

                <label htmlFor="name">First name</label>
                <Firstnameinput
                  {...register("firstname")}
                  placeholder="First name"
                  type="text"
                  {...register("firstname", {
                    onChange: (e) =>
                      updateFormData("firstname", e.target.value),
                  })}
                />
                <>
                  {errors.firstname?.message && (
                    <span
                      style={{
                        fontSize: "14px",
                        color: "red",
                        fontWeight: "400",
                      }}
                    >
                      {/* something went wrong... */}
                      {errors.firstname.message}
                    </span>
                  )}
                </>
                <label htmlFor="lastname">Last name</label>
                <Lastnameinput
                  {...register("lastname")}
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => {
                    setValue("lastname", e.target.value);
                    updateFormData("lastname", e.target.value);
                  }}
                />
                <>
                  {errors.lastname && (
                    <span
                      style={{
                        fontSize: "14px",
                        color: "red",
                        fontWeight: "400",
                      }}
                    >
                      {/* something went wrong... */}
                      {errors.lastname.message}
                    </span>
                  )}
                </>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "20px 5px",
                    color: "black",
                  }}
                >
                  Address <br />
                  <br />{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#8095a2",
                    }}
                  >
                    {" "}
                    Provide your address information
                  </span>
                </p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="country">Country</label>
                    <select
                      {...register("country")}
                      value={selectedCountry}
                      onChange={(e) => {
                        setValue("country", e.target.value);
                        updateFormData("country", e.target.value);
                        setSelectedCountry(e.target.value);
                        setSelectedState("");
                      }}
                    >
                      <option value="">Select a country</option>
                      {Object.keys(countryStateData).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <span
                        style={{
                          fontSize: "14px",
                          // color: "red",
                          color: "#8095a2",
                          fontWeight: "400",
                        }}
                      >
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="state">State</label>
                    <select
                      {...register("state")}
                      value={selectedState}
                      onChange={(e) => {
                        setValue("state", e.target.value);
                        updateFormData("state", e.target.value);
                        setSelectedState(e.target.value);
                      }}
                    >
                      <option value="">Select a state</option>
                      {countryStateData[selectedCountry]?.states.map(
                        (state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        )
                      )}
                    </select>
                    {errors.state && (
                      <span
                        style={{
                          fontSize: "14px",
                          // color: "red",
                          color: "#8095a2",
                          fontWeight: "400",
                        }}
                      >
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="City">City</label>
                    <input
                      {...register("city")}
                      placeholder="City"
                      type="text"
                      onChange={(e) => {
                        setValue("city", e.target.value);
                        updateFormData("city", e.target.value);
                      }}
                    />
                    {errors.city && (
                      <span
                        style={{
                          fontSize: "14px",
                          // color: "red",
                          color: "#8095a2",
                          fontWeight: "400",
                        }}
                      >
                        {/* something went wrong... */}
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="zipcode">Zip-code</label>
                    <input
                      {...register("zipcode")}
                      placeholder="zip-code"
                      type="text"
                      onChange={(e) => {
                        setValue("zipcode", e.target.value);
                        updateFormData("zipcode", e.target.value);
                      }}
                    />
                    {errors.zipcode && (
                      <span
                        style={{
                          fontSize: "14px",
                          // color: "red",
                          color: "#8095a2",
                          fontWeight: "400",
                        }}
                      >
                        {/* something went wrong... */}
                        {errors.zipcode.message}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "20px 5px",
                    color: "black",
                  }}
                >
                  Contact information <br />
                  <br />{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#8095a2",
                    }}
                  >
                    {" "}
                    Provide your contact information
                  </span>
                </p>
                <label htmlFor="Email">Email</label>
                <Emailinput
                  {...register("email")}
                  placeholder="email address"
                  type="email"
                  onChange={(e) => {
                    setValue("email", e.target.value);
                    updateFormData("email", e.target.value);
                  }}
                />
                {errors.email && (
                  <span
                    style={{
                      fontSize: "14px",
                      // color: "red",
                      color: "#8095a2",
                      fontWeight: "400",
                    }}
                  >
                    {/* something went wrong... */}
                    {errors.email.message}
                  </span>
                )}
                <label htmlFor="Email">Phone number</label>
                <Phoneinput
                  {...register("phone")}
                  placeholder="+234 12 345 678 90"
                  type="text"
                  onChange={(e) => {
                    setValue("phone", e.target.value);
                    updateFormData("phone", e.target.value);
                  }}
                />
                {errors.phone && (
                  <span
                    style={{
                      fontSize: "14px",
                      // color: "red",
                      color: "#8095a2",
                      fontWeight: "400",
                    }}
                  >
                    {/* something went wrong... */}
                    {errors.phone.message}
                  </span>
                )}
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "20px 5px",
                    color: "black",
                  }}
                >
                  Security Security
                </p>
                <label htmlFor="Password">Password</label>
                <Passwordinput
                  {...register("password")}
                  placeholder="password"
                  type="password"
                />
                {errors.password && (
                  <span
                    style={{
                      fontSize: "14px",
                      // color: "red",
                      color: "#8095a2",
                      fontWeight: "400",
                    }}
                  >
                    {/* something went wrong... */}
                    {errors.password.message}
                  </span>
                )}
                <label htmlFor="password">Confirm password</label>
                <Confirmpasswordinput
                  {...register("reenterpassword")}
                  placeholder="re-enter password"
                  type="password"
                />
                <p>
                  "By clicking 'Submit,' you confirm that you have read and
                  agreed to our
                  <br /> Terms of Service and Privacy Policy.
                </p>
                {errors.reenterpassword && (
                  <span
                    style={{
                      fontSize: "14px",
                      color: "red",
                      // color: "#8095a2",
                      fontWeight: "400",
                    }}
                  >
                    {/* something went wrong... */}
                    {errors.reenterpassword.message}
                  </span>
                )}
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {error ? (
                  <p style={{ color: "#8095a2", fontSize: "20px" }}>
                    There was an error during registration. Please try again.
                  </p>
                ) : (
                  <p>
                    Welcome to Ideafundr {formData.firstname} your account has
                    been successfully created!
                  </p>
                )}
              </motion.div>
            )}

            {error && currentStep > 4 ? (
              <Nextstep
                onClick={prev}
                disabled={currentStep === steps.length - 1}
                hide={currentStep === 4 || currentStep === 5}
              >
                {isSubmitting ? (
                  <AnimatedLoader
                    src="./images/loading-gif2.gif"
                    alt="loading"
                  />
                ) : (
                  "back"
                )}
              </Nextstep>
            ) : (
              <Nextstep
                onClick={next}
                disabled={currentStep === steps.length - 1}
                hide={currentStep === 4}
              >
                {isSubmitting ? (
                  <AnimatedLoader
                    src="./images/loading-gif2.gif"
                    alt="loading"
                  />
                ) : currentStep > 2 ? (
                  "submit"
                ) : (
                  "continue"
                )}
              </Nextstep>
            )}
            <Buttondiv>
              <Previous2 onClick={prev}>Back</Previous2>
              {error && currentStep > 4 ? (
                <Nextstep2
                  onClick={prev}
                  disabled={currentStep === steps.length - 1}
                  hide={currentStep === 4 || currentStep === 5}
                >
                  {isSubmitting ? (
                    <AnimatedLoader
                      src="./images/loading-gif2.gif"
                      alt="loading"
                    />
                  ) : (
                    "back"
                  )}
                </Nextstep2>
              ) : (
                <Nextstep2
                  onClick={next}
                  disabled={currentStep === steps.length - 1}
                  hide={currentStep === 4}
                >
                  {isSubmitting ? (
                    <AnimatedLoader
                      src="./images/loading-gif2.gif"
                      alt="loading"
                    />
                  ) : currentStep > 2 ? (
                    "submit"
                  ) : (
                    "continue"
                  )}
                </Nextstep2>
              )}
            </Buttondiv>
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
        </Left>
        <Right>
          <RightContainer>
            <div>
              <span>{`${progress.toFixed(2)}% Complete`}</span>
              <ProgressBar value={progress} max="100"></ProgressBar>
            </div>
            <DetailNo style={{ paddingTop: "10px" }}>
              <div>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: 0,
                    padding: 0,
                  }}
                  src="./images/1new.png"
                  alt="no1"
                />
              </div>
              <div style={{ paddingBottom: "5px" }}>Personal information</div>
            </DetailNo>
            <Name style={{ fontSize: "16px" }}>my name is...</Name>
            <Detaildiv>
              <p>
                {formData.firstname || formData.lastname ? (
                  `${formData.firstname} ${formData.lastname}`
                ) : (
                  <span style={{ color: "gray" }}>name..</span>
                )}
              </p>
            </Detaildiv>
            <DetailNo>
              <div>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: 0,
                    padding: 0,
                  }}
                  src="./images/no2.png"
                  alt="no1"
                />
              </div>
              <div style={{ paddingBottom: "5px" }}>Address</div>
            </DetailNo>
            {/* <p style={{ fontSize: "16px" }}>my name is...</p> */}
            <Detaildiv>
              <p style={{ transition: "250ms" }}>
                {formData.country ? (
                  `${formData.country}`
                ) : (
                  <span style={{ color: "gray" }}>country..</span>
                )}
              </p>
              <p style={{ transition: "250ms" }}>
                {formData.state ? (
                  `${formData.state}`
                ) : (
                  <span style={{ color: "gray" }}>state..</span>
                )}
              </p>
              <p style={{ transition: "250ms" }}>
                {formData.city ? (
                  `${formData.city}`
                ) : (
                  <span style={{ color: "gray" }}>city..</span>
                )}
              </p>
              <p style={{ transition: "250ms" }}>
                {formData.zipcode ? (
                  `${formData.zipcode}`
                ) : (
                  <span style={{ color: "gray" }}>zipcode..</span>
                )}
              </p>
            </Detaildiv>
            <DetailNo>
              <div>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: 0,
                    padding: 0,
                  }}
                  src="./images/no3.png"
                  alt="no1"
                />
              </div>
              <div style={{ paddingBottom: "5px" }}>Contact</div>
            </DetailNo>
            {/* <p style={{ fontSize: "16px" }}>my name is...</p> */}
            <Detaildiv>
              <p>
                {formData.email ? (
                  `${formData.email} `
                ) : (
                  <span style={{ color: "gray" }}>Email...</span>
                )}
              </p>
              <p>
                {formData.phone ? (
                  `${formData.phone} `
                ) : (
                  <span style={{ color: "gray" }}>phone...</span>
                )}
              </p>
            </Detaildiv>
            <DetailNo>
              <div>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: 0,
                    padding: 0,
                  }}
                  src="./images/no4.png"
                  alt="no1"
                />
              </div>
              <div style={{ paddingBottom: "5px" }}>Submit</div>
            </DetailNo>
          </RightContainer>
        </Right>
        {/* <p>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "#00806e" }}
            to="/login"
          >
            Sign in
          </Link>
        </p> */}
      </Wrapper>
    </Container>
  );
};

export default Register;
