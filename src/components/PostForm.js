import React, {Component} from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            content: this.state.content
        };

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: post
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type='text' name='title' onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Content: </label><br/>
                        <textarea name='content' onChange={this.onChange} value={this.state.content}/>
                    </div>
                    <br/>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default PostForm;