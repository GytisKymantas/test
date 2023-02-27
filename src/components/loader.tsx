import React from "react";
import styled from "styled-components";

export const LoadingAnimation = () => {
  return (
    <Loader>
      <LoaderSpinner></LoaderSpinner>
    </Loader>
  );
};

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #000;
  border-radius: 50%;
  animation: spinner 3s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
