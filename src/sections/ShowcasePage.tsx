import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/swiper-bundle.css";

const ShowcasePage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".showcase",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          // The card is the trigger element
          trigger: ".showcase",
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      }
    );
  });
  return (
    <section id="work" className="app-showcase">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Recent <span className="text-orange-700">Projects</span>
        </h2>

        <div className="showcase">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1} // Match with slidesPerView
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 2,
              },
            }}
            className="project-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard item={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShowcasePage;
