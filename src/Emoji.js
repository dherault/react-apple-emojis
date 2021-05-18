import React, { useContext } from 'react'
import propTypes from 'prop-types'

import DataContext from './DataContext'

function Emoji({ name, ...props }) {
  const data = useContext(DataContext)
  const url = data[name]

  if (!url) {
    console.warn(`Emoji ${name}'s URL could not be found.`)
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
