/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
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

export default NotFoundPage
