import React from "react"

export default class RefsAndDom extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();//创建ref
    }

    componentDidMount() {
        console.log(this.myRef.current);
        this.myRef.current.style.color = 'red';
    }

    render() {
        return (
            <div>
                <h2>ref And Dom</h2>
                <div ref={this.myRef}>ref</div>
            </div>
        )
    }
}