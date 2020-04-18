import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import Testimonials from "../components/Testimonials";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "react-scroll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
  // testimonials,
  // fullImage
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`
        // backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
          // onClick={scrollToTop}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
        <div class="content buttons is-centered">
          <div
            class="field buttons are-medium is-grouped is-centered"
            style={{
              padding: "0.8rem"
            }}
          >
            <p class="control">
              <Link to="parents">
                <button class="button is-primary">Parents</button>
              </Link>
            </p>
            <p class="control">
              <Link to="enseignants">
                <button class="button is-primary">Enseignants</button>
              </Link>
            </p>
            <p class="control">
              <Link to="schools">
                <button class="button is-primary">Écoles</button>
              </Link>
            </p>
            {/* <p class="control">
                <button class="button is-primary">FAQ</button>
              </p> */}
          </div>
        </div>
        {/* <div
            className="content buttons is-centered"
            style={{
              marginTop: "1em"
            }}
          > 
          <a
              class="button is-primary is-light is-medium is-primary"
              href="https://learn.edukatek.com/login/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à notre ENT
          </a> */}
        {/* </button> */}
        {/* </div> */}
      </div>
    </div>
    <section id="parents" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>

          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>

    <section id="enseignants" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>

          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>

    <section id="schools" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>

          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>

    <div
      className="content buttons is-centered"
      style={{
        paddingBottom: "4em"
      }}
    >
      <a class="button is-primary is-large is-primary" href="/contact">
        Demandez votre ENT
      </a>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        // testimonials={frontmatter.testimonials}
        // fullImage={frontmatter.full_image}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
