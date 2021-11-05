# react-apple-emojis

Apple emojis for React as images.

The package is heavy because it has a full list of emojis included in it. If you want it to be lighter you can use your own list and use tree-shaking to reduce your bundle size.

## Installation

`npm install --save react-apple-emojis` or `yarn add react-apple-emojis`

## Usage

```jsx
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'

function App() {
  return (
    <EmojiProvider data={emojiData}>
      <Emoji name="red-heart" />
      <Emoji name="smiling-face-with-hearts" width={16} />
    </EmojiProvider>
  )
}
```

The `Emoji` component renders to an `img` tag. So pass any prop you would normaly pass to an `img`.

The complete list of names can be found on [Emojipedia](https://emojipedia.org/apple/). Just click on an emoji and look at the browser's URL to find its name.

**Relies on [Emojipedia](https://emojipedia.org)'s CDN (AWS S3), usage on heavy trafic pages is disadvised. To use your own CDN:**

```js
// First, create your own script to upload each image into a bucket
// scripts/upload-emojis.js
const fs = require('fs')
const path = require('path')

const data = fs.readFileSync('../node_modules/react-apple-emojis/lib/data.json', 'utf-8')
const outputLocation = path.join(__dirname, '../src/emoji-data.json')

async function uploadEmojisToBucket() {
  const outputData = {}

  for (const [name, url] of Object.entries(JSON.parse(data))) {
    const newUrl = await uploadImageToBucket(name, url)

    outputData[name] = newUrl
  }

  fs.writeFileSync(outputLocation, JSON.stringify(outputData, null, 2), 'utf-8')

  console.log('Emoji data available at', outputLocation)
}

uploadEmojisToBucket()
```

```jsx
// Then, use your newly acquired data JSON file to be used thourough your app
// src/App.js
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from './emoji-data.json'

function App() {
  return (
    <EmojiProvider data={emojiData}>
      <Emoji name="red-heart" />
      <Emoji name="smiling-face-with-hearts" width={16} />
    </EmojiProvider>
  )
}
```

## Contributing

Yes, thank you.

## License

MIT
