import client from './../db.js'
import generator from "../Model/DataGenerator.js";

class TableInsertController {
    constructor() {}

    insertDataToAllTables() {
        this.insertDataToAlunoTable()
        this.insertDataToProfessorTable()
        this.insertDataToDepartamentoTable()
        this.insertDataToCursoTable()
        this.insertDataToDisciplinaTable()
        this.insertDataToMatrizCurricularTable()
        this.insertDataToMatriculaTable()
        this.insertDataToDisciplinaMinistradaTable()
        this.insertDataToTCCTable()
        return;
    }

    insertDataToAlunoTable() {
        var query = ""

        for (let i = 0; i < 20; i++) {
            var alunoID = i+1
            var nome = generator.getRandomName()
            var email = generator.getRandomEmail()
            query = query + "INSERT INTO alunos (aluno_id, nome, email) VALUES (); \n"
        }

        console.log(query);
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela aluno")
        })
    }

    insertDataToProfessorTable() {
        var query = ""

        for (let i = 0; i < 20; i++) {
            var professorID = i+1
            var nome = generator.getRandomName()
            var email = generator.getRandomEmail()
            query = query + "INSERT INTO alunos (professor_id, nome, email, chefe_departamento) VALUES (); \n"
        }
        
        console.log(query)
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela professor")
        })
    }

    insertDataToDepartamentoTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var nome = generator.getRandomName()
            query = query + "INSERT INTO alunos (departamento_id, nome, chefe_ID) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela departamento")
        })
    }

    insertDataToCursoTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var cursoID = i+1
            var nome = generator.getRandomName()
            query = query + "INSERT INTO alunos (curso_id, nome, departamento_id) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela curso")
        })
    }

    insertDataToDisciplinaTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var nome = generator.getRandomName()
            query = query + "INSERT INTO alunos (disciplina_id, nome, curso_ID) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela disciplina")
        })
    }

    insertDataToMatrizCurricularTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var semestreRecomendado = generator.getRandomName()
            var cargaHoraria = generator.getRandomName()
            query = query + "INSERT INTO alunos (matriz_id, curso_id, disciplina_id, semestre_recomendado, carga_horaria) VALUES (); \n"
        }
        
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela matriz curricular")
        })
    }

    insertDataToMatriculaTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var ano = generator.getRandomName()
            var semestre = generator.getRandomName()
            var notaFinal = generator.getRandomName()
            query = query + "INSERT INTO alunos (matricula_id, aluno_id, disciplina_id, ano, semestre, nota_final) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela matricula")
        })
    }

    insertDataToDisciplinaMinistradaTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var ano = generator.getRandomName()
            var semestre = generator.getRandomName()
            query = query + "INSERT INTO alunos (disciplina_ministrada_id, professor_id, disciplina_id, ano, semestre) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela disciplina ministrada")
        })
    }

    insertDataToTCCTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var titulo = generator.getRandomName()
            var ano = generator.getRandomName()
            var semestre = generator.getRandomName()
            query = query + "INSERT INTO alunos (TCC_id, titulo, aluno_id, professor_id, ano, semestre) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela tcc")
        })
    }
}

const tableInsertController = new TableInsertController();
export default tableInsertController;