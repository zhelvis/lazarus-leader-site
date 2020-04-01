import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import LocalizedLink from "../components/localizedLink"

const IndexPage = () => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t("hi")}</h1>
      <p>{t("welcome")}</p>
      <p>{t("buildSomethingGreat")}</p>
      <LocalizedLink to="/about">link</LocalizedLink>
    </Layout>
  )
}

export default IndexPage
