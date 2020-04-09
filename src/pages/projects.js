import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Projects from "../components/projects"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("projectsPage")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <Banner />
      <Projects />
    </Layout>
  )
}
