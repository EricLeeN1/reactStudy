import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // 组件第一次存在于dom中，函数是不会执行的。
    // 如果已经存在于DOM中，函数才会被执行
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps----------可以执行因为接受props了');
    // }

    // componentWillUnmount(){
    //     console.log('child-componentWillUnmount----------组件将要被删除，还没被删除');
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.content, this.props.content);
        console.log('1-shouldComponentUpdate----------应该更新组件');
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
        // 在render之前
        // return false;// false 就不会执行render了
    }

    render() {
        console.log('child-render')
        return (
            <li onClick={this.handleClick}>{this.props.name}为您-{this.props.content}</li>
        );
    }

    handleClick() {
        // this.props.list = []; // main.chunk.js:206 Uncaught TypeError: Cannot assign to read only property 'list' of object '#<Object>'
        console.log(`对${this.props.content}这项服务产生了反应`);
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    content: PropTypes.string,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
    name: '李四'
}

export default XiaojiejieItem;