import React from 'react'
import propTypes from 'prop-types'

import data from '../data.json'

function Emoji({ name, ...props }) {
  const url = data[name]

  if (!url) {
    console.warn('Emoji', name, 'could not be found.')
  }

  return (
    <img
      src={url}
      alt={name}
      aria-label={name}
      {...props}
    />
  )
}

Emoji.propTypes = {
  name: propTypes.string.isRequired,
}

export default Emoji
