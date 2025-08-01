import {useRef} from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Hero = ({data}) => {
  const videoRef = useRef()
  const isMobile = useMediaQuery({maxWidth:767})
  
  useGSAP(() => {
    const heroSplit= new SplitText('.title', { type:'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
  
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent:100,
      duration:1,
      ease:'expo.out', 
      stagger:0.06
    });

    gsap.from(paragraphSplit.lines, {
      opacity:0,
      yPercent:100,
      duration:1.8,
      ease:'expo.out',
      stagger:0.06,
      delay:1,
    });

    gsap.timeline({
      scrollTrigger:{
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      
      }
    })
    .to('.right-leaf', {y:200}, 0)
    .to('.left-leaf', {y:-200}, 0)

    const startValue =  isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top'
  
    const tl = gsap.timeline ({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    })
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      })
    }
  }, []);


  return (
    <>
      <section id='hero' className="noisy">
        <h1 className="title">{data.title}</h1>
        <img
          src={data.imageLeft}
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src={data.imageRight}
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>{data.paragraph}</p>
              <p className="subtitle">
                {data.headFirst}  <br /> {data.headSecond}
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                {data.subtitle}
              </p>
              <a href="#cocktails"> {data.link}</a>
            </div>
          </div>
        </div>

      </section>
      <div className="video absolute inset-0">
       <video
         ref={videoRef}
         src={data.video}
         muted
         playsInline
         preload="auto"
       />
     </div>
    </>
  );
}

export default Hero;