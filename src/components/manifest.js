/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation, Trans } from "react-i18next"

export default () => {
  const { t } = useTranslation("manifest")

  return (
    <div sx={{ variant: "container" }}>
      <h2>{t("title")}</h2>
      <Trans>{t("text")}</Trans>
    </div>
  )
}
