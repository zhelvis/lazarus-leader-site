import React from "react"
import { useTranslation } from "react-i18next"

const Experience = () => {
  const { t } = useTranslation("experience")

  return (
    <>
      <h2>{t("title")}</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <h3>{t(`item_${i}.place`)}</h3>
            <p>{t(`item_${i}.position`)}</p>
            <p>{t(`item_${i}.period`)}</p>
            <p>{t(`item_${i}.description`)}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Experience
