import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../components/testimonials.css";

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { TitleHTMLBodyButton } from "../components/title-HTML-body-button.component"
import { CarouselBlurb } from "../components/carousel-blurb.component"
import { Column } from "../components/column.component"
import { Cover } from "../components/cover.component"
import { ColumnContainer } from "../components/column-container.component"
import { Carousel } from "../components/carousel.component"
import { IconList} from "../components/icon-list.component"
import { SuperHero } from "../components/super-hero.component" 
import { ComputerFamily } from "../components/computer-family.component"
import { HappyGirl } from "../components/happy-girl.component"
import { Footer } from "../components/footer.component"
import NavBar from "../components/navbar.component"
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

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  const [setRef, visible] = useOnScreen({threshold: 0.5})

    return (
    <>
    
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
              <IconList   icons={[
                  {name: "Expertise",
                  icon: "<Facebook/>",
                  name: "Hygiene",
                  icon: `<svg id="c2568bdc-91f2-42af-9a26-82e9f7107193" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>home-hygiene</title><path d="M43.5,31H38V29.68H43.5a4.68,4.68,0,0,0,0-9.37H38V19H43.5a6,6,0,0,1,0,12Z" style="fill:#87559a"/><path d="M12,31H6.5a6,6,0,0,1,0-12H12v1.31H6.5a4.68,4.68,0,0,0,0,9.37H12Z" style="fill:#aa76b3"/><path d="M25,35a41.8,41.8,0,0,1-9.64-1.11,25.93,25.93,0,0,0-3.75-.62,1.15,1.15,0,0,1-.83-.44,1.4,1.4,0,0,1-.28-1.1,40.9,40.9,0,0,0,.45-6.3,41,41,0,0,0-.45-6.29A1.4,1.4,0,0,1,10.8,18a1.14,1.14,0,0,1,.84-.43,25.78,25.78,0,0,0,7.05-1.39A20.51,20.51,0,0,1,25,15a20.51,20.51,0,0,1,6.31,1.2,25.78,25.78,0,0,0,7.05,1.39,1.14,1.14,0,0,1,.84.43,1.4,1.4,0,0,1,.29,1.11A41,41,0,0,0,39,25.43a40.89,40.89,0,0,0,.45,6.3,1.4,1.4,0,0,1-.28,1.1,1.15,1.15,0,0,1-.83.44,25.93,25.93,0,0,0-3.75.62A41.8,41.8,0,0,1,25,35Z" style="fill:#fdd140"/><path d="M25,15.49c4.69,0,7.59,2.38,13.34,2.59a.8.8,0,0,1,.67,1,41.25,41.25,0,0,0-.46,6.37A41.21,41.21,0,0,0,39,31.81a.8.8,0,0,1-.65,1C34.94,33,32,34.5,25,34.5S15.06,33,11.64,32.78a.8.8,0,0,1-.65-1,41.2,41.2,0,0,0,.46-6.38A41.25,41.25,0,0,0,11,19.06a.8.8,0,0,1,.67-1c5.75-.22,8.65-2.59,13.34-2.59m0-1a20.9,20.9,0,0,0-6.45,1.22,25.38,25.38,0,0,1-6.93,1.37,1.65,1.65,0,0,0-1.2.61,1.9,1.9,0,0,0-.4,1.5,40.47,40.47,0,0,1,.44,6.21A40.41,40.41,0,0,1,10,31.65a1.9,1.9,0,0,0,.38,1.48,1.64,1.64,0,0,0,1.18.63,25.62,25.62,0,0,1,3.68.61A42.21,42.21,0,0,0,25,35.49a42.21,42.21,0,0,0,9.74-1.12,25.62,25.62,0,0,1,3.68-.61,1.64,1.64,0,0,0,1.18-.63A1.9,1.9,0,0,0,40,31.65a40.41,40.41,0,0,1-.45-6.23A40.47,40.47,0,0,1,40,19.21a1.9,1.9,0,0,0-.4-1.5,1.65,1.65,0,0,0-1.2-.61,25.37,25.37,0,0,1-6.93-1.37A20.9,20.9,0,0,0,25,14.51Z" style="fill:#9964aa"/><path d="M25,23.93H38.58c0-.2,0-.4,0-.59C36,23,28.65,22.09,25,22.09S14,23,11.4,23.34c0,.19,0,.39,0,.59Z" style="fill:#9964aa"/><path d="M11.17,20.37c0,.18,0,.37.06.57a72.85,72.85,0,0,1,27.54,0c0-.2,0-.39.06-.57-2.36-.69-10.07-2.85-13.83-2.85S13.54,19.68,11.17,20.37Z" style="fill:#9964aa"/><path d="M25,33c3.74,0,11.38-2.13,13.79-2.83,0-.18,0-.38-.06-.58A72.85,72.85,0,0,1,25,30.85a72.88,72.88,0,0,1-13.73-1.31c0,.2,0,.4-.06.58C13.62,30.83,21.26,33,25,33Z" style="fill:#9964aa"/><path d="M25,28.39c3.64,0,11-.91,13.58-1.25,0-.19,0-.38,0-.59H11.43c0,.2,0,.39,0,.59C14,27.48,21.36,28.39,25,28.39Z" style="fill:#9964aa"/><path d="M18.69,16.2a25.79,25.79,0,0,1-7.05,1.39,1.14,1.14,0,0,0-.84.43,1.4,1.4,0,0,0-.29,1.11A41,41,0,0,1,11,25.43a40.9,40.9,0,0,1-.45,6.3,1.4,1.4,0,0,0,.28,1.1,1.15,1.15,0,0,0,.83.44,25.92,25.92,0,0,1,3.75.62A41.8,41.8,0,0,0,25,35V15A20.51,20.51,0,0,0,18.69,16.2Z" style="fill:#fee84d"/><path d="M11.66,18.09c5.75-.22,8.65-2.59,13.34-2.59v-1a20.9,20.9,0,0,0-6.45,1.22,25.38,25.38,0,0,1-6.93,1.37,1.65,1.65,0,0,0-1.2.61,1.9,1.9,0,0,0-.4,1.5,40.47,40.47,0,0,1,.44,6.21A40.42,40.42,0,0,1,10,31.65a1.9,1.9,0,0,0,.38,1.48,1.64,1.64,0,0,0,1.18.63,25.62,25.62,0,0,1,3.68.61A42.21,42.21,0,0,0,25,35.49v-1c-7,0-9.94-1.51-13.36-1.73a.8.8,0,0,1-.65-1,41.2,41.2,0,0,0,.46-6.38A41.25,41.25,0,0,0,11,19.06.8.8,0,0,1,11.66,18.09Z" style="fill:#ac78b4"/><path d="M11.42,23.93H25V22.09c-3.64,0-11,.91-13.6,1.25C11.41,23.53,11.42,23.73,11.42,23.93Z" style="fill:#aa76b3"/><path d="M11.17,20.37c0,.18,0,.37.06.57A72.85,72.85,0,0,1,25,19.63V17.52C21.24,17.52,13.54,19.68,11.17,20.37Z" style="fill:#aa76b3"/><path d="M11.21,30.12c2.41.7,10,2.83,13.79,2.83V30.85a72.89,72.89,0,0,1-13.73-1.31C11.25,29.75,11.23,29.94,11.21,30.12Z" style="fill:#aa76b3"/><path d="M11.42,27.14c2.62.34,9.95,1.25,13.58,1.25V26.55H11.43C11.43,26.76,11.42,26.95,11.42,27.14Z" style="fill:#aa76b3"/></svg>`},
                  {name: "Laboratory",
                  icon: `<svg id="5dfaa03d-44bc-4b53-817f-a629b72c7d01" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>home-lab</title><path d="M25,14.31c-13.42,0-24.3,3.5-24.3,7.81V16.9C.72,12.59,11.59,9.1,25,9.1s24.3,3.5,24.3,7.81v5.21C49.31,17.81,38.43,14.31,25,14.31Z" style="fill:#9964aa"/><path d="M25,24.44c-13.42,0-24.3-3.5-24.3-7.81v5.21c0,4.31,10.88,7.81,24.3,7.81s24.3-3.5,24.3-7.81V16.63C49.31,20.94,38.43,24.44,25,24.44Z" style="fill:#6b427a"/><path d="M41.18,19.38l-2.49.43a79.74,79.74,0,0,1-27.35,0l-2.49-.43a2.22,2.22,0,0,0-2.6,2.19v9.51H43.78V21.57A2.22,2.22,0,0,0,41.18,19.38Z" style="fill:#6b437b"/><path d="M41.18,20.37l-2.49.43a79.74,79.74,0,0,1-27.35,0l-2.49-.43a2.22,2.22,0,0,0-2.6,2.19v9.51H43.78V22.56A2.22,2.22,0,0,0,41.18,20.37Z" style="fill:#fdd140"/><path d="M39.61,25.77H10.41a4.17,4.17,0,0,0-4.16,4.16V34a7.13,7.13,0,0,0,7.12,7.12h3.69A7.13,7.13,0,0,0,24.18,34a.83.83,0,1,1,1.66,0A7.13,7.13,0,0,0,33,41.17h3.69A7.13,7.13,0,0,0,43.78,34V29.94A4.17,4.17,0,0,0,39.61,25.77Z" style="fill:#6b437b"/><path d="M39.61,27.08H10.41a2.86,2.86,0,0,0-2.86,2.86V34a5.82,5.82,0,0,0,5.81,5.81h3.69A5.82,5.82,0,0,0,22.88,34a2.14,2.14,0,1,1,4.27,0A5.83,5.83,0,0,0,33,39.86h3.69A5.82,5.82,0,0,0,42.47,34V29.94A2.86,2.86,0,0,0,39.61,27.08Z" style="fill:#fee499"/><path d="M33,39.86h3.69a5.82,5.82,0,0,0,5.78-5.22l-.2,0a95.06,95.06,0,0,1-14.66,1.54A5.81,5.81,0,0,0,33,39.86Z" style="fill:#ffd45c"/><path d="M22.45,36.22A95.06,95.06,0,0,1,7.79,34.68l-.2,0a5.82,5.82,0,0,0,5.78,5.22h3.69A5.82,5.82,0,0,0,22.45,36.22Z" style="fill:#ffd45c"/><path d="M27.85,15H22.17a.65.65,0,0,1-.65-.65V9a.65.65,0,0,1,.65-.65h5.68a.65.65,0,0,1,.65.65v5.37A.65.65,0,0,1,27.85,15Zm-5-1.31H27.2V9.65H22.83Z" style="fill:#fdd140"/><path d="M19.46,39.34V27.08h-2V39.84A5.76,5.76,0,0,0,19.46,39.34Z" style="fill:#fee9ad"/><path d="M16.37,39.86V27.08H11.62V39.59a5.79,5.79,0,0,0,1.75.27Z" style="fill:#fee9ad"/><path d="M35.91,39.86h.74A5.77,5.77,0,0,0,39.71,39V27.09h-3.8Z" style="fill:#fdd140"/><path d="M37.56,39.78A5.76,5.76,0,0,0,39,39.36h0a5.91,5.91,0,0,0,.69-.36V35.1q-1.89.3-3.8.52v4.25h.74a5.73,5.73,0,0,0,.75-.05Z" style="fill:#fdd140"/></svg>`},
                  {name: "Retention",
                  icon: `<svg id="4803977f-f807-4ed9-b971-e3baa5b2709a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>home-retention</title><polygon points="49.48 4.62 0.75 4.62 0.75 49 41.85 49 49.48 41.37 49.48 4.62" style="fill:#f8ecf5"/><polygon points="49.48 4.62 0.75 4.62 0.75 12.28 49.48 12.28 49.48 4.62 49.48 4.62" style="fill:#fdd140"/><circle cx="11.99" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="38.5" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="18.62" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="31.87" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="45.12" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="25.24" cy="16.97" r="1.1" style="fill:#6b447c"/><circle cx="5.37" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="11.99" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="38.5" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="18.62" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="31.87" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="45.12" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="25.24" cy="23.49" r="1.1" style="fill:#6b447c"/><circle cx="5.37" cy="30.33" r="1.1" style="fill:#6b447c"/><circle cx="11.99" cy="30.33" r="1.09" style="fill:#6b447c"/><circle cx="38.5" cy="30.33" r="1.09" style="fill:#6b447c"/><circle cx="18.62" cy="30.33" r="1.1" style="fill:#6b447c"/><circle cx="31.87" cy="30.33" r="1.09" style="fill:#6b447c"/><circle cx="45.12" cy="30.33" r="1.1" style="fill:#6b447c"/><circle cx="25.24" cy="30.33" r="1.09" style="fill:#6b447c"/><circle cx="5.37" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="11.99" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="38.5" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="18.62" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="31.87" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="45.12" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="25.24" cy="36.9" r="1.1" style="fill:#6b447c"/><circle cx="5.37" cy="43.42" r="1.1" style="fill:#6b447c"/><circle cx="11.99" cy="43.42" r="1.09" style="fill:#6b447c"/><circle cx="18.62" cy="43.42" r="1.1" style="fill:#6b447c"/><circle cx="25.24" cy="43.42" r="1.09" style="fill:#6b447c"/><circle cx="13.84" cy="8.58" r="1.1" style="fill:#f8f8f9"/><path d="M20.46,7.49H17.08a1.1,1.1,0,0,0,0,2.19h3.38a1.1,1.1,0,1,0,0-2.19Z" style="fill:#f8f8f9"/><path d="M29.37,7.49H27.52a1.1,1.1,0,0,0,0,2.19h1.86a1.1,1.1,0,1,0,0-2.19Z" style="fill:#f8f8f9"/><path d="M36.39,7.49H33a1.1,1.1,0,0,0,0,2.19h3.38a1.1,1.1,0,1,0,0-2.19Z" style="fill:#f8f8f9"/><circle cx="23.98" cy="8.58" r="1.1" style="fill:#f8f8f9"/><circle cx="5.65" cy="7.04" r="2.08" style="fill:#6b447c"/><path d="M4.55,3.47V6.85a1.1,1.1,0,0,0,2.19,0V3.47a1.1,1.1,0,1,0-2.19,0Z" style="fill:#cfd5d6"/><circle cx="44.58" cy="7.04" r="2.08" style="fill:#6b447c"/><path d="M43.48,3.47V6.85a1.1,1.1,0,0,0,2.19,0V3.47a1.1,1.1,0,1,0-2.19,0Z" style="fill:#cfd5d6"/><polygon points="41.85 41.37 49.48 41.37 41.85 49 34.7 49 41.85 41.37" style="fill:#784c89"/><polygon points="41.85 41.37 49.48 41.37 41.85 49 41.85 41.37" style="fill:#cf96c3"/></svg>`},
              ]}/>
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
