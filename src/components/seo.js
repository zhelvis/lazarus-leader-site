import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useTranslation } from "react-i18next"

function SEO({ description, meta, title }) {

  const { t } = useTranslation("common")

  return (
    <Helmet
      title={title}
      titleTemplate={`${t("title")} | %s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
