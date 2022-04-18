import { PropsWithChildren} from 'react'
import PropTypes from 'prop-types'

import DataContext from './DataContext'

type EmojiProviderProps = PropsWithChildren<{
  data: {
    [key: string]: string
  }
}>

function EmojiProvider({ data, children }: EmojiProviderProps) {
  if (!data) {
    throw new Error('Please pass a data value to EmojiProvider')
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

EmojiProvider.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EmojiProvider
