/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const { t } = useTranslation("404")
  return (
    <Layout>
      <SEO title={`404: ${t("notFound")}`} />
      <div sx={{ variant: "container" }}>
        <h1>404</h1>
        <p>{t("notFoundMessage")}</p>
      </div>
    </Layout>
  )
}
