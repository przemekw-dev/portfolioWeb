"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { otherServices } from "../../../lib/constants";
import { FaMicrochip, FaServer, FaCode, FaDatabase } from "react-icons/fa";
import { ServiceItem } from "../../../types/home";

interface ServiceCardProps {
  service: ServiceItem | string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  containerRef,
}) => {
  useEffect(() => {}, []);

  const iconMap: Record<string, React.ReactNode> = {
    Frontend: <FaCode className="text-accent" />,
    Backend: <FaServer className="text-accent" />,
    Database: <FaDatabase className="text-accent" />,
    DevOps: <FaMicrochip className="text-accent" />,
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="relative isolate overflow-hidden rounded-2xl border border-border/20 bg-surface/80 backdrop-blur-lg shadow-2xl"
      style={{ y, opacity }}
    >
      {/* <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-size-[60px_60px] opacity-5" /> */}

      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          {typeof service === "object" && iconMap[service.title] && (
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-3 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 shadow-sm"
            >
              {iconMap[service.title]}
            </motion.div>
          )}
          <h3 className="text-2xl font-bold text-text">
            {typeof service === "string" ? service : service.title}
            <motion.span
              className="block h-0.5 bg-linear-to-r from-accent to-accent-dark mt-1"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </h3>
        </div>

        {typeof service === "object" && (
          <ul className="space-y-3 flex-1">
            {service.services.map((serv: string, inx: number) => (
              <motion.li
                key={inx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: inx * 0.05 + 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 relative pl-6"
              >
                <motion.div
                  className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: inx * 0.1,
                  }}
                />
                <p className="text-subtitle/90 font-medium">{serv}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const OtherTechnologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-32 overflow-hidden"
    >
      {/* <TechVideoBackground /> */}

      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      </div> */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent-dark uppercase tracking-wider">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-accent-dark to-accent">
              Additional Services
            </span>
          </h2>
          <p className="text-lg text-subtitle max-w-2xl mx-auto">
            Integration with Twilio, OpenAi, Stripe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              containerRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OtherTechnologies;
