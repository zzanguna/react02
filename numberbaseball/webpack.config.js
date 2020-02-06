const path = require("path");

module.exports = {
    name : "numberbaseball-setting",
    mode:"development",
    devtool:"eval",
    resolve: {
      extensions:[".js",".jsx"],
    },
    entry:{ //입력
        app:['./client'],
    },
    module:{
      rules:[{
          test:/\.jsx?/,
          loader:'babel-loader',
          options:{
              presets: [['@babel/preset-env',{
                  targets: {  //presets env는 옛날 브러우저를 자동을 지원해주는
                      browsers:  ['last 2 chrome versions']   //크롬 버전만 호환할 수 있게(원하는 브라우저로만 바꿀 수 있다)
                  }
              }],
                  '@babel/preset-react'],
              plugins: [
                  '@babel/plugin-proposal-class-properties',
                  'react-hot-loader/babel'
              ]
          }
      }]
    },

    output: { //출력
        path : path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath:'/dist/', //가상경로
    },

}