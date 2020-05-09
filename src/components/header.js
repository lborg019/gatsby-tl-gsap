//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ListTLink, animateObjects, newContent } from "./layout"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <ListTLink
          to="/"
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node)
          }}
          >{siteTitle}
        </ListTLink>
        </h1>

        <h1 style={{ margin: 0 }}>
        <ListTLink
          to="/page-2"
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node)
          }}
          >Page 2
        </ListTLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header