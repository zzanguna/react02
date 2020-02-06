import React, {Component} from "react";

function getNumbers(){// 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component{
    state = {
        result:"",
        value:"",
        answer:getNumbers(),
        tries:[]
    };

    input;

    onSubmitForm = () =>{

    };
    onChangInput = () =>{

    };

    fruits = [
        {fruit:"사과",taste:"맛없다"},
        {fruit:"귤",taste:"맛없다"},
        {fruit:"바나나",taste:"맛없다"},
        {fruit:"멜론",taste:"맛없다"},
        {fruit:"수박",taste:"맛없다"},
        {fruit:"망고",taste:"맛없다"},
    ];
    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v)=> {
                        return(
                            <li key={v.fruit+v.taste}>{v.fruit} <b>{v.taste}</b></li>
                        )
                    })}
                </ul>
            </>
        );
    };
}

export default NumberBaseball;