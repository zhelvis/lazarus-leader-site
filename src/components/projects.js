/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("projects")

  return (
    <div sx={{ variant: "container" }}>
      <h2>{t("title")}</h2>
      <div sx={{ variant: "item" }}>
        <h3>{t("project_1.title")}</h3>
        <p>{t("project_1.description")}</p>
        <ul>
          <li>{t("project_1.item_1")}</li>
          <li>{t("project_1.item_2")}</li>
          <li>{t("project_1.item_3")}</li>
        </ul>
        <a sx={{ variant: "link.disabled" }} href="/">
          {t("moreDetailsInDoc")}
        </a>
      </div>
      <div sx={{ variant: "item" }}>
        <h3>{t("project_2.title")}</h3>
        <p>{t("project_2.description")}</p>
        <a sx={{ variant: "link.disabled" }} href="/">
          {t("moreDetailsInDoc")}
        </a>
      </div>
      <div sx={{ variant: "item" }}>
        <h3>{t("project_3.title")}</h3>
        <ul>
          <li>{t("project_3.item_1")}</li>
          <li>{t("project_3.item_2")}</li>
          <li>{t("project_3.item_3")}</li>
          <li>{t("project_3.item_4")}</li>
          <li>{t("project_3.item_5")}</li>
        </ul>
        <a sx={{ variant: "link.disabled" }} href="/">
          {t("moreDetailsInDoc")}
        </a>
      </div>
    </div>
  )
}
