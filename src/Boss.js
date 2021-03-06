import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    render() {
        return (
            <div>
                <CSSTransition in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <div>Boss级人物--孙悟空</div>
                </CSSTransition >
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>Boss级人物--孙悟空</div> */}
                < div > <button onClick={this.toToggle}>召唤Boss</button></div >
            </div >
        );
    }

    toToggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default Boss;