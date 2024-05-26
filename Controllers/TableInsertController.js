import client from './../db.js'
import generator from "../Model/DataGenerator.js";
import fileGenerator from "../Model/FileGenerator.js";

class TableInsertController {
    constructor() {}

    queries = ""

    insertDataToAllTables() {
        this.insertDataToAlunoTable()
        this.insertDataToProfessorTable()
        this.insertDataToDepartamentoTable()
        this.insertDataToCursoTable()
        this.insertDataToDisciplinaTable()
        // this.insertDataToMatrizCurricularTable()
        this.insertDataToMatriculaTable()
        this.insertDataToTCCTable()
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
        this.queries = this.queries + query + "\n"
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
        this.queries = this.queries + query + "\n"
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
        this.queries = this.queries + query + "\n"
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
        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela curso")
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
            var professorID = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            var ano = Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;
            var semestre = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

            query = query + "INSERT INTO disciplina (disciplina_id, nome, curso_id, professor_id, semestre, ano) VALUES (" + disciplinaId + ", '" + nome + "', " + cursoId + ", " + professorID + ", " + semestre + ", " + ano + "); \n";
        }

        console.log(query);
        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela disciplina")
        })
    }

    insertDataToMatrizCurricularTable(itensCount) {
        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var matrizID = i+1
            var cursoID = generator.getRandomName()
            var disciplinaID = generator.getRandomName()
            var semestreRecomentado = generator.getRandomName()
            var cargaHoraria = generator.getRandomName()

            query = query + "INSERT INTO matrizcurricular (matriz_id, curso_id, disciplina_id, semestre_recomendado, carga_horaria) VALUES (); \n"
        }
        
        console.log(query);
        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela matriz curricular")
        })
    }

    insertDataToMatriculaTable(itensCount) {
        /*
            matricula_id INT PRIMARY KEY,
            aluno_id INT,
            curso_id INT,
            ano INT,
            semestre INT,
            nota_final FLOAT,
            aprovado BOOLEAN
        */

        var query = ""

        for (let i = 0; i < itensCount; i++) {
            var departamentoID = i+1
            var ano = generator.getRandomName()
            var semestre = generator.getRandomName()
            var notaFinal = generator.getRandomName()
            query = query + "INSERT INTO matricula (matricula_id, aluno_id, curso_id, ano, semestre, nota_final, aprovado) VALUES (" + "); \n"
        }

        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela matricula")
        })
    }

    insertDataToTCCTable() {
        var query = ""

        for (let i = 0; i < 20; i++) {
            var titulo = generator.getRandomTccTitle()
            var alunoID = i+1
            var grupoID = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            var professorID = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            
            query = query + "INSERT INTO tcc (aluno_id, grupo_id) VALUES (" + alunoID + ", " + grupoID + "); \n"
        }

        console.log(query);
        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            this.updateTccTable()
            console.log("Dados inseridos na tabela tcc")
        })
    }

    updateTccTable() {
        var query = ""

        for (let i = 0; i < 20; i++) {
            var titulo = generator.getRandomTccTitle()
            var professorID = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            
            query = query + "UPDATE tcc SET titulo = '" + titulo + "', professor_id = " + professorID + " WHERE grupo_id = " + i + ";\n "
        }

        console.log(query);
        this.queries = this.queries + query + "\n"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados atualizados na tabela tcc")
            this.insertQueriesToFile()
        })
    }

    insertQueriesToFile() {
        fileGenerator.writeFileAsync(this.queries)
    }
}

const tableInsertController = new TableInsertController();
export default tableInsertController;