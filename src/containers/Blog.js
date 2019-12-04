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
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.splice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log(response);
            });
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
            />
        });

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



