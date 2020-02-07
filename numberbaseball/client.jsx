import React from "react";
import ReactDom from"react-dom";
import { hot } from "react-hot-loader/root";
console.log("client")

import RenderTest from "./RenderTest";

import NumberBaseball from"./NumberBaseBall";
const Hot = hot(NumberBaseball);
const RenderHot = hot(RenderTest);

ReactDom.render(<RenderHot />, document.querySelector("#root"));
