import fs from "fs";
type DataNames = "projects" | "information" | "home" | "settings";

export type Project = {
  name: string;
  description: string;
  link: string;
  github: string;
  image: string[] | string;
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
    : never;
};

const pathLookup: { [key in DataNames]: string } = {
  projects: "content/projects",
  information: "content/settings/information.json",
  home: "content/pages/index.json",
  settings: "content/settings/settings.json",
};

export const GetData = async <T extends DataNames>(name: T) => {
  if (name === "projects") {
    const files = fs.readdirSync(pathLookup[name]);
    const projects = files.map((file) => {
      const project = JSON.parse(fs.readFileSync(`${pathLookup[name]}/${file}`, "utf8"));
      return project;
    });
    return projects as DataTypeMap[T];
  }

  return (await import(`../../${pathLookup[name]}`)) as DataTypeMap[T];
};
