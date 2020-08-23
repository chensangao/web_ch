import React from "react"

export default class Child2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <h2>美元</h2><p>{this.props.value / 7} </p>
            </div>
        )
    }
}