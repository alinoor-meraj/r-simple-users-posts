import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './SinglePost.css'

const SinglePost = () => {
    const { id } = useParams();

    const [singlePost, setSinglePost] = useState({});

    const [comments, setComments] = useState([]);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSinglePost(data))

        //fetch Comments 

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))

    }, [id])

    return (
        <div className='singlePostDetailWrap'>
        <Link to='/'><button className="seeMoreBtn textLeft">See All Post!</button></Link>
        <h1 className='textLeft'>Post No - {id}: </h1>
            <div className='singlePostDetail'>
                <h2>{singlePost.title}</h2>
                <p>{singlePost.body}</p>
            </div>
            <hr/>
            <h1 className='textLeft'>Comments: </h1>
            <div className='allComments'>
                {
                    comments.map(comment => <Comments comment={comment} key={comment.id} />)
                }
            </div>
        </div>
    );
};

export default SinglePost;