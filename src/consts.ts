import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mohamed Aziz Ktata",
  EMAIL: "aziiizktata7@gmail.com",
  LINKEDIN: "mohamed-aziz-ktata-45a3aa210",
  GITHUB: "medazizktata",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_EDU_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Overview about me",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: `https://github.com/${SITE.GITHUB}`
  },
  { 
    NAME: "linkedin",
    HREF: `https://www.linkedin.com/in/${SITE.LINKEDIN}`,
  },
  { 
    NAME: "email",
    HREF: SITE.EMAIL
  }
];
