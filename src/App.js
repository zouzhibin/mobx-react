import React, { Component } from 'react';
import { DatePicker ,Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import mobx,{observable,toJS, reaction, runInAction, action} from 'mobx';
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools';
//observer 能够把组件变为观察者 ,
// 也即是说 observer(App) 这个组件对 count这个状态做了监听
// var obj = observable({
//   x: 1
// });

// var clone = toJS(obj);
// console.log(obj)
// console.log(clone)



@observer
class App extends Component {
  // 把count作为一个被观察者,将状态设置为目标对象即可观察者对象

  @observable count = 0

  @action
  handleDec =()=>{
   
    this.count--
  }

  @action
  handleInc =()=>{

    this.count++
  }
  render() {
    console.log(this)
    return (
      <div className="App">
          <div>
            <Button type="primary">Primary</Button>
            hello world
            Counter:{this.count}<br/>
            <button onClick={this.handleDec}>-</button>
            <button onClick={this.handleInc}>+</button>
          </div>
          <DevTools/>  
      </div>
    );
  }
}

export default App;


// 1、计数器应用中的状态管理
// 2、将状态设置为目标对象（可观察）
// -count=observable.box(0) 
// 3、将组件设置为观察者
// - observer(count)
// 4、在按钮的点击事件处理程序中改变状态
// -counter.set(counter.get()+1)



/**
 * setState() vs mobx
 * 重要区别
 * - 状态不用写在组件的state对象中，便于共享
 * - 在状态改变时，触发render及其后生命周期方法
 */



