import { useContext, ImgHTMLAttributes   } from 'react'
import propTypes from 'prop-types'

import DataContext from './DataContext'

type EmojiProps = JSX.IntrinsicElements["img"] & {
  name: string
}

function Emoji({ name, ...props }: EmojiProps) {
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
