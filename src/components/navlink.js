/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { defaultLocale } from "../../config"

const Navlink = ({ to, children, ...props }) => {
  const {
    i18n: { language },
  } = useTranslation("common")

  const localizedPath =
    language === defaultLocale ? to : `/${language}${to}`

  return (
    <Link {...props} sx={{ variant: "link.nav" }} to={localizedPath}>
      {children}
    </Link>
  )
}

Navlink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Navlink
