/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import Education from "../components/education"
import Experience from "../components/experience"
import Banner from "../components/banner"

const AboutPage = () => {
  const { t } = useTranslation("about")

  return (
    <Layout>
      <SEO title={t("title")} description={t("description")} />
      <Banner />
      <div sx={{ variant: 'container'}}>
      <h2>{t("title")}</h2>
      <table>
        <tbody>
        <tr>
            <td>{t("name.label")}</td>
            <td>{t("name.text")}</td>
          </tr>
          <tr>
            <td>{t("dateOfBirth.label")}</td>
            <td>{t("dateOfBirth.text")}</td>
          </tr>
          <tr>
            <td>{t("education.label")}</td>
            <td>{t("education.text")}</td>
          </tr>
          <tr>
            <td>{t("specialty.label")}</td>
            <td>{t("specialty.text")}</td>
          </tr>
          <tr>
            <td>{t("qualification.label")}</td>
            <td>{t("qualification.text")}</td>
          </tr>
          <tr>
            <td>{t("languages.label")}</td>
            <td>{t("languages.text")}</td>
          </tr>
          <tr>
            <td>{t("relationship.label")}</td>
            <td>{t("relationship.text")}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <Education />
      <Experience />
    </Layout>
  )
}

export default AboutPage
