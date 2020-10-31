import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";

import styles from "./layout.module.scss";

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query menuQuery {
          site {
            siteMetadata {
              menuItems {
                path
                name
              }
            }
          }
        }
      `}
      render={(data) => {
        const items = data.site.siteMetadata.menuItems;
        return (
          <div className={styles.menu}>
            {items.map((ele, i) => (
              <Link
                key={i}
                to={ele.path}
                className={styles.menuLink}
                getProps={({ isCurrent }) =>
                  isCurrent ? { className: styles.activeMenuLink } : {}
                }
              >
                {ele.name}
              </Link>
            ))}
          </div>
        );
      }}
    />
  );
};

export default Menu;
