import React from "react"
//类组件 Hook形式
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "这是一个类组件",
            author: "陈浩",
            time: new Date().toLocaleTimeString(),
            count: 10
        }
    }

    setStateAsync(state) {//promise封装setState
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    async update() {
        // this.setState({
        //     time: new Date().toLocaleTimeString()
        // }, () => {
        //     console.log(this.state.time);
        // })
        // console.log(this.state.time);

        await this.setStateAsync({
            time: new Date().toLocaleTimeString()
        })
        console.log(this.state.time);
    }

    add = () => {
        this.setState({
            count: this.state.count += 1
        })
        console.log(this.state.count);
    }

    sub = () => {
        this.setState({
            count: this.state.count -= 1
        })
        console.log(this.state.count);
    }

    //渲染函数
    render() {
        console.log("render;")
        return (
            <div>
                <h2>{this.state.title}-{this.state.author}-{this.state.time}-{this.state.count}</h2>
                <button onClick={this.update.bind(this)}>刷新时间</button>
                <button onClick={this.add}>增加</button>
                <button onClick={this.sub}>减少</button>
            </div>
        )
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

}
export default Component