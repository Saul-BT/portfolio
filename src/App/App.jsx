import React from 'react'
import PersonalInfo from './PersonalInfo'
import RepoGrid from './RepoGrid'

import info from '../../info.json'
import repos from '../../assets/repos.json'

// TODO: Uncomment with Parcel2
//import '../../assets/main.scss';
import './App.scss'


const App = () => (
  <>
    <PersonalInfo info={info} />
    <RepoGrid repos={repos} />
  </>
)

export default App
