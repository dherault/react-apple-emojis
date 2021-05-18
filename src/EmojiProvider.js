import React from 'react'

import DataContext from './DataContext'

function EmojiProvider({ data, children }) {
  if (!data) {
    throw new Error('Please pass a data value to EmojiProvider')
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default EmojiProvider
