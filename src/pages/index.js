import React from "react"
import { graphql } from "gatsby"
import styles from "./index-css-modules.module.css"
import Container from "../components/container"

const Project = props => (
    <div className={styles.project}>
        <a href={props.href}>
            <h2 className={styles.projectname}>{props.projectname}</h2>
            <p>{props.desc}</p>
        </a>
    </div>
)

export default ({ data }) => (
    <Container>
        <h2>I work on Design Systems at Etsy, read at home, and wish I was in the woods right now.</h2>
        <p>About {data.site.siteMetadata.title}</p>
        <Project
            projectname="Bindery"
            desc="A simple reading app that I've been working on."
            href="http://readbindery.com"
        />
        <Project
            projectname="Fascinations"
            desc="A list of links I'm interested in."
            href="/fascinations"
        />
        <Project
            projectname="Photos"
            desc="A few photos uploaded every week."
            href="/photos/"
        />
    </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
