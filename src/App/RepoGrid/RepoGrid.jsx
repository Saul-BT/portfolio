import React, { useState, useEffect } from 'react'
import RepoCard from './RepoCard'

import info from '../../../info.json'
import storedRepos from '../../../assets/repos.json'
import './RepoGrid.scss'

const username = info.username

const getFilteredRepos = repos => {
  Object.keys(info.repoFilters).forEach(key => {
    repos = repos.filter(repo => {
      return repo[key] === Boolean(info.repoFilters[key])
    })
  })
  return repos
}


const RepoGrid = () => {
  const [ repos, setRepos ] = useState([])
  
  useEffect(() => setRepos(storedRepos), [])
  
  return (
    <div className="repo-grid">
      {repos
	.map(repo => (
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
