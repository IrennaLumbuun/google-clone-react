import React, { useEffect, useState } from "react";
import "./Articles.css";

/**
 * 1. render all javascripts
 * 2. Lifecycle of a component
 *  - Mounting: Component is inserted to a DOM
 *  - Update: State is changed -> component is updated
 *  - Unmounting: Component is removed from a DOM
 */

// useEffect - mounting, (optionally) unmounting, (optionally) state changed
// useState - declare a new state, update the state

const PAGE_SIZE = 3;

const Articles = () => {
	const [posts, setPosts] = useState([]);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const [hiddenIds, setHiddenIds] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://dummyjson.com/posts")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data.posts);
				setLoading(false);
			});
	}, []);

	const handleHide = (id) => {
		setHiddenIds([...hiddenIds, id]);
	};

	const handleLoadMore = () => {
		setVisibleCount(visibleCount + PAGE_SIZE);
	};

	const visiblePosts = posts
		.filter((post) => !hiddenIds.includes(post.id))
		.slice(0, visibleCount);

	if (loading)
		return <div className="articles-loading">Loading articles...</div>;
	return (
		<section>
			<h2>Latest News</h2>
			{/** The "&&" works similar to an if statement. Only renders the div if visibleCount.length is 0 */}
			{visibleCount.length === 0 && <div>No more articles to show</div>}

			{visiblePosts.map((post) => (
				<div className="article-card">
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<button className="hide-btn" onClick={() => handleHide(post.id)}>
						Hide{" "}
					</button>
				</div>
			))}
			{visibleCount <
				posts.filter((post) => !hiddenIds.includes(post.id)).length && (
				<button className="load-more-btn" onClick={handleLoadMore}>
					Load More
				</button>
			)}
		</section>
	);
};

export default Articles;
