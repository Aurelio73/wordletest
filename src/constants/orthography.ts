import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ᠣ',
  'ᠸ',
  'ᠡ',
  'ᠷ',
  'ᠲ',
  'ᠶ',
  'ᠦ',
  'gᠢ',
  'ᠥ',
  'ᠫ',
  'ᠠ',
  'ᠰ',
  'ᠳ',
  'ᠹ',
  'ᠭ',
  'ᠬ',
  'ᠵ',
  "ᠺ",
  "ᠯ",
  'ᠽ',
  "ᠱ'",
  'ᠴ',
  "ᠤ",
  'ᠪ',
  "ᠨ",
  'ᠮ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
