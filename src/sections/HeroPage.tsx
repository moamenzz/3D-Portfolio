import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounters";
import { SpotlightNew } from "@/components/ui/spotlight-new";

const HeroPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1.5, ease: "power2.inOut" }
    );
    gsap.fromTo(
      [".hero-paragraph, .hero-button, .hero-img"],
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      ".hero-3d-layout",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-img absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div>
        <SpotlightNew />
      </div>

      <div className="hero-layout">
        {/* LEFT: HeroPage Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Scalable Projects</h1>
              <h1>
                that Deliver <span className="text-orange-700">Results</span>
              </h1>
            </div>

            <p className="hero-paragraph text-white-50 md:text-xl relative z-10 pointer-events-none">
              I'm Moamen, Full-stack web developer from Egypt – young,
              passionate <br /> and future-oriented
            </p>

            <Button
              text="See My Work"
              className="hero-button md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default HeroPage;
