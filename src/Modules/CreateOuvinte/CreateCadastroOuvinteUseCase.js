
import {prisma} from '../../prisma/prismaClient.js'




class CreateOuvinteUseCase{
    async execute({nome,sobrenome,email,cpf,matricula}){
        const CpfExiste=await prisma.tabela_ouvinte.findFirst({
            where:{
                CPF:cpf
            }
        });

        if(CpfExiste){
            throw new Error('Ouvinte já cadastrado');
        }

        const ouvinte=await prisma.tabela_ouvinte.create({
            data:{
                Nome:nome,
                Sobrenome:sobrenome,
                Email:email,
                CPF:cpf,
                Matricula:matricula
            }
        });

        return ouvinte;
    }   
}

export{CreateOuvinteUseCase}