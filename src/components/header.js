import React from "react";
import { Link } from "gatsby";

import Menu from "./menu";
import styles from "./layout.module.scss";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  let headerTitle = isRootPath ? (
    <h1 className={styles.mainHeading}>
      <Link to="/">{title}</Link>
    </h1>
  ) : (
      <Link className={styles.headerLinkHome} to="/">
        {title}
      </Link>
    );

  return (
    <header className={styles.globalHeader}>      
      {headerTitle}         
      <Menu location={location} />
    </header>
  );
};

export default Header;
