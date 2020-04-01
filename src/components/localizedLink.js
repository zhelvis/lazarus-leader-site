import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { defaultLocale } from '../../config'

const LocalizedLink = ({ to, ...props }) => {
  const { i18n } = useTranslation()

  const isIndex = to === `/`

  const path = i18n.language === defaultLocale
    ? to
    : `/${i18n.language}${isIndex ? `` : `${to}`}`

  return <Link {...props} to={path} />
}

export default LocalizedLink
