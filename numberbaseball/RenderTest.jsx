import React, {PureComponent} from "react";

class RenderTest extends PureComponent{

    state = {
        counter: 0,
        string: "hello",
        number:1,
        boolean:true,
        object:{},
        array:[]
    }



    //어떤 경우에 렌더링을 해줘야할지 정의
/*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter){
            return true;
        }
        //예전 state와 현재 state가 다른경우 렌더링
        return false;
    }
*/
        //PureComponent 시 shouldComponentUpdate를 자동으로 해주는 Component
        //하지만 array와 객체는 어려워 한다.

    onClick = () => {
        //불변성을 고려해서 만들어줘야한다.
      this.setState({
          array : [...this.state.array, 5]
      });
    };

    render() {
        console.log("렌더링")
        return(
            <div>
                <button onClick={this.onClick} >클릭</button>
            </div>
        )
    }
}

export default RenderTest;