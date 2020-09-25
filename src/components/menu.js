import React from "react"
import { Link, useStaticQuery } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuItems {
            link
            name
          }
        }
      }
    }
  `)
  const items = data.site.siteMetadata.menuItems
  return (
    <div>
      {items.map((ele, i) => (
        <Button key={i} buttonProp={ele} />
      ))}
    </div>
  )
}

export const Button = ({ buttonProp }) => {
  return (
    <Link to={buttonProp.link} className="menu-button">
      {buttonProp.name}
    </Link>
  )
}

export default Menu
