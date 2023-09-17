import React, { useState } from "react";

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Send a request to your backend API to fetch search results based on user input
    fetch(`/api/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Update searchResults with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Browse your remedies</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="search-results">
        {searchResults.map((result) => (
          <div className="result-card" key={result._id}>
            <h2>{result.name}</h2>
            <p>Description: {result.description}</p>
            <p>Uses: {result.uses}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
