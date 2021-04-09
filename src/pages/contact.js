import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import Button from "components/_ui/Button"
import dimensions from "styles/dimensions"

const Title = styled("h1")`
  margin-bottom: 1em;
`

const AboutActions = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0;
    grid-column: 1 / -1;
    grid-row: 1;
  }
`

const Contact = ({ meta }) => (
  <>
    <Helmet
      title={`Contact`}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Contact`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <Title>Contact</Title>
      <AboutActions>
        <a
          href="mailto:ubaidsiddiquimail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="Button--secondary">Email me</Button>
        </a>
      </AboutActions>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata

  return <Contact meta={meta} />
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
