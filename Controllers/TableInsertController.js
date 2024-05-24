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
        // this.insertDataToMatrizCurricularTable()
        // this.insertDataToMatriculaTable()
        // this.insertDataToDisciplinaMinistradaTable()
        // this.insertDataToTCCTable()
        // this.insertUpdatesToTables()
        return;
    }


    insertDataToAlunoTable() {
        var query = ""

        for (let i = 0; i < 20; i++) {
            var alunoID = i+1
            var nome = generator.getRandomName()
            var email = generator.getRandomEmail()
            query = query + "INSERT INTO aluno (aluno_id, nome, email) VALUES (" + alunoID + ", '" + nome + "', '" + email + "'); \n"
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
            query = query + "INSERT INTO professor (professor_id, nome, email) VALUES (" + professorID + ", '" + nome + "', '" + email + "'); \n"
        }
        
        console.log(query)
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela professor")
        })
    }

    insertDataToDepartamentoTable() {
        var query = ""
        const departamento = generator.getDepartamentos();

        for (let i = 0; i < departamento.length; i++) {
            var departamentoID = i+1
            var chefeID = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            var nome = departamento[i];
            query = query + "INSERT INTO departamento (departamento_id, nome, chefe_id) VALUES (" + departamentoID + ", '" + nome + "', " + chefeID + "); \n";
        }

        console.log(query);
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela departamento")
        })
    }

    insertDataToCursoTable() {
        var query = ""
        const cursos = generator.getCursos();
        const departamento = generator.getDepartamentos();

        for (let i = 0; i < cursos.length; i++) {
            var nome = cursos[i];
            var cursoId = i + 1;
            var departamentoId = Math.floor(Math.random() * (departamento.length - 1 + 1)) + 1;
            query = query + "INSERT INTO curso (curso_id, nome, departamento_id) VALUES (" + cursoId + ", '" + nome + "', " + departamentoId + "); \n";
        }

        console.log(query);
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela cursos")
        })
    }

    insertDataToDisciplinaTable() {
        var query = ""
        const cursos = generator.getCursos();
        const disciplina = generator.getDisciplinas();

        for (let i = 0; i < disciplina.length; i++) {
            var nome = disciplina[i];
            var disciplinaId = i + 1;
            var cursoId = Math.floor(Math.random() * (cursos.length - 1 + 1)) + 1;
            query = query + "INSERT INTO disciplina (disciplina_id, nome, curso_id) VALUES (" + disciplinaId + ", '" + nome + "', " + cursoId + "); \n";
        }

        console.log(query);
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
            query = query + "INSERT INTO matrizcurricular (matriz_id, curso_id, disciplina_id, semestre_recomendado, carga_horaria) VALUES (); \n"
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
            query = query + "INSERT INTO matricula (matricula_id, aluno_id, disciplina_id, ano, semestre, nota_final) VALUES (); \n"
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
            query = query + "INSERT INTO disciplinaministrada (disciplina_ministrada_id, professor_id, disciplina_id, ano, semestre) VALUES (); \n"
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
            query = query + "INSERT INTO tcc (TCC_id, titulo, aluno_id, professor_id, ano, semestre) VALUES (); \n"
        }

        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela tcc")
        })
    }

    insertUpdatesToTables() {

    }
}

const tableInsertController = new TableInsertController();
export default tableInsertController;