/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main sx={{ display: "block", pt: "60px" }}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
