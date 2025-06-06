import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex flex-col gap-6">
          <Tooltip>
            <TooltipTrigger>
              <TitleHeader sub="exclamation" />
            </TooltipTrigger>
            <TooltipContent className="bg-white/10 backdrop-blur-sm border-none">
              <p>
                This Portfolio is still under development. I do not claim to
                have worked with these companies (yet 😉). This is just a
                showcase until further adjustments.
              </p>
            </TooltipContent>
          </Tooltip>

          <h2 className="text-5xl font-bold text-center">
            What People Say <span className="text-orange-700">About Me</span>
          </h2>
        </div>
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
