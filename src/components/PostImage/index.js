import React from 'react'
import './post-image.scss'

const PostImage = () => {
    return (
        <div className="post">
            <div className="post-image-wrapper">
                <img className="post-image" src="./hero-images.png" alt="postImage" />
                <div className="post-image-text">
                    <p className="comment-title">nagoya</p>
                    <div className="post-comment">
                        <div className="comment">
                            <p>221</p>
                            <img src="./heart.svg" alt="love" />
                        </div>
                        <div className="comment">
                            <p>50</p>
                            <img src="./chat.svg" alt="message" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="post-review">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this</p>
        </div>
    )
}

export default PostImage
