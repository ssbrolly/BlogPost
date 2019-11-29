import React, { Component } from 'react';
import classes from './Blog.module.css'


class Blog extends Component {
    render() {
        return (
            <div>
                <section className={classes.Posts}>
                    <p>something, something</p>
                </section>
                <section>
                    <p>somthing, something</p>
                </section>
                <section>
                    <p>something, something</p>
                </section>
            </div>
        );
    };
};

export default Blog;