import React, { Component } from 'react';
import classes from './Blog.module.css'
import Post from '../components/Post/Post';
import NewPost from '../components/NewPost/NewPost';
import FullPost from '../components/FullPost/FullPost';


class Blog extends Component {
    render() {
        return (
            <div>
                <section className={classes.Blog}>
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    };
};

export default Blog;