import React from 'react';
import './Comments.css'

const Comments = (props) => {
    
    const { name, email, body } = props.comment;

    // console.log();

    return (
        <div className='singleComment'>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comments;