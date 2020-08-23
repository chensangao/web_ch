import React from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

export default class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 7
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>父组件</h2>
                <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
                <Child1 value={this.state.value} />
                <Child2 value={this.state.value} />
            </div>
        )
    }
}