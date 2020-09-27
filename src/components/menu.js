import React from "react"

import { useStaticQuery, Link } from "gatsby"

import styles from "./layout.module.scss"

const Menu = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuItems {
            path
            name
          }
        }
      }
    }
  `)

  const items = data.site.siteMetadata.menuItems

  return (
    <div className={styles.menu}>
      {items.map((ele, i) => (
        <Link
          key={i}
          to={ele.path}
          className={styles.menuLink}
          getProps={({ isCurrent }) =>
            isCurrent ? { className: `active-menu-item` } : {}
          }
        >
          {ele.name}
        </Link>
      ))}
    </div>
  )
}

export default Menu
