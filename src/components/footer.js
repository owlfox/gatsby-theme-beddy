import React from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css"
const Footer = ( props ) => (
<div className={styles.container}>
    <div className={styles.nav}>  
      <FontAwesomeIcon icon={faHome} /> 
      <div>test</div>
    </div>
    <div className={styles.nav}>
      <FontAwesomeIcon icon={faHome} />
      <div>test</div>
    </div>
    <div className={styles.nav}>
      <FontAwesomeIcon icon={faHome} />
      <div>test</div>
    </div>
    <div className={styles.nav}>
      <FontAwesomeIcon icon={faHome} />
      <div>test</div>
    </div>
    <div className={styles.nav}>
      <FontAwesomeIcon icon={faHome} />
      <div>test</div>
    </div>
</div>
)

export default Footer