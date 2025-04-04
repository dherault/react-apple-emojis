const emojis = {}

async function parseEmojipedia() {
  while (true) {
    document.querySelectorAll('.Emoji_emoji-image__aBPU4').forEach(element => {
      const href = element.getAttribute('href');

      if (!href) return

      const name = href.split('/').pop()

      if (emojis[name]) return

      const style = window.getComputedStyle(element);
      const urlMatch = style.backgroundImage.match(/url\(["']?(.*?)["']?\)/);

      if (!urlMatch) return

      const finalUrl = urlMatch[1].replace('/thumbs/60/', '/source/').replace('.webp', '.png')

      emojis[name] = finalUrl
    })

    navigator.clipboard.writeText(JSON.stringify(emojis, null, 2))

    console.log('count', Object.keys(emojis).length)

    await wait(100)
  }
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

parseEmojipedia()
