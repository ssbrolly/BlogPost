import React, { Component, Suspense } from 'react';
import './Blog.css'
import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import asyncComponent from '../../hoc/asyncComponent';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

// const Posts = React.lazy(() => {
//     return import('../Blog/Posts/Posts')
// });

class Blog extends Component {
    state = {
        auth: true,
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }}>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post/',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => (<Posts />)} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts"
                        // render={() => (
                        //     <Suspense fallback={<div>Loading...</div>}>
                        //         <Posts />
                        //     </Suspense>
                        // )} 
                        component={Posts}
                    />
                    <Route render={() => <h1>Page Not Found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div >
        );
    };
};

export default Blog;



































