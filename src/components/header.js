/** @jsx jsx */
import { jsx } from "theme-ui"
import Navigation from "./navigation"
import Alternate from "./alternate"

export default () => {
  return (
    <header
      sx={{
        height: "60px",
        width: "100%",
        position: "fixed",
        top: 0,
        bg: "background",
        display: "flex",
        alignItems: "center",
        px: "7vw",
        borderBottom: `2px solid`,
        borderImage: `linear-gradient(to right, #4d5ae3, #30d5c8)1`,
      }}
    >
      <Navigation />
      <Alternate />
    </header>
  )
}
