import { useState, type FC } from "react";
import { FaLocationArrow } from "react-icons/fa";
import type { Project } from "../constants";
import { PinContainer } from "./ui/3d-pin";
import ShowcaseCardModal from "./ShowcaseCardModal";
import {
  getStatusBadgeColor,
  getStatusColor,
  getStatusIcon,
} from "@/utils/getStatusBadgeColor";

interface ProjectCardProps {
  item: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = (open: boolean) => {
    if (!open) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div
        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] project-card cursor-pointer"
        key={item.id}
        onClick={handleCardClick}
      >
        <PinContainer title={item.title}>
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/images/showcase-card-png.png" alt="bgimg" />
            </div>
            <img
              src={item.img}
              alt="cover"
              className="z-10 absolute bottom-0 transform object-fit h-full w-full"
            />
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            {item.title}
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            {item.des}
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {item.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>

            <div className="flex flex-col ">
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>

              {/* Status */}
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadgeColor(
                  item.status
                )}`}
              >
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(
                    item.status
                  ).replace("text-", "bg-")}`}
                ></span>

                <div className="flex space-x-1">
                  <span>{getStatusIcon(item.status)}</span>
                  <span className={getStatusColor(item.status)}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PinContainer>
      </div>

      <ShowcaseCardModal
        isOpen={isModalOpen}
        setIsOpen={handleModalClose}
        item={item}
      />
    </>
  );
};

export default ProjectCard;
