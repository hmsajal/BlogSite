import React from "react"

import Header from "./header"
import styles from "./layout.module.scss"

const Layout = ({ location, title, children }) => {
  return (
    <div className={styles.globalWrapper}>
      <Header location={location} title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with &hearts; by
        {` `}
        <a href="mailto:sajal.hm@gmail.com">hmsajal</a>
      </footer>
    </div>
  )
}

export default Layout
