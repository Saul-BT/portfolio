import React, { useState, useEffect } from 'react'
import RepoCard from './RepoCard'

import storedRepos from '../../../assets/repos.json'
import './RepoGrid.scss'


const RepoGrid = () => {
  const [ repos, setRepos ] = useState([])
  
  useEffect(() => setRepos(storedRepos), [])
  
  return (
    <div className="repo-grid">
      {repos.map(repo => (
	  <RepoCard
	    key={repo.name}
	    url={repo.url}
	    title={repo.name}
	    language={repo.language || 'unknown'}
	    description={repo.description} />
      ))}
    </div>
  )
}

export default RepoGrid
