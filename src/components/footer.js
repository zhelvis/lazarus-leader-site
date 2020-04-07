/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("common")

  return (
    <footer
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 4,
        px: "7vw",
      }}
    >
      <span>
        © {new Date().getFullYear()}
        {` `}
        {t("title")}
      </span>
      <small sx={{ color: "grey" }}>
        {t("createdBy")}
        {` `}
        <a sx={{ variant: "link.body" }} href={t("developer.site")}>
          {t("developer.name")}
        </a>
      </small>
    </footer>
  )
}
