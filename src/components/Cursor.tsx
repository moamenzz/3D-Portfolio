import gsap from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX - 35 / 2.8,
        y: clientY - 35 / 2.8,
        ease: "back.out(1.7)",
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 h-[35px] w-[35px] bg-white rounded-full pointer-events-none mix-blend-difference z-[9999]"
    />
  );
};

export default Cursor;
