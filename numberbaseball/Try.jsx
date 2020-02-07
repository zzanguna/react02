import React, { PureComponent, memo, useState} from "react";

class Try extends PureComponent{
/*    constructor(props){
        super(props);
        const filtered = this.props.filter(() => {

        });
        this.state = {
            result : this.props.result,
            try : filtered
        }
        //constructor는 세심한 동작이 필요할때 주로 사용.
    }*/
/*
    state = {
        result : this.props.result
    }

    onClick = () => {
        this.setState(
            {
                result : 1
            }
        )
    }*/
    render() {
        const { tryInfo } = this.props;
        return(
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}
/*
const Try  = memo(({tryInfo})=> {
    //props를 변경할 경우
    //Try의 state로 넣어서 변경해야한다.
    const [result, setResult] = useState(tryInfo.result);

    const onClick = () => {
        setResult("1");
    }

    return(
        <li onClick={onClick}>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
})*/


export default Try;