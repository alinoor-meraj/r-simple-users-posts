import React, { useEffect, useState } from 'react';
import Post from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div class="allPosts">
            <h1>All Posts: </h1>

            {
                posts.map(post => <Post post={post} key={post.id} />)
            }

        </div>
    );
};

export default Home;