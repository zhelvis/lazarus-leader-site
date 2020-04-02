import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation("common")

  return (
    <Layout>
      <SEO title={t("name")} />
    </Layout>
  )
}

export default IndexPage
