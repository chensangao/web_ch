import React from "react"
import Component from "./Component"
import Nav from "./Nav"
import IfDom from "./IfDom"
import FormDemo from "./FormDemo"
import RefsAndDom from "./RefsAndDom"
import RefFrom from "./RefFrom"
import Parent from "./parentAndChild/Parent"
import Compose from "./Compose"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(element, event) {
        // this无指向
        // console.log(this);
        console.log(element, event);
    }

    render() {
        const nav1 = ["首页", "动态", "个人中心"];
        const nav2 = ["Home", "dynamic", "user"];
        const names = ['chen', 'hao'];
        return (
            <div>
                <h1>这是主页</h1>
                <Component />
                <Nav nav={nav1} />
                <Nav nav={nav2} />
                <ul>
                    {
                        names.map((element, index) => {
                            // return <li onClick={this.clickHandler.bind(this, element)} key={index}>{element}</li>
                            return <li onClick={(e) => { this.clickHandler(element, e) }} key={index}>{element}</li>
                        })
                    }
                </ul>
                <IfDom userName="陈浩" />
                <FormDemo />
                <RefsAndDom />
                <RefFrom />
                <Parent />
                <Compose>
                    这是一个插槽
                </Compose>
            </div>
        )
    }
}