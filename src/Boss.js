import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>Boss级人物--孙悟空</div>
                <div><button>召唤Boss</button></div>
            </div>
        );
    }
}

export default Boss;