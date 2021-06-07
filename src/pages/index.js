import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero.component"
import { TitleHTMLBodyButton } from "../components/title-HTML-body-button.component"
import { CarouselBlurb } from "../components/carousel-blurb.component"
import { Column } from "../components/column.component"
import { Cover } from "../components/cover.component"
import { Container } from "../components/container.component"
import { ColumnContainer } from "../components/column-container.component"
import { Carousel } from "../components/carousel.component"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes


    return (
    <>
      <div className = "hero-container background-image">
        <div className="container">
          <Hero 
            image="../images/img-1.jpg" 
            heading="WELCOME TO" 
            subheading="Rooster Grin" 
            button={{text:"hello", url:"#", style:"primary"}}/>
        </div>
      </div>

      <div className = "helping-hand-container">
        <ColumnContainer columnNumber="12">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
                title = "Lorem Ipsum"
                body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
                button = {{text:"hello", url:"#", style:"primary"}}
              />
          </Column>
          <Column columnWidth="6">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/img-1.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
              />
          </Column>
        </ColumnContainer>
      </div>

      <div className="computer computer-cover background-image">
        <ColumnContainer columnNumber="12">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
                title = "Lorem Ipsum"
                button = {{text:"hello", url:"#", style:"primary"}}
              />
          </Column>
        </ColumnContainer>
      </div>
      
      <div className="hygiene">
        <ColumnContainer columnNumber="12">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
                title = "Lorem Ipsum"
                body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
                button = {{text:"hello", url:"#", style:"tertiary"}}
              />
          </Column>
          <Column columnWidth="6">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/img-1.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
              />
          </Column>
        </ColumnContainer>
      </div>
      

      <div className="happy-girl background-image">
        <ColumnContainer columnNumber="12">
          <Column columnWidth="6"></Column>
          <Column columnWidth="6">
            <TitleHTMLBodyButton
                title = "Lorem Ipsum"
                body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
                button = {{text:"hello", url:"#", style:"primary"}}
              />
          </Column>
        </ColumnContainer>
      </div>

      <div className="testimonials">
        <ColumnContainer columnNumber="12">
          <Column columnWidth="6">
            <TitleHTMLBodyButton
                title = "LOREM IPSUM"
                body = {`
                <svg width="177" height="26" viewBox="0 0 177 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5508 0L9.37398 8.48092L0 9.85252L6.79161 16.4525L5.16553 25.7625L13.5508 21.3623L21.9365 25.7625L20.31 16.4525L27.1017 9.85252L17.7281 8.48092L13.5508 0Z" fill="#FF7218"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8008 0L46.624 8.48092L37.25 9.85252L44.0416 16.4525L42.4155 25.7625L50.8008 21.3623L59.1865 25.7625L57.56 16.4525L64.3517 9.85252L54.9781 8.48092L50.8008 0Z" fill="#FF7218"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M88.0508 0L83.874 8.48092L74.5 9.85252L81.2916 16.4525L79.6655 25.7625L88.0508 21.3623L96.4365 25.7625L94.81 16.4525L101.602 9.85252L92.2281 8.48092L88.0508 0Z" fill="#FF7218"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M125.301 0L121.124 8.48092L111.75 9.85252L118.542 16.4525L116.916 25.7625L125.301 21.3623L133.687 25.7625L132.06 16.4525L138.852 9.85252L129.478 8.48092L125.301 0Z" fill="#FF7218"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M162.551 0L158.374 8.48092L149 9.85252L155.792 16.4525L154.166 25.7625L162.551 21.3623L170.937 25.7625L169.31 16.4525L176.102 9.85252L166.728 8.48092L162.551 0Z" fill="#FF7218"/>
                </svg>
                `}
              />
          </Column>
          <Column columnWidth="6">
            <Carousel>
              <CarouselBlurb
                  name = "John Doe"
                  date = "08/08/2019"
                  quote = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
                />
                <CarouselBlurb
                  name = "John Doe"
                  date = "08/08/2019"
                  quote = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
                />
                <CarouselBlurb
                  name = "John Doe"
                  date = "08/08/2019"
                  quote = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
                />
              </Carousel>
          </Column>
        </ColumnContainer>
      </div>

        </>
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
