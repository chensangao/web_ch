import React from "react"

export default class IfDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userInfo: []
        }
    }
    login = () => {
        this.setState({
            userName: this.props.userName
        })
    }
    render() {
        let showView = this.state.userName == "" ? <div>请登录</div> : <div>Hello {this.state.userName}</div>
        return (
            <div>
                <h2>条件渲染</h2>{showView}
                <button onClick={this.login}>登录</button>
                {
                    this.state.userInfo.length != 0 ?
                        <div>
                            {
                                this.state.userInfo.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
                        :
                        <div>
                            <p>数据请求中.....</p>
                        </div>
                }
            </div>
        )
    }
}