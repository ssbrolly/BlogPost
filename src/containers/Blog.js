import React, { Component } from 'react';
import axios from 'axios';
import classes from './Blog.module.css'
import Post from '../components/Post/Post';
import NewPost from '../components/NewPost/NewPost';
import FullPost from '../components/FullPost/FullPost';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/postss')
            .then(res => {
                const posts = res.data.splice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                this.setState({ error: true });
            });
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Somthing Went Wrong</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }

        return (
            <div>
                <section className={classes.Blog}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    };
};

export default Blog;






