import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Fragment 相当于vue的template
class Xiaojiejie extends Component {
    // 生命周期函数：在某一时刻，可以自动执行的函数
    constructor(props) { // 是es6的语法，不属于生命周期，相当于生命周期的初始化阶段。
        super(props)
        this.state = {
            inputValue: '123',
            list: [
                '洗头',
                '洗脚',
                '洗手'
            ]
        }
    }

    // componentWillMount() {
    //     console.log('componentWillMount----------虚拟dom将要挂载之前时刻');
    // }

    componentDidMount() {
        console.log('componentDidMount----------虚拟dom挂载完成时刻');
        axios.post('/postdata1')
            .then((res) => {
                console.log(res.data.list)
                this.setState({
                    list: res.data.list
                })
            })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }


    shouldComponentUpdate() {
        // console.log('1-shouldComponentUpdate----------应该更新组件');
        // 在render之前
        return true;// false 就不会执行render了
    }

    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate----------即将更新组件');
    //     // 在render之前
    //     // return true;// false 就不会执行render了
    // }

    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate----------完成更新组件');
    // }

    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps----------写在这不能执行哦，因为没有接受任何props');
    // }

    render() {
        // console.log('3-render----------组件挂载中');
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">增加服务</label>
                    <input
                        ref={input => { this.input = input }}
                        id="input"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                </div>
                <Boss />
                <ul ref={ul => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                // {
                                //     /* 加括号是为了更好的换行，可以不加 */
                                //     /* XSS 警告*/
                                // }
                                return (
                                    // <li onClick={this.deleteItem.bind(this, index)} data-key={index + '-' + item} key={index + item} dangerouslySetInnerHTML={{ __html: item }}>
                                    // </li>
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        appear={true}
                                        key={index + item}
                                    >
                                        <XiaojiejieItem list={this.state.list} deleteItem={this.deleteItem.bind(this)} key={index + item} content={item} index={index} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
            </Fragment>
        );
    }
    // 更新input输入
    inputChange() {
        // console.log(e.target.value);
        this.setState({
            inputValue: this.input.value
        })
    }
    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        });
    }
    // 删除某项
    deleteItem(index) {
        console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;