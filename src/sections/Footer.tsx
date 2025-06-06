import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { socials } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>My Story</p>
        </div>
        <div className="socials">
          {socials.map((social, index) => (
            <div
              className="icon"
              key={index}
              onClick={() => window.open(social.link)}
            >
              {social.iconElement}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Moamen Muhammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
