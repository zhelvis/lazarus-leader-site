/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("common")

  return (
    <div
      sx={{
        px: "7vw",
        background: "linear-gradient(to right, #4d5ae3, #30d5c8)",
        color: "background",
      }}
    >
      <div sx={{ maxWidth: '768px', py: [3, 4] }}>
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
        <hr
          sx={{
            border: "none",
            color: "background",
            backgroundColor: "background",
            height: "2px",
          }}
        />
        <p>
          <a
            sx={{ variant: "link.contrast" }}
            aria-label={t("emal.label")}
            href={t("email.link")}
          >
            {t("email.text")}
          </a>
        </p>
      </div>
    </div>
  )
}
