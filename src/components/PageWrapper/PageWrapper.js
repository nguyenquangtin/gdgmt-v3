import React from "react"
import styled, { keyframes } from "styled-components";
import Head from "next/head";
import Header from "../Header"
import Link  from "../Link";
import favicon from '../../assets/image/favicon.png'

const innerHeader = {
  headerClasses: "site-header--menu-center light-header position-relative inner-page-header",
  containerFluid: true,
  darkLogo:true
}

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Google-colored spinner segments using conic-gradient
const Spinner = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: conic-gradient(
    #4285F4 0deg 90deg,
    #EA4335 90deg 180deg,
    #FBBC04 180deg 270deg,
    #34A853 270deg 360deg
  );
  animation: ${spin} 0.9s linear infinite;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: #fff;
  }
`;

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1.5s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

export default function PageWrapper({
  headerConfig,
  HeaderButton,
  children,
  innerPageHeader,
  preloader = true,
}) {
  const [visibleLoader, setVisibleLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setVisibleLoader(false);
    }, 1000);
  }, []);
  return (
    <>
    <Head>
          <title>GDG Mien Trung - Danang - Vietnam</title>
          <link rel="icon" type="image/png" href={favicon} />
    </Head>
      <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
        <Spinner />
      </Loader>
      <div className={`site-wrapper ${visibleLoader ?  "" : "show"}`}>
      <Header
        headerConfig={innerPageHeader ? innerHeader : headerConfig}
        // buttonBlock={innerPageHeader ? <InnerHeaderButton /> : HeaderButton}
      />
      {children}
      </div>
    </>
  )
}
