import React from "react"
import styled from "styled-components";
import Head from "next/head";
import Header from "../Header"
import Link  from "../Link";
import favicon from '../../assets/image/favicon.png'
import Preloader from '../../assets/image/preloader.gif'
const innerHeader = {
  headerClasses: "site-header--menu-center light-header position-relative inner-page-header",
  containerFluid: true,
  darkLogo:true
}
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
  transition: all 1.5s linear;
  display:flex;
  align-items:center;
  justify-content:center;
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
          <img src={Preloader} alt="loader" className={visibleLoader ? "d-block" : "d-none"}/>
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
