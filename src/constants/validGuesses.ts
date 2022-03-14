import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
