import React from "react"

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <h2>导航栏</h2>
                <ul>
                    {
                        this.props.nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}