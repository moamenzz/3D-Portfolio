import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      [".logo", ".desktop", ".contact-btn"],
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div
        className={`inner ${
          scrolled ? "bg-[#1D1C2291] px-2 py-4 rounded-xl" : "scrolled"
        } `}
      >
        <a href="#hero" className="logo">
          Moamen M.
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
