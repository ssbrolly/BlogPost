import React, { Component } from 'react'
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    };

    componentDidMount() {
        axios.get('/posts')
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
                console.log(error);
                // this.setState({ error: true });
            });
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Somthing Went Wrong</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                );
            })
        };

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    };
};

export default Posts;



