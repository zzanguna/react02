import React, { Component } from "react";

class Try extends Component{
    render() {
        return (
            <li>
                <div>{this.props.tryinfo.try}</div>
                <div>{this.props.tryinfo.result}</div>
            </li>
        )
    }
}

export default Try;