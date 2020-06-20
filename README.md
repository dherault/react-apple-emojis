# react-apple-emojis

Apple emojis for React as images.

## Installation

`npm install --save react-apple-emojis` or `yarn add react-apple-emojis`

## Usage

```jsx
import React from 'react'
import Emoji from 'react-apple-emojis'

function App() {
  return (
    <>
      <Emoji name="red-heart" />
      <Emoji name="smiling-face-with-hearts" width={16} />
    </>
  )
}
```

The complete list of names can be found on [Emojipedia](https://emojipedia.org/apple/). Just click on an emoji and look at the browser's URL to find its name.

## Notice

Relies on [Emojipedia](https://emojipedia.org)'s CDN (AWS S3). Usage on heavy trafic pages is disadvised. To use your own CDN, fork this project and edit the `data.json` file.

## License

MIT
