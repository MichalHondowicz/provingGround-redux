import React, {Component} from 'react';


class Counter extends Component {

    constructor() {
        super();
        this.state = {score: 0}
    }

    plusButtonHandler() {
        this.setState({
            score: this.state.score + 1
        })
    }

    minusButtonHandler() {
        this.setState({
            score: this.state.score - 1
        })
    }

    render() {

        return (
            <div>
                <output>{this.state.score}</output>
                <button onClick={this.plusButtonHandler.bind(this)}>+</button>
                <button onClick={this.minusButtonHandler.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter;