import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { defaultLocale } from '../../config'

const LocalizedLink = ({ to, ...props }) => {
  const { i18n: { language } } = useTranslation()

  const isIndex = to === `/`

  const path = language === defaultLocale
    ? to
    : `/${language}${isIndex ? `` : `${to}`}`

  return <Link {...props} to={path} />
}

export default LocalizedLink
