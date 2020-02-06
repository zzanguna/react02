import React, { Component } from "react";

class Try extends Component{
    render() {
        return (
            <li key={v.fruit+v.taste}>
                <span>{v.fruit}</span>
                <b>{v.taste}</b>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
            </li>
        )
    }
}

export default Try;