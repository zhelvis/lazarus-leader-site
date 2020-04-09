import React from 'react'
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Manifest from "../components/manifest"

export default () => {
  const { t } = useTranslation("indexPage")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <Banner />
      <Manifest />
    </Layout>
  )
}
