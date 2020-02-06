import React, { Component } from "react";

class Try extends Component{
    render() {
        return (
            <li key={this.props.value.fruit+this.props.index.taste}>
                <span>{this.props.value.fruit}</span>
                <b>{this.props.value.taste}</b>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
                <div>컨텐츠 1</div>
            </li>
        )
    }
}

export default Try;