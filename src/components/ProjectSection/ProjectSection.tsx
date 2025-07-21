import { useScroll, useTransform, motion } from "framer-motion";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const ProjectSection = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const isEven = index % 2 === 0;
  const isVideo = !!project.content.video;

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div
        className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isEven ? "" : "lg:grid-flow-col-dense"
        }`}
      >
        {/* Media Column */}
        <motion.div
          className={`relative h-[60vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-2xl ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
          style={{ y, opacity }}
        >
          {isVideo ? (
            <video
              src={project.content.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={project.content.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>

        {/* Content Column */}
        <motion.div
          className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-sm font-medium text-accent-dark uppercase tracking-wider mb-4">
            {new Date().toLocaleDateString()}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
            {project.title}
          </h3>
          <p className="text-lg text-subtitle/80 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack?.map((stack: string, i: number) => (
              <span
                key={i}
                className="text-xs font-medium bg-accent/10 text-accent-dark px-3 py-1 rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>

          <Link
            href={project.href}
            className="inline-flex items-center text-accent-dark hover:text-accent transition-colors duration-200 group w-fit"
          >
            <span className="font-medium mr-2">Find Out More</span>
            <LucideArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className={`absolute top-1/4 ${
            isEven ? "left-1/4" : "right-1/4"
          } w-64 h-64 rounded-full bg-accent blur-[100px]`}
        ></div>
      </div>
    </section>
  );
};
