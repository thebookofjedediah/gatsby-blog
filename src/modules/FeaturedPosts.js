import React from 'react';
import './Jumbotron.css'

const FeaturedPosts = ({ item }) => {
    let posts = item.customFields.posts.map(post => {
        return (
            <div className="container">
                <p>{post.customFields.title}</p>
            </div>
            
        )
    })

	return (
		<section>
			<h1>{item.customFields.title}</h1>
            <ol>
                {posts}
            </ol>
		</section>
	);
}
export default FeaturedPosts;

