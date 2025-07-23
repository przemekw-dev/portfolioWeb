"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiClock,
} from "react-icons/fi";
import Image from "next/image";
import Photo from "@components/ui/Photo";
import Script from "next/script";
import emailjs from "@emailjs/browser";

const emjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="pt-20 px-6 bg-gradient-to-b from-surface/50 to-surface/80">
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        type="text/javascript"
        onLoad={() => {
          const result = emailjs.init({
            publicKey: emjsKey,
          });
          console.log("[ContactSection]EmailJS Loaded.");
        }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-accent-dark to-accent mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-subtitle/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-xl border border-border/20"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-text/80 flex items-center gap-2"
                >
                  <FiUser size={16} /> Your Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Please enter your name</p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-text/80 flex items-center gap-2"
                >
                  <FiMail size={16} /> Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-text/80 flex items-center gap-2"
                >
                  <FiMessageSquare size={16} /> Your Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    Please enter your message
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent-dark to-accent text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20 transition-all"
              >
                <FiSend /> Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-full  rounded-2xl overflow-hidden"
          >
            {/* Photo with professional overlay */}
            <div className="absolute inset-0 left-14">
              <Photo />
              {/* <Image
                src="/your-photo.jpg" // Replace with your photo path
                alt="Professional Portrait"
                fill
                className="object-cover"
                priority
              /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/90 to-surface/90" /> */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_90%,var(--color-surface)_100%)]" />
            </div>

            {/* Contact info overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/20">
                <h3 className="text-2xl font-bold text-text mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-accent/10">
                      <FiMail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-subtitle">Email</p>
                      <p className="font-medium text-text">
                        contact@yourdomain.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-accent/10">
                      <FiClock className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-subtitle">Availability</p>
                      <p className="font-medium text-text">
                        Monday - Friday, 9AM - 5PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
