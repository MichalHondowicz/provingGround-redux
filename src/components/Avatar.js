import React, {Component} from 'react';

class Avatar extends Component {

    onClickHandler() {
        alert("Just clicked!")
    }

    render() {
        const {login = ""} = this.props;
        const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
        return (
            <button onClick={this.onClickHandler}>
                <img src={imgUrl} className="ui mini rounded image"/>
            </button>
        )
    }
}

export default Avatar;