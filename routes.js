import { Router } from "express";
import fs from "node:fs";
import { CreatePalestranteController } from "./src/Modules/CreatePalestrante/CreatePalestranteController.js";
import multer from "multer";
import { CreateOuvinteController } from "./src/Modules/CreateOuvinte/CreateOuvinteController.js";
const router = Router();

const createPalestranteController = new CreatePalestranteController();
const createOuvinteController = new CreateOuvinteController();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/Artigos");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.titulo + ".pdf");
    },
});
const upload = multer({ storage });
router.post("/cadastroOuvinte", createOuvinteController.handle);
router.post("/submissaoArtigos", upload.single("documento"), createPalestranteController.handle);

export { router };
