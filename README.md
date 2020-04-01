# Gatsby I18next Starter

A gatsby starter for search-engine friendly, multilanguage websites with i18next

forked from https://github.com/johannesspohr/gatsby-starter-i18next-sanity

## Features

- I18next for snippet translation
- Code-split translation resources by language and namespace
- Localized URLs (SEO friendly)
- Context-sensitive language switching (keeps current page)
- Alternate-links and language-attributes
- sitemap.xml with language information
- Localized 404 pages

## diffs

- delete CMS dependences
- rewrite page render
    - generate prefexed pages from default instead using templates
    - language and namespace settings in separate config
- add default locale
- add `LocalizedLink` component


## TODO

- rewrite Seo component


