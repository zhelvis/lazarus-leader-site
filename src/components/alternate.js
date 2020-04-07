/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext } from "react"
import { Link } from "gatsby"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"

export default () => {
  const {
    i18n: { language },
  } = useTranslation("common")
  const alternateLinks = useContext(AlternateLinksContext)

  return (
    <nav>
      {alternateLinks &&
        alternateLinks.map((link, i) => (
          <React.Fragment key={i}>
            <Link
              sx={{
                p: 2,
                display: `inline-block`,
                textDecoration: `none`,
                ...(link.language === language
                  ? {
                      color: "secondary",
                      pointerEvents: `none`,
                    }
                  : {
                      color: "inherit",
                    }),
                ...(i === 2 && { mr: -2 }),
              }}
              to={link.path}
              hrefLang={link.language}
            >
              {link.language.toUpperCase()}
            </Link>
            {i < 2 && "|"}
          </React.Fragment>
        ))}
    </nav>
  )
}
