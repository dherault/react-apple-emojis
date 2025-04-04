# react-apple-emojis

Apple emojis for React as images.

The package has a full list of emojis included in it. If you want your build to be lighter you can use your own list and use tree-shaking to reduce your bundle size.

## Installation

```
npm install --save react-apple-emojis
```

or

```
yarn add react-apple-emojis
```

## Usage

```jsx
import { EmojiProvider, Emoji } from "react-apple-emojis"
import emojiData from "react-apple-emojis/src/data.json"

function App() {
  return (
    <EmojiProvider data={emojiData}>
      <Emoji name="red-heart" />
      <Emoji name="smiling face with hearts" width={16} />
    </EmojiProvider>
  )
}
```

The `Emoji` component renders to an `img` tag. So pass any prop you would normally pass to an `img`.

You can use the official names, with or without dashes

**Relies on [Emojipedia](https://emojipedia.org)'s CDN, usage on heavy traffic pages is disadvised. To use your own CDN:**

```jsx
import { EmojiProvider, Emoji } from "react-apple-emojis"
import emojiData from "./emoji-data.json" // <-- Your own data

function App() {
  return (
    <EmojiProvider data={emojiData}>
      <Emoji name="red-heart" />
    </EmojiProvider>
  )
}
```

## Contributing

Yes, thank you.

## License

MIT
