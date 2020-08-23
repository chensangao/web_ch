import React from "react"

export default class FromDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();//阻止表单提交跳转
        console.log(this.state.value)
    }

    onChangeHandler = (e) => {//受控组件
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>表单组件</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
                    <input type="submit" value='提交' />
                </form>
            </div>
        )
    }
}