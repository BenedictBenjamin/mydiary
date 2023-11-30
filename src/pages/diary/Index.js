import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "blue" }}>다이어리 첫화면</h2>
      </Main>
      <Footer>하단영역3</Footer>
    </>
  );
};

export default Index;
