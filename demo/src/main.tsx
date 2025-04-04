import { createRoot } from 'react-dom/client'

import { Emoji, EmojiProvider } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/src/data.json'

createRoot(document.getElementById('root')!).render(
  <EmojiProvider data={emojiData}>
    <Emoji name="red heart" />
    <Emoji name="red-heart" />
    <Emoji name="red-heart" width={16} />
  </EmojiProvider>
)
