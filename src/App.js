import React, { Component } from 'react';

const counter = (state = {value: 0},action)=>{
  switch (action.type){
    case'INCREMENT':
    return {value: state.value+1};
    case 'DECREMENT':
    return {value:state.value - 1};
    default:
    return state;
  }
}
class Mycounter01 extends Component {
  // State 初始化 state
  constructor(){
    super();
    this.state = counter(undefined,{});
  }
  //[2].dispatch调用counter 函数[即 reducer],
  //参数:根据当前的状态 state 和 action 动作(该 action 动作已 type 字段为标识)
  //参数:根据当前的状态
  dispatch(action){
    //[4].以 reducer 返回的新 state 更新状态,通过 this.setstate 方法修改状态值
    this.setstate(preState => counter(preState, action));
  }
  //Actions
  increment =()=>{
    this.dispatch({type:'INCREMENT'});
  };

  decrement =()=>{
    this.dispatch({type:'DECREMENT'});
  };

  //view层
  render(){
    return(
      <div>
        <p>{this.state.value}</p>
        {/* [1].用户点击加按钮,触发 this.increment函数[即 action]
        函数通过 this.dispatch发出 action, 告诉数据你应该要发生变化 */}
      </div>
    )
  }
}

export default Mycounter01;
