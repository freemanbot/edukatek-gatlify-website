import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { graphql } from "gatsby";
// import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import Testimonials from "../components/Testimonials";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link as Scroll } from "react-scroll";

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
              <Scroll to="parents">
                <button class="button is-primary">Parents</button>
              </Scroll>
            </p>
            <p class="control">
              <Scroll to="enseignants">
                <button class="button is-primary">Enseignants</button>
              </Scroll>
            </p>
            <p class="control">
              <Scroll to="schools">
                <button class="button is-primary">Écoles</button>
              </Scroll>
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
        <div className="columns is-centered is-mobile">
          <div class="column is-one-quarter is-half-mobile">
            <div class="content">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="schedule"
                />
              </figure>
              <h3>Interactivité</h3>
              <h5>A travers la multiplication des cannaux d'apprentissage</h5>
            </div>
          </div>

          <div class="column is-one-quarter is-half-mobile">
            <div class="content">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="schedule"
                />
              </figure>
              <h3>Collaboration</h3>
              <h5>Développer le travail en groupe et l'esprit collaboratif</h5>
            </div>
          </div>

          <div class="column is-one-quarter">
            <div class="content">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="schedule"
                />
              </figure>
              <h3>Accès libre</h3>
              <h5>
                Apprendre selon votre rythme (travailler même sans connexion
                Internet)
              </h5>
            </div>
          </div>

          <div class="column is-one-quarter">
            <div class="content">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="schedule"
                />
              </figure>
              <h3>Communauté</h3>
              <h5>Intégrer une communauté active et réactive</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="parents" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">Parents</h3>
            </div>
          </div>

          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Guide de démarrage</div>
            <div class="column">
              Apprendre à utiliser l'ENT en moins de 15 minutes
            </div>
            <div class="column is-one-quarter tile">
              <Link to="/blog/parents-starter-guide">Lire le guide</Link>
            </div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">L'enseignement à distance</div>
            <div class="column">
              Ce qu'il faut savoir pour en profiter pleinement
            </div>
            <div class="column is-one-quarter tile">
              <Link to="/blog/online-learning-guide">Lire la suite </Link>
            </div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Préparation aux examens</div>
            <div class="column">
              Comment bien préparer ses enfants à passer leurs examens
            </div>
            <div class="column is-one-quarter tile">En savoir plus</div>
          </div>
          <hr />
        </div>
      </div>
    </section>

    <section id="enseignants" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                Enseignants
              </h3>
            </div>
          </div>

          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">
              Demander votre compte gratuit
            </div>
            <div class="column">
              Commencer à enseigner sur l'ENT dès aujourd'hui
            </div>
            <div class="column is-one-quarter tile">Ouvrir un compte</div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Regarder la démo</div>
            <div class="column">
              En savoir plus sur ce que vous pouvez faire avec l'ENT
            </div>
            <div class="column is-one-quarter tile">En savoir plus</div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">
              Suivre le cours dédié pour les enseignants
            </div>
            <div class="column">
              Apprendre à utiliser l'ENT pour préparer et délivrer vos cours
            </div>
            <div class="column is-one-quarter tile">
              S'inscrire à la formation
            </div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Enseigner à distance</div>
            <div class="column">
              Apprendre à utiliser l'ENT en moins de 15 minutes
            </div>
            <div class="column is-one-quarter tile">Lire le guide</div>
          </div>
          <hr />
        </div>
      </div>
    </section>

    <section id="schools" className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">Écoles</h3>
            </div>
          </div>

          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Explorer les possibilités</div>
            <div class="column">
              Découvrir comment tirer profit d'un partenariat en faveur de
              l'enseignement
            </div>
            <div class="column is-one-quarter tile">En savoir plus</div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">Partager notre guide</div>
            <div class="column">
              Aider nous à promouvoir les nouveaux outils d'enseignements à
              distance
            </div>
            <div class="column is-one-quarter tile">Voir le guide</div>
          </div>
          <hr />
          <div class="columns tile subtitle">
            <div class="column is-one-quarter">
              Adopter l'Espace Numérique de Travail
            </div>
            <div class="column">
              Ouvrer l'accès de vos cours, étendre votre visibilité
            </div>
            <div class="column is-one-quarter tile">Voir le contenu</div>
          </div>
          <hr />
        </div>
      </div>
    </section>

    <div
      className="content buttons is-centered"
      style={{
        paddingBottom: "4em"
      }}
    >
      <Link class="button is-primary is-large is-primary" to="/contact">
        Demandez votre ENT
      </Link>
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
