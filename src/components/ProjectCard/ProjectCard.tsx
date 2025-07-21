import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  content: {
    image?: any;
    video?: string;
  };
  href: string;
};

export function ProjectCard({
  title,
  description,
  content,
  href,
}: ProjectCardProps) {
  const isVideo = !!content.video;

  return (
    <div className="flex h-full flex-col gap-4 border border-border/50 rounded-xl bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative overflow-hidden h-80">
        {isVideo ? (
          <video
            src={content.video}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Image
            src={content.image}
            alt={title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent-dark transition-colors duration-200">
          {title}
        </h3>
        <p className="text-subtitle/80 mb-4 line-clamp-2">{description}</p>

        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-accent-dark hover:text-accent transition-colors duration-200"
        >
          Find Out More
          <LucideArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
