import React from 'react'

import Social from './Social'

import info from '../../../info.json'

import './PersonalInfo.scss'


const calculateAge = birthdate => {
  let ageDifMs = Date.now() - new Date(birthdate)
  let ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const PersonalInfo = () => (
  <section className="personal-info">
    <h1>{info.realname}</h1>
    {info.aliases.length ?
     <p>AKA: {info.aliases.join(', ')}</p> : ''}
    <p>Edad: {calculateAge(info.birthdate)}</p>
    <p>{info.selfDescription}</p>
    <Social links={info.social} />
  </section>
)

export default PersonalInfo
