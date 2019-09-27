import React from "react"
import styles from "./header.module.css"
const Header = ( props ) => (
<h1 className={styles.title}>{props.title}</h1>
)

export default Header