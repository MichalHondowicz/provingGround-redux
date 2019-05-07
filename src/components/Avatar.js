import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        const {login = ""} = this.props;
        const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
        return (
            <img src={imgUrl} className="ui mini rounded image"/>
        )
    }
}

export default Avatar;