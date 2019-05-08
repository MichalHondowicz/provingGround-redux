import React, {Component} from 'react';


class Counter extends Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            clickCount: 0
        }
    }

    plusButtonHandler() {
        this.setState(prevState => {
            return {
                score: prevState.score + 1,
                clickCount: prevState.clickCount + 1
            }
        })
    }

    minusButtonHandler() {
        this.setState(prevState => {
            return {
                score: prevState.score - 1,
                clickCount: prevState.clickCount + 1
            }
        })
    }

    render() {
        return (
            <div>
                <output>{this.state.score}</output>
                <button onClick={this.plusButtonHandler.bind(this)}>+</button>
                <button onClick={this.minusButtonHandler.bind(this)}>-</button>
                <output>{this.state.clickCount}</output>
            </div>
        )
    }
}

export default Counter;