import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
// import ContactExperience from "@/components/models/contact_models/ContactExperience";
import { toast } from "react-toastify";
import Spline from "@splinetool/react-spline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".contact-model",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top center",
        },
      }
    );
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Email sent successfully!");

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex flex-col gap-6">
          <TitleHeader sub="💬 Have questions or ideas? Let’s talk! 🚀" />

          <h2 className="text-5xl font-bold text-center">
            Get In Touch - Let's {""}
            <span className="text-orange-700">Connect</span>
          </h2>
        </div>
        <div className="grid-12-cols mt-16">
          <div className="contact-form xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="contact-model xl:col-span-7 min-h-96">
            <div className="relative w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <Spline scene="https://prod.spline.design/czq8hV-3WdWsgjF9/scene.splinecode" />

              {/* Logo Hider */}
              <span className="absolute bottom-5 right-4 w-[9.1rem] h-[2.3rem] rounded-full bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
