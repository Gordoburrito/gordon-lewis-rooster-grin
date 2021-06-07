import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero.component"
import { TitleHTMLBodyButton } from "../components/title-HTML-body-button.component"
import { CarouselBlurb } from "../components/carousel-blurb.component"
import { Column } from "../components/column.component"
import { Cover } from "../components/cover.component"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes


    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <div className="hero container">
          <Column columnWidth="12">
            <Hero 
              image="" 
              heading="" 
              subheading="" 
              button={{text:"hello", url:"#", style:"primary"}}/>
          </Column>
        </div>
        <div className="container helping-hand">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
               title = "Lorem Ipsum"
               body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
               button = {{text:"hello", url:"#", style:"primary"}}
             />
          </Column>
          <Column columnWidth="6">
            <div className="img">Image goes here</div>
          </Column>
        </div>
        <div className="container computer">
          <Column columnWidth="12">
            <Cover bgImage="">
              <Column columnWidth="6">
                <TitleHTMLBodyButton
                  title = "LOREM IPSUM"
                  button = {{text:"hello", url:"#", style:"primary"}}
                />
              </Column>
            </Cover>
          </Column>
        </div>
        <div className="container hygiene">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
               title = "Lorem ipsum dolor sit amet"
               body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
               button = {{text:"hello", url:"#", style:"primary"}}
             />
          </Column>
          <Column columnWidth="6">
            <div className="img">Image goes here</div>
          </Column>
        </div>
        <div className="container happy-girl">
          <Column columnWidth="12">
              <Cover bgImage="">
                <Column columnWidth="6" columnStart="6">
                <TitleHTMLBodyButton
                    title = "LOREM IPSUM"
                    body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
                    button = {{text:"hello", url:"#", style:"primary"}}
                  />
                </Column>
              </Cover>
          </Column>
        </div>
        <div className="container testimonials">
          <Column columnWidth = "6">
            <TitleHTMLBodyButton
              title = "LOREM IPSUM"
              body = "stars"
            />
          </Column>
          <Column columnWidth="6">
            <CarouselBlurb
               name = "John Doe"
               date = "08/08/2019"
               quote = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
            />
          </Column>
        </div>
      </Layout>
    )
  }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo title="All posts" />
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }


export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
