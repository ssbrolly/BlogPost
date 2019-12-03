import React, { Component } from 'react';
import classes from './FullPost.module.css';
import axios from 'axios';

class FullPost extends Component {
    componentDidUpdate() {
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(res => {
                    console.log(res);
                });
        }
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please Select a Post!</p>

        if (this.props.id) {
            post = (
                <div className={classes.FullPost}>
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}>Delete</button>
                    </div>
                </div>
            );
        };
        return post;
    };
};

export default FullPost;
