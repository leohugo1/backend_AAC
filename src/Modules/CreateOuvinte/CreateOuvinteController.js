import { CreateOuvinteUseCase } from "./CreateCadastroOuvinteUseCase.js";

class CreateOuvinteController{
    async handle(request,response){
        const {nome,sobrenome,email,cpf,matricula}=request.body;
        const createOuvinteUseCase=new CreateOuvinteUseCase();
        const result=await createOuvinteUseCase.execute({nome,sobrenome,email,cpf,matricula});
        return response.json(result);
    }
}

export{CreateOuvinteController}