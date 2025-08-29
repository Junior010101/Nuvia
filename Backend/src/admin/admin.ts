import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import uploadFeature from "@adminjs/upload";
import path from "path";
import fs from "fs";
import { Material } from "./models/Material";
import { sequelize } from "../config/sequelize";

// cria pasta de uploads se não existir
const uploadDir = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// registrar adapter do sequelize
AdminJS.registerAdapter(AdminJSSequelize);

// instancia do AdminJS
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: [
    {
      resource: Material,
      options: {
        properties: {
          filename: {
            isVisible: { list: true, edit: false, filter: false, show: true },
          },
        },
      },
      features: [
        uploadFeature({
          provider: {
            local: {
              bucket: uploadDir,
              opts: {}, // objeto vazio se necessário
            } as any, // força a tipagem se necessário
          },
          properties: {
            key: "filename", // campo no DB
            mimeType: "mimeType",
            size: "size",
          },
          validation: {
            mimeTypes: ["application/pdf"],
          },
          uploadPath: (record, filename) => `pdfs/${Date.now()}-${filename}`, // subpasta dentro de uploads
        }),
      ],
    },
  ],
});

// criar router do AdminJS
const adminRouter = AdminJSExpress.buildRouter(adminJs);
export { adminRouter };
