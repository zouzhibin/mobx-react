## mobx 概念学习
- 构建目标对象（可观察的变量）
    - 原始类型：observable.box()  
        - 原始数据类型： Number ,String, boolean,null,underfined
    - 普通对象类型:observable.object()
    - 数组类型:observable.array()
    - 映射类型：observable.map()
        - 


- 构建目标对象
    - 将一个普通的js变量，包装成一个mobx中可观察的目标对象
    - 针对不同类型的js变量,采用了不同的包装方式


- 构建目标对象状态的改变
    > 本质：改变目标对象所包装js变量的值
    > 根据包装方式的不同，采用不同的方式改变目标对象的状态    
        > 原始类型：String
            let a = observable.box()  
            a.set(101),a.get()
- 严格模式
```
严格模式：将状态的变更，限制在一个特定的区域当中，
如果在该区域之外修改状态，则会报错
```
- 模式作用
    - 不允许在action外更改任何状态
    - 约束开发者，形成开发规划
- 模式类型:configure({enforceActions:"类型"}) 
    - never: 默认，可在任意地方修改状态
    - observed: 推荐，须在action中修改已被使用状态
    - always：严格，所有状态改变都必须自爱actions中


>> when()
    > when(()=>{
        任务一，计算性的任务，返回值只能是boolean 类型
        如果任务一返回位true false
    },()=>{
        任务二
    })
    > 当任务一返回为true,在任务二执行完毕时，Mobx默认停止监听

>> reaction(()=>{
    任务一，计算性的任务，返回值可以是其他类型(Array,Object)
    return []
},(data)=>{
    
})    



### mobx管理组件状态
- 实现步骤
    1、安装mobx与react的集成模块：mobx-react
    2、在js入口文件中开启严格模式
    3、设定组件状态为目标对象（被观察者）
    4、将组件设定位观察者
    5、修改组件状态的值，render()方法会被触发


## 使用mobx的api函数管理组件状态
- 如何设置组件状态: observable()
- 如何让组件随着状态的改变而重绘，observer()
- 如何改变组件的状态:get(),set()    

## mobx 中常用装饰器
- @observer :设定组件为观察者
    - 当状态改变时，触发该组件render()方法
- @observable:设定组件要观察的状态
    - 不用考虑不同类型状态的设定方式
- @action: 设定改变状态的任务
- @computed 设定算值状态(由其他状态计算)


