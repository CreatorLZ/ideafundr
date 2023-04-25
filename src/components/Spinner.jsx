import React from 'react'
import styled, { keyframes } from "styled-components";


const preloader = keyframes`
	50% {
		transform: rotate(360deg);
	}
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
`;

const Spinner = styled.svg`
    max-width: 15rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    stroke-linecap: round; 
& .path {
        animation-name: ${preloader};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        transform-origin: 170px 170px;
        will-change: transform;
    
        &:nth-of-type(1) {
            stroke-dasharray: 550px;
        }
    
        &:nth-of-type(2) {
            stroke-dasharray: 500px;
        }
    
        &:nth-of-type(3) {
            stroke-dasharray: 450px;
        }
    
        &:nth-of-type(4) {
            stroke-dasharray: 300px;
        }
    
        @for $i from 1 through 4 {
            &:nth-of-type(#{$i}) {
                animation-delay: -#{$i * 0.15}s;
            }
        }
    }
`;

const Spinneranimation = () => {
  return (
    <Container>
          <Spinner viewBox="0 0 340 340">
            <circle className="path" cx="100" cy="130" r="45" fill="#9B5599"/>
            <circle className="path" cx="170" cy="170" r="25" stroke="#2F739C" fill="none"/>
            <circle className="path" cx="110" cy="150" r="8" fill="white"/>
          </Spinner>
        </Container>
  )
}

export default Spinneranimation