import React from "react"
import { useTranslation } from "react-i18next"

const Education = () => {
  const { t } = useTranslation("education")

  return (
    <>
      <h2>{t("title")}</h2>
      <ul>
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <h3>{t(`item_${i}.university`)}</h3>
            <p>{t(`item_${i}.department`)}</p>
            <p>{t(`item_${i}.period`)}</p>
            <p>{t(`item_${i}.grade`)}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Education
