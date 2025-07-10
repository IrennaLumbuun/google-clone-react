import React from "react";
import "./SearchBar.css";

// Here, coolVariable is passed as a prop
const SearchBar = ({ coolVariable }) => {
	// you can now access coolVariable
	console.log(coolVariable);

	return (
		<div className="search-section">
			<div className="logo">
				<span className="logo-text">Google</span>
			</div>
			<div className="search-container">
				<div className="search-box">
					<i className="fas fa-search search-icon"></i>
					<input
						type="text"
						className="search-input"
						placeholder="Search Google or type a URL"
					/>
					<i className="fas fa-microphone mic-icon"></i>
				</div>
				<div className="search-buttons">
					<button className="search-btn">Google Search</button>
					<button className="search-btn">I'm Feeling Lucky</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
