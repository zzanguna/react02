const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
const WordRelay = require('./WordRelay');// 쪼갠 파일 불러오기
const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector("#root"));
//jsx 문법을 사용하려면 jsx 확장자를 해주는 것이 좋다.
1