import React from "react";
import Allinventions from "../components/Allinventions";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  padding-top: 60px;
`

const Explore = () => {
  return (
    <Container>
      <Allinventions />
      <Footer/>
    </Container>
  );
};

export default Explore;
