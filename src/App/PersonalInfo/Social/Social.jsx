import React from 'react'

import * as SocialIcons from '../../../../assets/icons'

import './Social.scss'


const Social = ({ links }) => (
  <section className="social">
    {Object.keys(links).map(key =>
      <a key={key}
	 href={links[key]}
	 title={key}
	 target="_blank"
	 className="key">
	<img
	  src={SocialIcons[key] || SocialIcons['Other']}
	  alt={key} />
      </a>
    )}
  </section>
)

export default Social
