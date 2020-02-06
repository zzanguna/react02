const React = require('react');
const { Component } = React;
//파일을 쪼개는 경우 필요 3
//필요한 라이브러리를 가져오는 코드

class WordRelay extends Component{
    state = {
        word:"짱유나",
        value:"",
        result:"",
        text:'Hello, webpack'
    };
    onRefInput = (c) => {
        this.input = c;
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1]===this.state.value[0]){
            this.setState({
                result : "디동댕",
                word: this.state.value,
                value : ''
            });
            this.input.focus()
        }
        else{
            this.setState({
                result : "땡",
                value : ''
            });
            this.input.focus()
        }
    };

    input;

    onChangeInput = (e) => {
        this.setState({value: e.target.value});
    };

    render(){
        return(
            <>
                <div> {this.state.word} </div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력</button>
                </form>
                <div> {this.state.result}</div>
            </ >
        );


    }
}

module.exports = WordRelay;
//파일을 쪼개는 경우 필요 2
//다음 파일에도 사용할 수 있도록 하는 코드