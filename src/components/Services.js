import React , { useEffect } from "react"
import Title from "./Title"
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import services from "../constants/services"

//gsap.registerPlugin(ScrollTrigger);

const Services = () => {

//  let myElement = [];
 
//  let l1 = null;

 

//   useEffect(() => {
//     gsap.from(myElement, {
//       duration: 1.5,
//       y: "200",
//       opacity: 0,
//       ease: "ease-out",
//       scrollTrigger: {
//         trigger: myElement,
//         toggleActions: "restart none none reset",
        
//       },
//     });
//     gsap.from(l1, {
//       duration: 1.5,
//       y: "200",
//       opacity: 0,
//       ease: "ease-out",
//       scrollTrigger: {
//         trigger: l1,
//         toggleActions: "restart none none reset",
        
//       },
// key={id} ref={(div) => (myElement[id] = div)}
//     });
//   });

  return ( 
  <section className="section bg-grey">
     <div>
     <Title title="services"/>
    </div>
    <div className="section-center services-center" >
    {services.map(service => {
      const { id, icon, title, text } = service

      return (
        <article  className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      )
    })}
  </div>
</section>)
}

export default Services
