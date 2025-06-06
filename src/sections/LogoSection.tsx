import type { FC } from "react";
import { logoIconsList, type LogoIcon } from "../constants";
import TitleHeader from "@/components/TitleHeader";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LogoProps {
  icon: LogoIcon;
}

const LogoIcon: FC<LogoProps> = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon?.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="flex justify-center">
      <Tooltip>
        <TooltipTrigger>
          <TitleHeader sub="exclamation" />
        </TooltipTrigger>
        <TooltipContent className="bg-white/10 backdrop-blur-sm border-none">
          <p>
            This Portfolio is still under development. I do not claim to have
            worked with these companies (yet 😉). This is just a showcase until
            further adjustments.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
