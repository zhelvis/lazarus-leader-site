/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { useTranslation, Trans } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <Banner />
      <div sx={{ variant: 'container' }}>
        <h2>{t("manifest.title")}</h2>
        <Trans>{t("manifest.text")}</Trans>
      </div>
    </Layout>
  )
}

export default IndexPage
