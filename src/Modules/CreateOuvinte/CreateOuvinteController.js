import { CreateOuvinteUseCase } from "./CreateCadastroOuvinteUseCase.js";

class CreateOuvinteController{
    async handle(request,response){
        try {
            const {nome,sobrenome,email,cpf,matricula}=request.body;
            const createOuvinteUseCase=new CreateOuvinteUseCase();
            const result=await createOuvinteUseCase.execute({nome,sobrenome,email,cpf,matricula});
            return response.sendStatus(result);
        } catch (error) {
            return response.sendStatus(500);
        }
       
    }
}

export{CreateOuvinteController}