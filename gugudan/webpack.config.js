const path = require('path');
const webpack = require('webpack')


module.exports = {
    mode : 'development',
    devtool:'eval',//hidden-source-map
    resolve:{
      extensions:['.jsx','.js']
    },
    entry : {
        app:'./client',
    },
    module : {
        rules:[{
            test: /\.jsx?/,
            loader:'babel-loader',
            options: {
                presets: [['@babel/preset-env',{
                    targets: {  //presets env는 옛날 브러우저를 자동을 지원해주는
                        browsers:  ['> 1% in KR']   //크롬 버전만 호환할 수 있게(원하는 브라우저로만 바꿀 수 있다)
                    },
                    debug:true //개발용
                }],
                    '@babel/preset-react'],
                plugins:[]
            }
        }]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug: true}),//module options에 debug true를 넣어주는 것.
    ],//확장 프로그램, 웹팩에서 추가적으로 하고 싶으면 한다.
    output : {
        filename:'app.js',
        path:path.join(__dirname,'dist')
    }
}