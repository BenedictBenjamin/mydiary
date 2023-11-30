import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diaty</Header>
      <Main>
       <h2 style={{textAlign:"center",color:"red"}}>웹서비스 첫화면</h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Index;
