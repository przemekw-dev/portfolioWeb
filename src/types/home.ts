import { StaticImageData } from "next/image";

export type ProjectsType = {
  title: string;
  description: string;
  stack: string[];
  features?: FeaturesType[] | null;
  content: {
    image: StaticImageData | string;
    video: string;
  };
  href: string;
};

export type FeaturesType = {
  icon?: string | null;
  tech: string;
  description: string;
};

export type ServiceTech = {
  title: string;
  description: string;
  stack: string[];
};

export type ServiceCardProps = {
  service: ServiceTech;
  index: number;
};
