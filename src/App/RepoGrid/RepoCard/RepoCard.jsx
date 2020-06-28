import React from 'react'

import './RepoCard.scss'


const RepoCard = ({ title, language, description, url }) => (
  <a target="_blank" href={url} className="repo-card">
    <h3>{title}</h3>
    <span
      className="language"
      lang={language.replace(/\s/g, '-')}>
      {language}
    </span>
    <p>{description}</p>
  </a>
)

export default RepoCard
