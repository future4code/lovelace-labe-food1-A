import React, { useState, useEffect } from "react";
import App from "./App";
import logoSplash from "./assets/logoSplash.svg";
import logo from "./assets/logo.svg";
import styled from "styled-components";

const Override = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
  /* margin: 200px auto; */
  background: #e86e5a;
  /* object-fit: contain; */
  // style: vertical-align:middle
  // border-color: red;
`;

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Override>
      <img
        src={logoSplash}
        alt={"Logo da Rappi4"}
        // color={"#f5f1f0"}
        // isLoading={isLoading}
        // css={override}
        // size={200}
        // height={200}
        // width={200}
        // align-self="center"
      />
    </Override>
  ) : (
    <App />
  );
};

export default Splash;
