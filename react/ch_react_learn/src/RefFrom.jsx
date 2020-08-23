import React from "react"

export default class RefFrom extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }

    submitHandler = () => {
        console.log(this.myRef.current.value);
    }

    render() {
        return (
            <div>
                <h2>非受控组件</h2>
                <input type="text" ref={this.myRef} />
                <button onClick={this.submitHandler}>提交</button>
            </div>
        )
    }
}