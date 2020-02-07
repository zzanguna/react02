import React, {Component} from "react";

class RenderTest extends Component{

    state = {

    }

    //어떤 경우에 렌더링을 해줘야할지 정의
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter){
            return true;
        }
        //예전 state와 현재 state가 다른경우 렌더링
        return false;
    }

    onClick = () => {
      this.setState({});
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