import { CreatePalestranteUseCase } from "./CreateCadastroPalestranteUseCase.js";




class CreatePalestranteController {
    async handle(request, response) {
        try {
            const { nome, sobrenome, email, cpf, matricula, titulo } = request.body;
            const createCadastroPalestranteUseCase = new CreatePalestranteUseCase();
            const result = await createCadastroPalestranteUseCase.execute({ nome, sobrenome, email, cpf, matricula, titulo });
            return response.sendStatus(result);
        } catch (error) {
            return response.sendStatus(500);
        }
        
    }
}

export { CreatePalestranteController };