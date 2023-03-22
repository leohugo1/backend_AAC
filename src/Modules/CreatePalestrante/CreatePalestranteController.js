import { CreatePalestranteUseCase } from "./CreateCadastroPalestranteUseCase.js";




class CreatePalestranteController {
    async handle(request, response) {
        const { nome, sobrenome, email, cpf, matricula, artigo } = request.body;
        const createCadastroPalestranteUseCase = new CreatePalestranteUseCase();
        const result = await createCadastroPalestranteUseCase.execute({ nome, sobrenome, email, cpf, matricula, artigo });
        return response.json(result);
    }
}

export { CreatePalestranteController };