import { CONFIG } from './config'

export const WORDS = [
  'ᠪᠡᠨᠢᠨ',
  'ᠡᠭᠢᠫᠲᠥ',
  'ᠭᠠᠪᠥᠨ',
  'ᠭᠬᠠᠨᠠ',
  'ᠺᠡᠨᠢᠠ',
  'ᠯᠢᠪᠢᠰᠠ',
  'ᠨᠢᠭᠡᠷ',
  'ᠦᠳᠠᠨ',
  'ᠴᠬᠢᠯᠡ',
  "ᠴᠬᠢᠨᠠ",
  'ᠬᠠᠢᠲᠢ',
  "ᠢᠨᠳᠢᠠ",
  'ᠵᠠᠫᠥᠨ',
  'ᠮᠠᠯᠲᠠ',
  "ᠨᠠᠦᠷᠦ",
  'ᠨᠡᠫᠠᠯ',
  'ᠫᠠᠯᠠᠦ',
  'ᠣᠠᠲᠠᠷ',
  'ᠰᠠᠮᠥᠠ',
  "ᠰᠢᠷᠢᠠ",
  "ᠲᠥᠨᠭᠠ",
  "ᠶᠡᠮᠡᠨ",
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
