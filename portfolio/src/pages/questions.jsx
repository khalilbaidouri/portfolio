import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaArrowAltCircleRight } from "react-icons/fa";
import NavBar from "../components/NavBar";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nom requis.";
    if (!form.email.trim()) e.email = "Email requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide.";
    if (!form.subject.trim()) e.subject = "Sujet requis.";
    if (!form.message.trim()) e.message = "Message requis.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const fieldClass =
    "w-full bg-transparent border border-slate-300 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition duration-300 text-sm";

  const labelClass =
    "block text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-zinc-400 mb-1.5";

  return (
    <>
      <Helmet>
        <title>Contact — Khalil Baidouri</title>
        <meta
          name="description"
          content="Contactez Khalil Baidouri pour une collaboration, une mission freelance ou un simple échange. Réponse rapide garantie."
        />
        <meta
          name="keywords"
          content="contact, Khalil Baidouri, freelance, mission, collaboration, développeur"
        />
        <meta name="author" content="Khalil Baidouri" />
        <meta property="og:title" content="Contact — Khalil Baidouri" />
        <meta
          property="og:description"
          content="Une idée ou un projet ? Contactez Khalil Baidouri, développeur Full Stack disponible pour des missions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilbaidouri.dev/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Khalil Baidouri" />
        <meta
          name="twitter:description"
          content="Contactez Khalil Baidouri pour vos projets web et missions freelance."
        />
        <link rel="canonical" href="https://khalilbaidouri.dev/contact" />
      </Helmet>
      <NavBar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div
          id="contact-section"
          className="min-h-screen relative flex items-center pt-16 overflow-hidden"
        >
          {/* Light Mode Background */}
          <div
            className="absolute inset-0 -z-10 dark:hidden"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
                  radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
                  radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
                `,
              backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
            }}
          />

          {/* Dark Mode Background */}
          <div
            className="absolute inset-0 -z-10 hidden dark:block"
            style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(39,39,42,0.8) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(39,39,42,0.8) 1px, transparent 1px),
                  radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.15), transparent),
                  radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.15), transparent)
                `,
              backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — heading */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 break-words text-zinc-900 dark:text-white">
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Let's Work
                  </span>
                  <br />
                  <span className="text-cyan-700 dark:text-cyan-500">
                    Together
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Une idée, un projet, ou juste envie d'échanger ?<br />
                  Envoyez-moi un message, je vous réponds rapidement.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-500 dark:text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                    khalilbaidouri97@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
                    Disponible pour des missions
                  </div>
                </div>
              </motion.div>

              {/* Right — form card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-cyan-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-slate-500 dark:text-zinc-400 text-sm mb-6">
                        Merci {form.name}, je vous répondrai bientôt.
                      </p>
                      <button
                        onClick={() => {
                          setForm({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                          setSubmitted(false);
                        }}
                        className="flex gap-2 items-center mx-auto px-8 py-3 bg-black dark:bg-zinc-100 rounded-full text-slate-200 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition duration-300 font-medium text-sm"
                      >
                        Nouveau message <FaArrowAltCircleRight />
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Nom</label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            className={fieldClass}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className={labelClass}>Email</label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="vous@email.com"
                            className={fieldClass}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Sujet</label>
                        <input
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Objet de votre message"
                          className={fieldClass}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className={labelClass}>Message</label>
                        <textarea
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre demande…"
                          className={fieldClass + " resize-none"}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <button
                          type="submit"
                          className="flex gap-2 items-center justify-center px-10 py-4 bg-black dark:bg-zinc-100 rounded-full text-slate-200 dark:text-zinc-900 hover:text-white dark:hover:text-black hover:bg-zinc-800 dark:hover:bg-white cursor-pointer transition duration-300 font-medium text-sm"
                        >
                          Envoyer <FaArrowAltCircleRight />
                        </button>
                        <a href="mailto:khalilbaidouri97@gmail.com">
                          <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-slate-400 dark:border-zinc-700 rounded-full px-10 py-4 hover:border-slate-800 dark:hover:border-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 dark:text-zinc-400 transition duration-300 cursor-pointer text-sm w-full sm:w-auto"
                          >
                            Email direct <FaArrowAltCircleRight />
                          </button>
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
