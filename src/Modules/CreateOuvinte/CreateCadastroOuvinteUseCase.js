
import {prisma} from '../../prisma/prismaClient.js'
import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()


class CreateOuvinteUseCase{
    async execute({nome,sobrenome,email,cpf,matricula}){
        const user = process.env.EMAIL_NODEMAILER;
        const pass = process.env.SENHA_NODEMAILER;

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: user,
              pass: pass,
            },
          });
        const CpfExiste=await prisma.tabela_ouvinte.findFirst({
            where:{
                CPF:cpf
            }
        });

        if(CpfExiste){
            return 400;
        }

        await prisma.tabela_ouvinte.create({
            data:{
                Nome:nome,
                Sobrenome:sobrenome,
                Email:email,
                CPF:cpf,
                Matricula:matricula
            }
        });
        transport.sendMail({
            from: user,
            to: email,
            subject: "I ENCONTRO ACADÊMICO DE TECNOLOGIA E COMPUTAÇÃO DA UERN",
            html: `
            <h4>Olá, ${nome.toUpperCase()} ${sobrenome.toUpperCase()}</h4>
            <p>Seu cadastro no <i>I ENCONTRO ACADÊMICO DE TECNOLOGIA E COMPUTAÇÃO DA UERN (EATEC UERN)</i> como ouvinte foi <strong style="color: green;">efetuado com sucesso</strong>!</p>
            <p>Att,<br><i>Organização do Evento</i>.</p>
            `,
          }).catch(err => console.log(err));
        return 200;
    }   
}

export{CreateOuvinteUseCase}