import type { Project } from "@/constants";
import type { FC, MouseEvent } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  getStatusBadgeColor,
  getStatusColor,
  getStatusIcon,
} from "@/utils/getStatusBadgeColor";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  item: Project;
}

const ShowcaseCardModal: FC<ModalProps> = ({ isOpen, setIsOpen, item }) => {
  // Prevent modal from closing when clicking inside the content
  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        onClick={handleContentClick}
        className="bg-black border-gray-700 p-0 overflow-visible"
        style={{
          maxWidth: "90vw",
          maxHeight: "95vh",
          width: "auto",
          height: "auto",
        }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Section - Project Image and Actions */}
          <div className="md:w-[40%] w-full bg-black p-6 flex flex-col">
            {/* Project Image */}
            <div className="relative mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 md:h-64 object-fit rounded-lg shadow-lg"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mb-6">
              <a
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors cursor-pointer"
                aria-label="GitHub"
                onClick={() => window.open(" https://github.com/moamenzz")}
              >
                <FaGithub className="text-white text-xl" />
              </a>
              <a
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors cursor-pointer"
                aria-label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/moamen-muhammed-18a9b7223/"
                  )
                }
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors cursor-pointer"
                aria-label="Discord"
                onClick={() =>
                  window.open("https://discord.com/users/422389211535114240")
                }
              >
                <FaDiscord className="text-white text-xl" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-auto">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-950 hover:border hover:border-white hover:text-white duration-200 transition-colors"
              >
                <FaGithub />
                View on GitHub
              </a>
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-950 hover:border hover:border-white hover:text-white duration-200 transition-colors  "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>

          {/* Right Section - Project Details */}
          <div className="md:w-[60%] w-full bg-black p-6 md:p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Project Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {item.title}
                </h2>
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

              {/* Project Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.des}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <img
                        src={icon}
                        alt={`Tech ${index + 1}`}
                        className="w-8 h-8"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Loading Note */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-8">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-medium">Note:</span> Live Sites (Demos)
                  might take a few minutes to load, depending on whether
                  back-end server is spun down or not. Please be patient 😁 (Or
                  try refreshing)
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowcaseCardModal;
