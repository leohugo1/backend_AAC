import { CreatePalestranteUseCase } from "./CreateCadastroPalestranteUseCase.js";




class CreatePalestranteController{
    async handle(request,response){
        const artigo=request.body;
        const createCadastroPalestranteUseCase=new CreatePalestranteUseCase();
        const result=await createCadastroPalestranteUseCase.execute(artigo);
        return response.json(result);
    }
}

export{CreatePalestranteController};