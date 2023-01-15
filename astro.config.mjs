import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    NetlifyCMS({
      media_folder: "public/assets",
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "posts",
            label: "Posts",
            folder: "content/posts",
            identifier_field: "title",
            create: true,
            format: "json",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Date",
                name: "date",
                widget: "datetime",
              },
              {
                label: "Image",
                name: "image",
                widget: "image",
              },
              {
                label: "Description",
                name: "description",
                widget: "string",
              },
              {
                label: "Tags",
                name: "tags",
                widget: "list",
              },
              {
                label: "Body",
                name: "body",
                widget: "markdown",
              },
            ],
          },
          {
            name: "settings",
            label: "Settings",
            files: [
              {
                file: "content/settings/information.json",
                label: "Information",
                name: "information",
                fields: [
                  {
                    label: "Name",
                    name: "name",
                    widget: "string",
                  },
                  {
                    label: "Email",
                    name: "email",
                    widget: "string",
                  },
                  {
                    label: "Phone",
                    name: "phone",
                    widget: "string",
                  },
                  {
                    label: "LinkedIn",
                    name: "linkedin",
                    widget: "string",
                  },
                  {
                    label: "Github",
                    name: "github",
                    widget: "string",
                  },
                ],
              },
              {
                file: "content/settings/settings.json",
                label: "Settings",
                name: "settings",
                fields: [
                  {
                    label: "Title",
                    name: "title",
                    widget: "string",
                  },
                  {
                    label: "Description",
                    name: "description",
                    widget: "string",
                  },
                  {
                    label: "Keywords",
                    name: "keywords",
                    widget: "list",
                  },
                  {
                    label: "Menu",
                    name: "menu",
                    widget: "list",
                    fields: [
                      {
                        label: "Name",
                        name: "name",
                        widget: "string",
                      },
                      {
                        label: "Link",
                        name: "link",
                        widget: "string",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Pages",
            label: "Pages",
            files: [
              {
                file: "content/pages/index.json",
                label: "Home",
                name: "home",
                fields: [
                  {
                    label: "About",
                    name: "about",
                    widget: "markdown",
                  },
                  {
                    label: "Featured Projects",
                    name: "featuredProjects",
                    widget: "relation",
                    collection: "projects",
                    searchFields: ["name"],
                    valueField: "name",
                    displayFields: ["name"],
                    multiple: true,
                  },
                ],
              },
            ],
          },
          {
            name: "projects",
            label: "Projects",
            folder: "content/projects",
            identifier_field: "name",
            create: true,
            format: "json",
            fields: [
              {
                label: "Name",
                name: "name",
                widget: "string",
              },
              {
                label: "Description",
                name: "description",
                widget: "string",
              },
              {
                label: "Link",
                name: "link",
                widget: "string",
                required: false,
              },
              {
                label: "Github",
                name: "github",
                widget: "string",
                required: false,
              },
              {
                label: "Image",
                name: "image",
                widget: "image",
                allow_multiple: true,
              },
              {
                label: "Tags",
                name: "tags",
                widget: "list",
              },
            ],
          },
        ],
      },
    }),
  ],
});
