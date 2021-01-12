import React , { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Nav from "./Nav"
import { graphql, useStaticQuery } from "gatsby"
import { gsap, TweenMax, Expo} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

useEffect (() =>{

  TweenMax.to ( ".bg", 2, {
    width:"100%",
    ease: Expo.easeInOut
})

TweenMax.from ( ".desc",1.5, {
    delay : 1,
    opacity:0,
    y: 20,
    ease: Expo.easeInOut
})
TweenMax.from ( ".navbar",1.5, {
    delay : 2.5,
    opacity:0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from ( ".media ul li",1.5, {
    delay : 2.8,
    opacity:0,
    x: -30,
    ease: Expo.easeInOut
},0.08)


TweenMax.from ( ".text h1 .hidetext",1.5, {
    delay : 1.4,
    opacity:0,
    y: "200%",
    ease: Expo.easeInOut
})

TweenMax.from ( ".text p .hidetext",1.5, {
    delay : 2,
    opacity:0,
    y: "200%",
    ease: Expo.easeInOut
})

TweenMax.from ( ".scrolldown",1.5, {
    delay : 2,
    opacity:0,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.from ( ".bottomnav",1.5, {
    delay : 3.2,
    opacity:0,
    y:30,
    ease: Expo.easeInOut
})

TweenMax.from ( ".bottomnav .next",1.5, {
    delay : 3.5,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut
})
})



  return (

            <article  className="hero">
              
              <div className="bg"></div>
              <Nav />
              <div class="media">
                <ul>
                    <li><a href="https://www.linkedin.com/in/loubna-tani-63060773/">
                    Linkedin
                    </a></li>
                    <li><a href="https://www.instagram.com/loubna__ben/">
                    Instagram
                    </a></li>
                    <li><a href="https://github.com/loubna-Tani">
                    Github
                    </a></li>
                </ul>
              </div>
            
            <div className="img-wrapper02">
                <Image fluid={fluid} className="img02" />
                <div className="block"></div>
            </div>

            <div className="text">
                <h1><span className="hidetext">I'm Loubna</span></h1>
                <p><span className="hidetext">I'm a web Developer and Web Dsigner</span></p>
            </div>

            <div className="desc">
                  <p>I'm a Front-End Developer in HOUSTON,TX.
                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
            </div>

            <div className="scrolldown">
                Scroll Down
            </div>
            <div class="bottomnav">
                <div class="next">Projects</div>
                <div class="bottomnav-img">
                </div>
              </div>
          </article>

)
}

export default Hero





    // <header className="hero">
    //   <div className="section-center hero-center">
    //     <article className="hero-info">
    //       <div>
    //         <div className="underline"></div>
    //         <h1>I'm Loubna</h1>
    //         <h4>Front End Web Developer</h4>
    //         <Link to ="/contact" className="btn"> contact me
    //         </Link>
    //         <SocialLinks />
    //       </div>
    //     </article>
    //     <Image fluid={fluid} className="hero-img" />
    //   </div>
    // </header>
 

