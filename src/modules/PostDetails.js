import React from 'react';
import './PostDetails.css'

const PostDetails = ({ item, dynamicPageItem }) => {
    const post = dynamicPageItem;
    console.log(post)
    const renderHTML = (html) => {
        return { __html: html };
    }
    return (
        <section className="post-details">
            <div className="container">
                <div className="post">
                    <h1>{post.customFields.title}</h1>
                    <p><i>By {post.customFields.author.customFields.name}</i></p>
                    {post.customFields.image &&
                        <img src={post.customFields.image.url + '?w=860&h=420'} alt="" />
                    }
                    <hr />
                    <div className="post-content" dangerouslySetInnerHTML={renderHTML(post.customFields.details)}></div>
                </div>
            </div>
        </section>
    );
}
export default PostDetails;
