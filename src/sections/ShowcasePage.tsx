import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/swiper-bundle.css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TitleHeader from "@/components/TitleHeader";

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
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center mb-16">
            My Recent <span className="text-orange-700">Projects</span>
          </h2>

          <Tooltip>
            <TooltipTrigger>
              <TitleHeader sub="exclamation" />
            </TooltipTrigger>
            <TooltipContent className="bg-white/10 backdrop-blur-sm border-none">
              <p>
                Live Sites (Demos) might take a few minutes to load, depending
                on whether back-end server is spun down or not. Please be
                patient 😁 (Or try refreshing)
              </p>
            </TooltipContent>
          </Tooltip>
          <br />
        </div>

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
