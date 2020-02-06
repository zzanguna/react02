const path = require('path'); //node에서 path라고 경로를 쉽게 조작하는 기능이다.

module.exports = {
    name:'wordrelay-setting',
    mode: 'development',
    devtool : 'eval',
    resolve:{
        extensions: ['.js','.jsx'],
    },
    entry:{ //입력
        app:['./client'],
    },
    module:{
      rules:[{
          test:/\.jsx?/, //jsx를 정규표식을 하겠다
          loader:'babel-loader',//바벨을 연결한다
          options: {
              presets: [['@babel/preset-env',{
                  targets: {  //presets env는 옛날 브러우저를 자동을 지원해주는
                      browsers:  ['> 1% in KR']   //크롬 버전만 호환할 수 있게(원하는 브라우저로만 바꿀 수 있다)
                  },
                  debug:true //개발용
              }],
                  '@babel/preset-react'],
              plugins:[
                  '@babel/plugin-proposal-class-properties',
                  'react-hot-loader/babel',
              ]
          }
      }]
    },
    plugins:[],
    //entry에 있는 파일을 읽어서 거기에 module을 적용한 수 output으로 뺀다.
    output: { //출력
        path : path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
}