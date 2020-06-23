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
    console.log(repos)
  })
  return repos
}


const RepoGrid = () => {
  const [ repos, setRepos ] = useState([])
  
  useEffect(() => {
    setRepos(storedRepos)
  }, [])
  
  return (
    <div className="repo-grid">
      {repos
	.map(repo => (
	  <RepoCard
	    key={repo.name}
	    url={`https://github.com/${username}/${repo.name}`}
	    title={repo.name}
	    language={repo.language || 'null'}
	    description={repo.description} />
      ))}
    </div>
  )
}

export default RepoGrid
