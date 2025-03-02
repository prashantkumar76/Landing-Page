import { Element,  Link as LinkScroll } from "react-scroll"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative 
    pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pb-32 max-md:pt-36"> 
    <Element name="hero">
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">
            Video Editing

          </div>

          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Amazingly simple 
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 ">
            Video editing made easy with VideoScribe. Create professional videos in minutes, without any technical knowledge.

          
          </p>
          <LinkScroll to="features" smooth spy offset={-100}>
             <Button icon="/images/zap.svg">
                 Try it now
             </Button>
          </LinkScroll>

        </div>

         <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none  "> {/* calc-map property of css */}

         <img src="/images/hero.png"
              className="size-1230 max-lg:h-auto hero-img_res"
              alt="hero" 
              />

        </div>

      </div>

    </Element>


    </section>
  )
}

export default Hero