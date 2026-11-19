import { de } from './de'
import { en } from './en'

const dictionaries = { de, en }

export function t(locale, path) {
  const dict = dictionaries[locale] || dictionaries.de
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), dict) || path
}

export { dictionaries }
