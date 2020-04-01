import { Link } from "gatsby"
import React, { useContext } from "react"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"

const LocaleSwitcher = () => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t } = useTranslation("common")

  return (
    <ul>
      {alternateLinks &&
        alternateLinks.map((link, i) => [
          <li key={i}>
            <Link
              to={link.path}
              hrefLang={link.language}
            >
              {t(link.language)}
            </Link>
          </li>
        ])}
    </ul>
  )
}

export default LocaleSwitcher
