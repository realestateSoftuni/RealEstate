/*jshint esversion: 6 */
import './bootstrap';
import ReactDOM from 'react-dom/client';
import Main from './main.jsx';
import {BrowserRouter} from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);
const App = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Make an API request when the form is submitted
      try {
        const response = await axios.post(`/api/search`, { query: query });
        setResults(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle errors as needed
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        {/* Display search results */}
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default App;