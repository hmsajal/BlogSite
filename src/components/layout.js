import React from "react";

import Header from "./header";
import styles from "./layout.module.scss";

const Layout = ({ location, title, children, footerStyle }) => {
  return (
    <div className={styles.globalWrapper}>
      <Header location={location} title={title} />
      <main>{children}</main>
      <footer style={footerStyle}>
        © {new Date().getFullYear()}, Built with &hearts; by
        {` `}
        <a href="mailto:sajal.hm@gmail.com">hmsajal</a>
      </footer>
    </div>
  );
};

export default Layout;
