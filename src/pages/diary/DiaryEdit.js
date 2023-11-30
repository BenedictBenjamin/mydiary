import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);

  return (
    <>
      <Header>My Diary Edit</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "purple" }}>다이어리 수정 화면 수정 {param.pk} 글수정</h2>
      </Main>

      <Footer>하단영역 2</Footer>
    </>
  );
};

export default DiaryEdit;
