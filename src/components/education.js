/** @jsx jsx */
import { jsx } from "theme-ui"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation("education")

  return (
    <div sx={{ variant: "container" }}>
      <h2>{t("title")}</h2>
      {[1, 2, 3].map((i) => (
        <div sx={{ variant: "item" }} key={i}>
          <h3>{t(`item_${i}.university`)}</h3>
          <p>{t(`item_${i}.department`)}</p>
          <p>{t(`item_${i}.period`)}</p>
          <p>{t(`item_${i}.grade`)}</p>
        </div>
      ))}
    </div>
  )
}
