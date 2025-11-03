import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

const DEFAULT_LANGUAGE = LANGUAGES.SPANISH;

export const getI18N = (currentLocale: string | undefined = 'es') => {
  if (currentLocale.split('/')[1] === LANGUAGES.ENGLISH) return english
  if (currentLocale.split('/')[1] === LANGUAGES.SPANISH) return spanish
  return spanish
}

export const pathWithLanguage = (lang: string, path: string) => {
  const normalizedPath = path.replace(/^\/en/, "");
  if (lang === DEFAULT_LANGUAGE) return normalizedPath || "/";
  return `/en${normalizedPath || ""}`;
};
