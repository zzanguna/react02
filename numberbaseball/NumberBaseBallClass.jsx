import React, {PureComponent} from "react";
import Try from "./Try";

function getNumbers() {// 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

//자식 컴포넌트는 memo 컴포넌트면 사용할 수 있다.
class NumberBaseBallClass extends PureComponent {

    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: []
    };

    input;
    onInputRef = (e) => {
        this.input = e;
    };

    onSubmitForm = (e) => {
        const {value, answer, tries}  = this.state;

        e.preventDefault();
        if (value == answer.join("")) {
            this.setState((prevState)=>{
                return {
                    tries: [...prevState.tries,{try : value , result : "홈런"}],
                    result : "홈런"
                }
            })

        } else {// 답 틀렸을때
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState(
                    {
                        result : `10번 넘게 틀려서 실패 답은 ${answer.join(',')}였습니다.`,
                        value : "",
                        tries : [],
                        answer:getNumbers()
                    }
                );
                alert("게임을 다시 시작합니다,");
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries : [...prevState.tries , {try : value, result :  `${strike} 스트라이크 ${ball} 볼.`}]
                    }
                })
            }
        }
    };

    onChangInput = (e) => {
        this.setState(
            {
                value : e.target.value
            }
        )
    };

    fruits = [
        {fruit: "사과", taste: "맛없다"},
        {fruit: "귤", taste: "맛없다"},
        {fruit: "바나나", taste: "맛없다"},
        {fruit: "멜론", taste: "맛없다"},
        {fruit: "수박", taste: "맛없다"},
        {fruit: "망고", taste: "맛없다"},
    ];


    render() {
        const  {value, tries, result} = this.state;
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this. onSubmitForm}>
                    <input ref={this.onInputRef} maxLength={4} value={value} onChange={this.onChangInput}/>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v} index={i}/>
                        )
                    })}
                </ul>
            </>
        );
    }


}

export default NumberBaseBallClass;