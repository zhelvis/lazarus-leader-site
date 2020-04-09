/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("projects")

  return (
    <div sx={{ variant: "container" }}>
      <h2>{t("title")}</h2>
      <div sx={{ variant: "item" }}>
        <h3>
          <a
            sx={{ variant: "link.body" }}
            href="https://www.f6s.com/fooddeliverywebsystems"
          >
            {t("project_1.title")}
          </a>
        </h3>
        <p>{t("project_1.description")}</p>
        <ul>
          <li>{t("project_1.item_1")}</li>
          <li>{t("project_1.item_2")}</li>
          <li>{t("project_1.item_3")}</li>
        </ul>
      </div>
      <div sx={{ variant: "item" }}>
        <h3>
          <a sx={{ variant: "link.body" }} href="/">
            {t("project_2.title")}{" "}
          </a>
        </h3>
        <p>{t("project_2.description")}</p>
      </div>
      <div sx={{ variant: "item" }}>
        <h3>
          <a sx={{ variant: "link.body" }} href="/">
            {t("project_3.title")}
          </a>
        </h3>
        <ul>
          <li>{t("project_3.item_1")}</li>
          <li>{t("project_3.item_2")}</li>
          <li>{t("project_3.item_3")}</li>
          <li>{t("project_3.item_4")}</li>
          <li>{t("project_3.item_5")}</li>
        </ul>
      </div>
    </div>
  )
}
