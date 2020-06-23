import React from 'react'

import info from '../../../info.json'

import './PersonalInfo.scss'

function calculateAge(birthdate) {
  let ageDifMs = Date.now() - new Date(birthdate)
  let ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const PersonalInfo = () => {
  return (
    <section className="personal-info">
      <h1>{info.realname.replace(/\s/g, '\n')}</h1>
      {info.aliases.length ?
       <p>AKA: {info.aliases.join(', ')}</p> : ''}
      <p>Edad: {calculateAge(info.birthdate)}</p>
      <p>{info.selfDescription}</p>
    </section>
  )
}

export default PersonalInfo
