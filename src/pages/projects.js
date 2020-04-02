import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation("projects")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <h2>{t("title")}</h2>
      <ul>
        <li>
          <h3>{t("project_1.title")}</h3>
          <p>{t("project_1.description")}</p>
          <ul>
            <li>{t("project_1.item_1")}</li>
            <li>{t("project_1.item_2")}</li>
            <li>{t("project_1.item_3")}</li>
          </ul>
          <a href="/">{t("moreDetailsInDoc")}</a>
        </li>
        <li>
          <h3>{t("project_2.title")}</h3>
          <p>
            {t("project_2.description")} {t("project_2.link")}
          </p>
          <a href="/">{t("moreDetailsInDoc")}</a>
        </li>
        <li>
          <h3>{t("project_3.title")}</h3>
          <p>{t("project_3.description")}</p>
          <ul>
            <li>{t("project_3.item_1")}</li>
            <li>{t("project_3.item_2")}</li>
            <li>{t("project_3.item_3")}</li>
            <li>{t("project_3.item_4")}</li>
            <li>{t("project_3.item_5")}</li>
          </ul>
          <a href="/">{t("moreDetailsInDoc")}</a>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
