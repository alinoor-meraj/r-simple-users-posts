import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

const Post = (props) => {
    // console.log(props)
    const { title, body, id } = props.post;
    const excerptBody = body.slice(0, 60);
    return (
        <Link to={`/post/${id}`}>
            <div className="singlePostWrap" >
                {/* {console.log(excerptBody)} */}
                <h2 className="singlePostTitle">{title}</h2>
                <p className="singlePostContent">{excerptBody}...</p>
                <button className="seeMoreBtn">See More!</button>
            </div>
        </Link>
    );
};

export default Post;