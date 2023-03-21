import fs from 'node:fs'
import multer from 'multer';

class CreatePalestranteUseCase{
    async execute(artigo){
        console.log(artigo)
        fs.readFile(artigo,'utf-8',(err,data)=>{
            console.log(data)
        })
}
}

export{CreatePalestranteUseCase}