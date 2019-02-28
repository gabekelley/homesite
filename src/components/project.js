import React from "react"
import projectStyles from "./project.module.css"

export default () => (
  <div className={styles.project}>
    <h2 className={styles.project-name}>{props.project-name}</h2>
    <div className={styles.description}>
        <p>{props.excerpt}</p>
    </div>
  </div>
)