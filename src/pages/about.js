import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation("about")

  return (
    <Layout>
      <SEO title="About" />
      <h1>{t("hi")}</h1>
    </Layout>
  )
}

export default About