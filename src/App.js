import React from 'react'
import './App.css'
import { JobSearch } from './JobSearch'

const jobSearch = new JobSearch(
  '#search-form',
  '.result-container',
  '.loading-element'
)
jobSearch.setCountryCode()
jobSearch.configureFormListener()

function App() {
  return <div className='App'></div>
}

export default App
