import React, {Component} from "react";
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

class NumberBaseball extends Component {

    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: []
    };

    input;

    onSubmitForm = (e) => {
        const {result, value, ansswer, tries} = this.state;
        e.preventDefault();
        if (value == answer.join(" ")) {
            this.setState(
                {
                    result: "홈런",
                    tries: [...tries, {try: value, result: "홈런"}],//예전 tries배열과 지금 tries가 다르면 렌더링해준다.
                    //예전 tries를 복사해서 넣고 새로운 것을 넣는다.

                }
            )
        } else {// 답 틀렸을때
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패 답은 ${answer.join(',')}였습니다.`
                });
                alert("게임을 다시 시작합니다,");
                this.setState({
                    value: "",
                    answer: getNumbers(),
                    tries: []
                })
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크 ${ball} 볼.`}]
                })
            }
        }
        console.log("onSubmitFrom");
    };
    onChangInput = (e) => {
        this.setState({
            value: e.target.value
        });
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
        const { result, value, tries } = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangInput}/>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도 :`} tryinfo={v} index={i}/>
                        )
                    })}
                </ul>
            </>
        );
    };
}

export default NumberBaseball;