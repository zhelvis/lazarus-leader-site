import React from 'react'
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GeneralInfo from '../components/generalInfo'
import Education from "../components/education"
import Experience from "../components/experience"
import Banner from "../components/banner"

export default () => {
  const { t } = useTranslation("aboutPage")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <Banner />
      <GeneralInfo />
      <Education />
      <Experience />
    </Layout>
  )
}
