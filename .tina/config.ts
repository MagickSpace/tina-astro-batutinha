import { defineStaticConfig } from "tinacms";
import collectionMenu from './collections/menu';
import collectionContatos from './collections/rede-sociais';
 

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  token: '54ef6c6b7f34e8fb531c70143b05df071c2147a7', // generated on app.tina.io,
  clientId: '8be2cd18-470d-4997-bc97-bd2b8f38ebbe', // generated on app.tina.io
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath:"tina-astro-batutinha",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Página Inicial",
        path: "content/posts",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
          router: () => '/',
        },
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
            name: "imgLogo",
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
              name: "bgHero",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
                 
        ],
      },
    ],
  },
});
