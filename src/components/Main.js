import React from "react";
import { Contents } from "../styles/mainstyle";

const Main = props => {
  return <Contents>{props.children}</Contents>;
};

export default Main;
