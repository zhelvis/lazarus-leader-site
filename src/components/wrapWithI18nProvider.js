import React from "react"
import i18next from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"
import { Helmet } from "react-helmet"

export const AlternateLinksContext = React.createContext([])

export function wrapWithI18nProvider({ element, props }) {
  const i18n = i18next
    .createInstance({
      lng: props.pageContext.language,
      interpolation: { escapeValue: false },
      initImmediate: false,
      resources: props.pageContext.i18nResources,
    })
    .use(initReactI18next)

  i18n.init()

  return (
    <I18nextProvider i18n={i18n}>
      <AlternateLinksContext.Provider
        value={props.pageContext && props.pageContext.alternateLinks}
      >
        {
          <Helmet htmlAttributes={{ lang: props.pageContext.language }}>
            {props.pageContext &&
              props.pageContext.alternateLinks &&
              props.pageContext.alternateLinks.map((link) => (
                <link
                  rel="alternate"
                  hrefLang={link.language}
                  href={link.path}
                />
              ))}
          </Helmet>
        }
        {element}
      </AlternateLinksContext.Provider>
    </I18nextProvider>
  )
}
