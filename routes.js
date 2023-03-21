import {Router} from 'express'
import { CreatePalestranteController } from './src/Modules/CreatePalestrante/CreatePalestranteController.js';
import multer from 'multer';
const router=Router();
const upload = multer({ dest: './src/Artigos' });
const createPalestranteController=new CreatePalestranteController();

router.post('/cadastroPalestrante',createPalestranteController.handle);


export{router};