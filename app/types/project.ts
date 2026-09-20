import React from "react";
import { iconType } from ".";

export type TechnologyType = iconType;

export type ProjectCategory = "all" | "systems" | "ai" | "mobile" | "fullstack";

export type ProjectType = {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  category?: ProjectCategory;
  metricBadge?: string;
  technologies: TechnologyType[];
  description: string;
  imgUrl: string;
  videoUrl: string;
  githubUrl: string;
  websiteUrl: string;
};
