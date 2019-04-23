import {FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts.data
        }))
};

export const createPost = (post) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: post.title,
        body: post.body
    })
        .then(post => dispatch({
            type: NEW_POST,
            payload: post.data
        }))
};