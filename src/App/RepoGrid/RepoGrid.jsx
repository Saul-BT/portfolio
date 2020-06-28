import React, { useState, useEffect } from 'react'
import RepoCard from './RepoCard'

import repos from '../../../assets/repos.json'
import './RepoGrid.scss'


const RepoGrid = () => (
  <>
    <h2>Proyectos</h2>
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
  </>
)

export default RepoGrid
