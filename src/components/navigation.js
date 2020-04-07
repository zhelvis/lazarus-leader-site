/** @jsx jsx */
import { jsx, Close, MenuButton } from "theme-ui"
import { keyframes } from "@emotion/core"
import { useState, Fragment } from "react"
import { useTranslation } from "react-i18next"
import Navlink from "./navlink"

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: none;
  }
`

const DesktopNavigation = (props) => {
  const { t } = useTranslation("common")
  return (
    <nav {...props} sx={{ display: [`none`, `block`], flexGrow: 1 }}>
      <Navlink sx={{ ml: -2 }} to="/">
        {t("pages.index")}
      </Navlink>
      <Navlink to="/about/">{t("pages.about")}</Navlink>
      <Navlink to="/projects/">{t("pages.projects")}</Navlink>
    </nav>
  )
}

const MobileNavigation = (props) => {
  const [isOpen, setOpenBoolean] = useState(false)
  const { t } = useTranslation("common")

  return (
    <div sx={{ display: [`block`, `none`], flexGrow: 1 }}>
      <MenuButton
        aria-label={t("menu.open")}
        onClick={() => setOpenBoolean(true)}
      />
      <div
        sx={{
          height: `100vh`,
          width: `100vw`,
          position: `fixed`,
          top: 0,
          left: 0,
          zIndex: 2,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
          display: isOpen ? `flex` : `none`,
        }}
      >
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            height: `inherit`,
            px: 3,
            width: 200,
            backgroundColor: `background`,
            animation: `${animation} 0.2s ease-out 0s`,
          }}
        >
          <div
            sx={{
              display: `flex`,
              justifyContent: `flex-end`,
              alignItems: `center`,
              height: `60px`,
            }}
          >
            <Close
              aria-label={t("menu.close")}
              onClick={() => setOpenBoolean(false)}
            />
          </div>
          <nav sx={{ display: `flex`, flexDirection: "column" }} {...props}>
            <Navlink onClick={() => setOpenBoolean(false)} to="/">
              {t("pages.index")}
            </Navlink>
            <Navlink onClick={() => setOpenBoolean(false)} to="/about/">
              {t("pages.about")}
            </Navlink>
            <Navlink onClick={() => setOpenBoolean(false)} to="/projects/">
              {t("pages.projects")}
            </Navlink>
          </nav>
        </div>
        <div
          sx={{ height: `inherit`, flexGrow: `1` }}
          onClick={() => setOpenBoolean(false)}
        />
      </div>
    </div>
  )
}

const Navigation = (props) => {
  return (
    <Fragment>
      <MobileNavigation {...props} />
      <DesktopNavigation {...props} />
    </Fragment>
  )
}

export default Navigation
