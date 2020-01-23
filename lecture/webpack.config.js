const path = require('path'); //node에서 path라고 경로를 쉽게 조작하는 기능이다.

module.exports = {
    name:'wordrelay-setting',//이름
    mode: 'development', // 실서비스 : production
    devtool : 'eval', //빠르게 한다.
    resolve:{
        extensions: ['.js','.jsx'],
    },
    //entry에서 app 안에 확장자를 따로 입력하지 않아도 알아서 찾아준다.
    //중요
    entry:{ //입력
        //app:['./client.jsx', 'WordRelay.jsx'],  //이런식으로 입력해준다.
        app:['./client'], //client.jsx 안에서 wordrelay를 불러오니깐 따로 부르지 않아도 괜찮다.
    },
    output: { //출력
        path : path.join(__dirname, 'dist'),
        //path.join : 경로를 알아서 합쳐준다. , __dirnam : 현재 폴더 경로(lecture) => 현재 폴더 안에 있느 dist
        // 실제경로는 C:\user\sysone\WebstormProjects\react02\lecture\dist 이지만
        // path.join는 위에 실제경로를 알아서 찾아 준다.
        filename: 'app.js'
    },
}