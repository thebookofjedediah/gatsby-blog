import React from 'react';
import './Jumbotron.css'

const FeaturedPosts = ({ item }) => {

    let posts = item.customFields.posts.map(post => {
        return (
            <li>{post.customFields.title}</li>
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

