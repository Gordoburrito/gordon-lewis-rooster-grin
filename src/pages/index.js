import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../components/testimonials.css";

import Seo from "../components/seo"
import { TitleHTMLBodyButton } from "../components/title-HTML-body-button.component"
import { CarouselBlurb } from "../components/carousel-blurb.component"
import { Column } from "../components/column.component"
import { ColumnContainer } from "../components/column-container.component"
import { Carousel } from "../components/carousel.component"
import { IconList} from "../components/icon-list.component"
import { SuperHero } from "../components/super-hero.component" 
import { ComputerFamily } from "../components/computer-family.component"
import { HappyGirl } from "../components/happy-girl.component"
import { Footer } from "../components/footer.component"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import IconExpertise from "../assets/home-expertise.svg"
import IconHygiene from "../assets/home-hygiene.svg"
import IconLab from "../assets/home-lab.svg"
import IconRetention from "../assets/home-retention.svg"

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible]= React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry])=> {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref ) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };

  }, [ref, options])

  return [setRef, visible];
}

const BlogIndex = () => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  const [setRef, visible] = useOnScreen({threshold: 0.5})

    return (
      <>
        <Seo title="Home"/>
        <SuperHero
          heading="WELCOME TO" 
          subheading="Rooster Grin" 
          button={{text:"Button button", url:"#", style:"primary"}}
        />

        <div className = "helping-hand-container">
          <ColumnContainer columnNumber="12">
            <Column columnWidth="6">
              <TitleHTMLBodyButton
                  title = "Lorem Ipsum"
                  body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
                  button = {{text:"Lorem Ipsum", url:"#", style:"tertiary"}}
                />
            </Column>
            <Column columnWidth="6">
              <div className="section-image">
                <StaticImage
                  src="../images/img-1.jpg"
                  alt="two silhouettes in the sunset helping each other climb a mountain"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
            </Column>
          </ColumnContainer>
        </div>

        <ComputerFamily 
          title = "Lorem Ipsum"
          button = {{text:"BUTTON BUTTON", url:"#", style:"secondary"}}
        />

        <div className="hygiene">
          <ColumnContainer columnNumber="12">
            <Column columnWidth="6">
              <TitleHTMLBodyButton
                  title = "Lorem Ipsum"
                  body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
                  button = {{text:"Lorem Ipsum", url:"#", style:"tertiary"}}
                />
            </Column>
            <Column columnWidth="6">
              <div ref={setRef} className={`icon-background ${visible ? "inView": ""}`}>
                <IconList icons={icons}/>
              </div>
            </Column>
          </ColumnContainer>
        </div>
          
        <HappyGirl 
          title = "Lorem Ipsum"
          body = "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat ."
          button = {{text:"button button", url:"#", style:"secondary"}}
        />

        <div className="testimonials">
          <ColumnContainer columnNumber="12">
            <Column columnWidth="6">
              <TitleHTMLBodyButton
                  title = "LOREM IPSUM DOLOR SIT AMET"
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
                  name = "Jane Doe"
                  date = "08/08/2019"
                  quote = "Et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
                />
                <CarouselBlurb
                  name = "Doe J."
                  date = "11/08/1994"
                  quote = "Sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in."
                />
              </Carousel>
            </Column>
          </ColumnContainer>
        </div>

        <Footer>
          <Instagram/>
          <Facebook/>
        </Footer>
      </>
    )
  }

export default BlogIndex

const icons = [
  {name:"expertise",
  svg:<IconExpertise/>}, 

  {name: "hygiene",
  svg:<IconHygiene/>},

  {name: "lab",
  svg:<IconLab/>},

  {name: "retention",
  svg: <IconRetention/>}]