import React, { PureComponent, memo, useState} from "react";

/*class Try extends PureComponent{

    render() {
        const { tryInfo } = this.props;
        return(
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}*/

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
})


export default Try;