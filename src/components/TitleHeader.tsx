import type { FC } from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface TitleHeaderProps {
  title?: string;
  sub?: string;
}

const TitleHeader: FC<TitleHeaderProps> = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {sub && (
        <div className="hero-badge">
          <p>{sub === "exclamation" ? <FaExclamationCircle /> : sub}</p>
        </div>
      )}
      {title && (
        <div>
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default TitleHeader;
