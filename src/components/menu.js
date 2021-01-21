import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";

import styles from "./layout.module.scss";

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query menuQuery {
          allContentfulMenuLinks {                          
            nodes {              
              menuItem1
              menuItem2
              menuItem3                  
            }  
          }          
        }`
      }

      render={(data) => {
        const items = data.allContentfulMenuLinks.nodes[0];
        const menuItems = Object.keys(items)

        return (
          <div className={styles.menu}>
            {menuItems.map((ele, i) => (
              <Link
                key={i}
                to={items[ele][2] ? `/${items[ele][2]}` : `/`}
                className={styles.menuLink}
                getProps={({ isCurrent }) =>
                  isCurrent ? { className: styles.activeMenuLink } : {}
                }
              >
                {items[ele][0]}
              </Link>
            ))}
          </div>
        );
      }}
    />
  );
};

export default Menu;
