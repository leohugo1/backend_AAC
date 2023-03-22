import fs from 'node:fs'
import multer from 'multer';
import { prisma } from '../../prisma/prismaClient.js'

class CreatePalestranteUseCase {
    async execute({ nome, sobrenome, email, cpf, matricula, titulo }) {
        const cpfExiste = await prisma.tabela_palestrante.findFirst({
            where: {
                CPF: cpf
            }
        });

        if (cpfExiste) {
            throw new Error('Palestrante já cadastrado');
        }
        const palestrante = await prisma.tabela_palestrante.create({
            data: {
                Nome: nome,
                Sobrenome: sobrenome,
                Email: email,
                CPF: cpf,
                Matricula: matricula,
                TituloArtigo: titulo,
                Artigo: fs.readFileSync('./src/Artigos/' + titulo + '.pdf')


            }
        });
        return palestrante;
    }
}

export { CreatePalestranteUseCase }