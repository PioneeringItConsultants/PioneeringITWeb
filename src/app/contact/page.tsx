import { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "NexGen Lab | Contact Us",
  description:
    "Get in touch with NexGen Lab to hire our team or buy a product. We're ready to help you grow your business.",
};

const info = [
  {
    icon: FiMapPin,
    label: "Address",
    value: "Rupayon Shelford, Mirpur Road, Shaymoli, Dhaka-1207, Bangladesh",
  },
  { icon: FiMail, label: "Email", value: "nextsoftdev1@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+880 1XXX-XXXXXX" },
];

const socials = [FaFacebookF, FaLinkedinIn, FaInstagram];

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[400px] h-[400px] bg-violet-600 -top-20 left-0" />
        <div className="glow w-[340px] h-[340px] bg-fuchsia-600 top-10 right-0" />

        <div className="container relative z-10 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14 fade-up">
            <span className="eyebrow justify-center mb-5">Contact</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Let&apos;s build something{" "}
              <span className="gradient-text">amazing</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg mt-5">
              Have a project or want to buy a product? Drop us a message and
              we&apos;ll get back within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <form className="glass rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-[var(--color-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-brand)] transition"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-transparent border border-[var(--color-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-brand)] transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-[var(--color-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-brand)] transition"
              />
              <textarea
                rows={5}
                placeholder="Your Message *"
                className="w-full bg-transparent border border-[var(--color-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-brand)] transition resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <HiArrowRight />
              </button>
            </form>

            {/* Info */}
            <div className="space-y-4">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass card-lift rounded-2xl p-6 flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary grid place-items-center text-white text-lg shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.label}</h3>
                      <p className="text-sm text-[var(--color-muted)] mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
