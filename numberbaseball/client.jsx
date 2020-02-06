import React from "react";
import ReactDom from"react-dom";
import { hot } from "react-hot-loader/root";
console.log("client")

import NumberBaseball from"./NumberBaseBall";
const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector("#root"));
