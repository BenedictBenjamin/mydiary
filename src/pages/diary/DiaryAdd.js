import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diaty add
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "purple" }}>다이어리 추가</h2>
      </Main>
      <Footer>하단영역</Footer>
    </>
  );
};

export default DiaryAdd;
