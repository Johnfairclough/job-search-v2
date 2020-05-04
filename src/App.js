import React from 'react';
import './App.css';
import { JobSearch } from './JobSearch';

const jobSearch = new JobSearch('#search-form', '.result-container', '.loading-element');
jobSearch.setCountryCode();
jobSearch.configureFormListener();



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
