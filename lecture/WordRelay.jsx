const React = require('react');
const { useState, useRef } = React;


const WordRelay = () => {
    //state 변경
    const [word, setWord] = useState('짱유나');
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);



    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1]===value[0]){
            setWord(value);
            setValue("");
            setResult("딩동댕");
            inputRef.current.focus()
        }
        else{
            setValue("");
            setResult("땡");
            inputRef.current.focus()
        }
    };



    const onChangeInput = (e) => {
        setValue(e.target.value);
    };


    return(
            <>
                <div> {word} </div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef} value={value} onChange={onChangeInput}/>
                    <button>입력</button>
                </form>
                <div> {result}</div>
            </ >
    );


}

module.exports = WordRelay;
//파일을 쪼개는 경우 필요 2
//다음 파일에도 사용할 수 있도록 하는 코드