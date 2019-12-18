import React, { Component } from 'react';
import classes from './Blog.module.css'
import Posts from '../Blog/Posts/Posts';

class Blog extends Component {
    render() {
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">Home Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div >
        );
    };
};

export default Blog;






