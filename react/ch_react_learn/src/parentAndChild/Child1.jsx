import React from "react"

export default class Child1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <h3>人民币</h3><p>{this.props.value} </p>
            </div>
        )
    }
}