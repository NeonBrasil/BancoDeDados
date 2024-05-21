import tableDeleteController from "./Controllers/TableDeleteController.js";
import tableInsertController from "./Controllers/TableInsertController.js";
import tableCreationController from "./Controllers/TableCreationController.js";

class main {
    
    limparBanco() {
        tableDeleteController.dropAllTables()
    }

    adicionarTabelas() {
        tableCreationController.createAllTables()
    }

    popularTabelas(itensCount) {
        tableInsertController.insertDataToProfessorTable(itensCount);
    }

    buscarHistoricoEscolar() {
        //Histórico escolar de qualquer aluno, retornando o código e nome da disciplina, semestre e ano que a disciplina foi cursada e nota final
    }

    buscarHistóricoDeDisciplinas() {
        //Histórico de disciplinas ministradas por qualquer professor, com semestre e ano
    }

    listarFormandos() {
        //Listar alunos que já se formaram (foram aprovados em todos os cursos de uma matriz curricular) em um determinado semestre de um ano
    }

    listarChefesDeDepartamento() {
        //Listar todos os professores que são chefes de departamento, junto com o nome do departamento
    }

    buscarGrupoTCC() {
        //Saber quais alunos formaram um grupo de TCC e qual professor foi o orientador
    }
}

const MAIN = new main
MAIN.adicionarTabelas()

