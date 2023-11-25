// .tina/config.ts
import { defineStaticConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineStaticConfig({
  token: "f04e33e1e4a5840e7097e897103b9a5eb2807142",
  // generated on app.tina.io,
  clientId: "8458a132-a197-4036-ad56-c104fb06350b",
  // generated on app.tina.io
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "tina-astro-batutinha"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "P\xE1gina Inicial",
        path: "content/posts",
        /*ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => '/',
        },*/
        fields: [
          {
            label: "Menu",
            name: "menu",
            type: "object",
            fields: [
              {
                label: "Turminha",
                name: "sobre",
                type: "string"
              },
              {
                label: "Matricula",
                name: "matricula",
                type: "string"
              },
              {
                label: "Whatsapp",
                name: "whatsapp",
                type: "string"
              }
            ]
          },
          {
            label: "Redes Sociais",
            name: "contatos",
            type: "object",
            fields: [
              {
                label: "E-mail",
                name: "email",
                type: "string"
              },
              {
                label: "Facebook",
                name: "facebook",
                type: "string"
              },
              {
                label: "Instagram",
                name: "instagram",
                type: "string"
              }
            ]
          },
          {
            type: "image",
            label: "Logo",
            name: "imgLogo"
          },
          {
            type: "string",
            name: "msgboasvinda",
            label: "Mensagem de Boas Vindas",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            label: "Foto Principal",
            name: "bgHero"
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
