import React from "react"
import { useTranslation } from "react-i18next"
import LocalizedLink from "./localizedLink"
import LocaleSwitcher from "./localeSwitcher"

const Header = () => {
  const { t } = useTranslation("common")

  return (
    <header>
      <div>
        <h1>
          <LocalizedLink to="/">{t("title")}</LocalizedLink>
        </h1>
        <LocaleSwitcher />
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
