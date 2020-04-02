import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"

const Layout = ({ children }) => {
  const { t } = useTranslation("common")
  const alternateLinks = useContext(AlternateLinksContext)

  return (
    <>
      <header>
        <div>
          <h1>{t("name")}</h1>
          <h2>{t("position")}</h2>
          <p>{t("phone.label")}</p>
          <p>{t("email.label")}</p>
          <ul>
            {alternateLinks &&
              alternateLinks.map((link, i) => [
                <li key={i}>
                  <Link to={link.path} hrefLang={link.language}>
                    {t(`languages.${link.language}`)}
                  </Link>
                </li>,
              ])}
          </ul>
        </div>
      </header>
      <hr />
      <div>
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()}
            {` `}
            {t("name")}
          </p>
          <small>
            {t("createdBy")}
            {` `}
            <a href={t("developer.site")}>{t("developer.name")}</a>
          </small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
