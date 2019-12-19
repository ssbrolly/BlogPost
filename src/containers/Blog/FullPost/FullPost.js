import React, { Component } from 'react';
import classes from './FullPost.module.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null,
        delete: null
    };

    componentDidMount() {
        console.log(this.props)
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.match.params.id) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(res => {
                        this.setState({ loadedPost: res.data })
                    });
            };
        };
    };


    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(res => {
            });
    };

    render() {
        let post; //<p style={{ textAlign: 'center' }}>Please Select a Post!</p>
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>
        }
        if (!this.state.loadedPost) {
            post = <p style={{ textAlign: 'center' }}>Please Select a Post!</p>
        } else if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>
            );
        };
        return post;
    };
};

export default FullPost;



