import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation, Trans } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <h2>{t("manifest.title")}</h2>
      <Trans>{t("manifest.text")}</Trans>
    </Layout>
  )
}

export default IndexPage
