import React from 'react'
import PostImage from '../PostImage'
import './post.scss'

const Post = () => {
    return (
        <div className="post-wrapper">
            <h3 className="post-title">Today post top places to visit</h3>
            <hr className="title-line" />
            <div className="post-content">
                <PostImage />               
                <PostImage />               
                <PostImage />               
                <PostImage />               
                <PostImage />               
                <PostImage />               
            </div>
        </div>
    )
}

export default Post
