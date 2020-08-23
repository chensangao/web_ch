import React from "react"

export default class Compose extends React.Component {
    render() {
        return (
            <div>
                <h2>组合</h2>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}