import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
    <div className={containerStyles.container}>
        <h1>Gabe Kelley</h1>
        {children}
    </div>
)