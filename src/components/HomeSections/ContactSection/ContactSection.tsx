"use client";
import { motion } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
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
import { sendEmail } from "lib/email";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Socials from "@components/ui/Socials";
import { useEmailConfirmationAlert } from "hooks/useEmailConfirmationAlert";
import { EmailConfirmationAlert } from "@components/EmailConfirmationModal";
import { useState } from "react";

const emjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

const ContactSection = () => {
  const {
    register,
    unregister,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { showAlert, alertEmail, showConfirmation, hideConfirmation } =
    useEmailConfirmationAlert();

  function handleResetInputs() {
    unregister(["name", "email", "message"]);
    unregister("name");
    unregister("email");
    unregister("message");
    reset();
  }

  async function submitContactMe(data: FieldValues) {
    console.log("Submit: ", data, ":", JSON.stringify(data));
    try {
      if (!data.name || !data.email || !data.message) {
        throw new Error("[submitContactMe] Missing data ");
      }
      const nm = data.name;
      const eml = data.email;
      const msg = data.message;

      await sendEmail(nm, eml, msg).then((res) => {
        console.log(`[SubmitContactMe] Result: ${JSON.stringify(res)}`);
        if (res) {
          const bool: string = String(res);
          showConfirmation(bool);
          handleResetInputs();
        }
      });
    } catch (e) {
      console.warn(`[ContactSection] Error submitting contact me. ${e}`);
    }
  }

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

      <EmailConfirmationAlert
        show={showAlert}
        onClose={hideConfirmation}
        email={alertEmail}
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
            Get in touch now
          </h2>
          <p className="text-lg text-subtitle/80 max-w-2xl mx-auto">
            Want to discuss opportunities or have a project in mind? I'd love to
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
            <form
              onSubmit={handleSubmit(async (data) => submitContactMe(data))}
              className="space-y-6"
            >
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
                  placeholder="Carl J"
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
                  placeholder="debtan@example.com"
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
                  placeholder="Would you be interested in working on my team.... 👉👈"
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
            <div className="relative  flex-col justify-center items-center  w-full flex-1">
              <span className="relative z-10">
                <Photo />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_90%,var(--color-surface)_100%)]" />
              </span>

              {/* Contact info overlay */}
              <div className="flex flex-col justify-center items-start mt-6">
                <div className="flex flex-row gap-6 items-center justify-between bg-surface/80  w-66 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="text-2xl font-bold text-text">Socials</h3>

                  {/* <div className="space-y-4 "> */}
                  <Socials
                    containerStyles="flex gap-4"
                    iconStyles="w-10 h-10 border border-accent/20 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm hover:shadow-accent/20"
                  />
                  {/* </div> */}
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
