import React, {Component} from 'react';

class BasicForm extends Component {

    constructor() {
        super();
        this.state = {
            name: " ",
            lastName: " "
        }
    }

    nameReader(e) {
        this.setState({name: e.target.value})
    };

    lastNameReader(e) {
        this.setState({lastName: e.target.value})
    };

    render() {
        return (
            <div>
                <output>{this.state.name}</output>
                <input onInput={this.lastNameReader.bind(this)}/>
                <input onInput={this.nameReader.bind(this)}/>
                <output>{this.state.lastName}</output>
            </div>
        )
    }
}

export default BasicForm;