import React, { Component, Fragment } from 'react';


// Fragment 相当于vue的template
class Xiaojiejie extends Component {
    render() {
        return (
            <Fragment>
                <div><input /> <button>添加服务</button></div>
                <ul>
                    <li>洗头</li>
                    <li>洗脚</li>
                    <li>洗手</li>
                </ul>
            </Fragment>
        );
    }
}

export default Xiaojiejie;