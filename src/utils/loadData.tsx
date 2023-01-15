import fs from "fs";
type DataNames = "projects" | "information" | "home" | "settings" | "posts";

export type Project = {
  name: string;
  description: string;
  link: string;
  github: string;
  image: string[] | string;
  tags: string[];
};

export type Post = {
  title: string;
  description: string;
  body: string;
  date: string;
  image: string;
  tags: string[];
};

export type Information = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type Home = {
  about: string;
  featuredProjects: string[];
};

export type Settings = {
  title: string;
  description: string;
  keywords: string[];
  menu: {
    name: string;
    link: string;
  }[];
};

type DataTypeMap = {
  [key in DataNames]: key extends "projects"
    ? Project[]
    : key extends "information"
    ? Information
    : key extends "home"
    ? Home
    : key extends "settings"
    ? Settings
    : key extends "posts"
    ? Post[]
    : never;
};

const pathLookup: { [key in DataNames]: string } = {
  projects: "content/projects",
  information: "content/settings/information.json",
  home: "content/pages/index.json",
  settings: "content/settings/settings.json",
  posts: "content/posts",
};

export const GetData = async <T extends DataNames>(name: T) => {
  if (name !== "information" && name !== "home" && name !== "settings") {
    const files = fs.readdirSync(pathLookup[name]);
    const projects = files.map((file) => {
      const project = JSON.parse(fs.readFileSync(`${pathLookup[name]}/${file}`, "utf8"));
      return project;
    });
    return projects as DataTypeMap[T];
  }

  return JSON.parse(fs.readFileSync(`${pathLookup[name]}`, "utf8")) as DataTypeMap[T];
};
