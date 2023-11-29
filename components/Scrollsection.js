import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Image1 from "@/public/Assets/img1.jpg";
import Image2 from "@/public/Assets/img2.jpg";
import Image4 from "@/public/Assets/img3.jpg";

gsap.registerPlugin(ScrollTrigger);

const PortraitImage = ({ src, alt, animationRef }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
      },
    });

    // Your unique animation for each image
    imageAnimation.fromTo(
      imageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    return () => {
      imageAnimation.kill();
    };
  }, [animationRef]);

  return (
    <div ref={imageRef} className="portrait-image">
      <Image
        width={854}
        height={480}
        src={src}
        alt={alt}
        className="h-[40vh] w-full object-cover"
        loading="eager"
      />
    </div>
  );
};

function ScrollSection() {
  const sectionRefs = Array.from({ length: 4 }, () => useRef(null));
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRefs.map((ref) => ref.current),
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [sectionRefs]);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="scroll-section-inner h-[100vh] w-[500vw]">
          {sectionRefs.map((sectionRef, sectionIndex) => (
            <div
              key={sectionIndex}
              ref={sectionRef}
              className="h-[100vh] w-[100vw] flex justify-center items-center p-1"
            >
              <div className="images-container flex gap-2 items-center">
                <div className="flex flex-col gap-2">
                  {[...Array(3)].map((_, imageIndex) => (
                    <PortraitImage
                      key={imageIndex}
                      src={imageIndex % 2 === 0 ? Image1 : Image2}
                      alt={`Portrait ${imageIndex + 1}`}
                      animationRef={sectionRef}
                    />
                  ))}
                </div>
                <PortraitImage
                  src={Image4}
                  alt="Portrait 3"
                  animationRef={sectionRef}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
