import client from './db.js'
import tableDeleteController from "./Controllers/TableDeleteController.js";
import tableInsertController from "./Controllers/TableInsertController.js";
import tableCreationController from "./Controllers/TableCreationController.js";
import tableSearchController from "./Controllers/TableSearchController.js";

class main {
    
    limparBanco() {
        tableDeleteController.dropAllTables()
    }

    adicionarTabelas() {
        tableCreationController.createAllTables()
    }

    popularTabelas() {
        tableInsertController.insertDataToAllTables();
    }

    buscarHistoricoEscolar(alunoID) {
        tableSearchController.buscarHistoricoEscolar(alunoID)
    }

    buscarHistóricoDeDisciplinas(professorID) {
        tableSearchController.buscarHistóricoDeDisciplinas(professorID)
    }

    listarFormandos(semestre, ano) {
        tableSearchController.listarFormandos(semestre, ano)
    }

    listarChefesDeDepartamento() {
        tableSearchController.listarChefesDeDepartamento()
    }

    buscarGrupoTCC(grupoID) {
        tableSearchController.buscarGrupoTCC(grupoID)
    }
}

const MAIN = new main
//Remova as funções desejadas dos comentários para utiliza-las
//Por favor use uma função de cada vez

//Função usada para remover todas as tabelas do banco de dados
// MAIN.limparBanco()

//Função para criar todas as tabelas 
// MAIN.adicionarTabelas()

//Função para popular todas as tabelas
// MAIN.popularTabelas()

//Função para lista o histórico escolar de qualquer aluno, retornando o código e nome da disciplina, semestre e ano que a disciplina foi cursada e nota final
//No parametro da função passe um valor de 1-20 para escolher o id do aluno que deseja realizar a busca
// MAIN.buscarHistoricoEscolar(3)

//Função para listar o histórico de disciplinas ministradas por qualquer professor, com semestre e ano
//No parametro da função passe um valor de 1-20 para escolher o id do professor que deseja realizar a busca
// MAIN.buscarHistóricoDeDisciplinas(2);

//Função para listar alunos que já se formaram (foram aprovados em todos os cursos de uma matriz curricular) em um determinado semestre de um ano
//No parametro da função passe um valor de 1-2 para escolher o semestre e um valor de 2000-2024 para escolher o ano que deseja realizar a busca
// MAIN.listarFormandos(1, 2023);

//Funçao para listar todos os professores que são chefes de departamento, junto com o nome do departamento
// MAIN.listarChefesDeDepartamento();

//Função para saber quais alunos formaram um grupo de TCC e qual professor foi o orientador
//No parametro da função passe um valor de 1-20 para escolher o id do grupo que deseja realizar a busca
// MAIN.buscarGrupoTCC(3);