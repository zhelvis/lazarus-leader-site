/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("generalInfo")

  return (
    <div sx={{ variant: "container" }}>
      <h2>{t("title")}</h2>
      <div sx={{ overflowX: "auto" }}>
        <Styled.table>
          <tbody>
            <tr>
              <Styled.td>{t("name.label")}</Styled.td>
              <Styled.td>{t("name.text")}</Styled.td>
            </tr>
            <tr>
              <Styled.td>{t("education.label")}</Styled.td>
              <Styled.td>{t("education.text")}</Styled.td>
            </tr>
            <tr>
              <Styled.td>{t("specialty.label")}</Styled.td>
              <Styled.td>{t("specialty.text")}</Styled.td>
            </tr>
            <tr>
              <Styled.td>{t("qualification.label")}</Styled.td>
              <Styled.td>{t("qualification.text")}</Styled.td>
            </tr>
            <tr>
              <Styled.td>{t("languages.label")}</Styled.td>
              <Styled.td>{t("languages.text")}</Styled.td>
            </tr>
          </tbody>
        </Styled.table>
      </div>
    </div>
  )
}
