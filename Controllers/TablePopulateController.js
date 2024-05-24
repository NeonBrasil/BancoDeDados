import client from './../db.js'
import generator from "../Model/DataGenerator.js";

class TablePopulateController {
    constructor() {}

    insertDataToAllTables(itensCount) {
        this.insertDataToAlunoTable(itensCount)
        this.insertDataToProfessorTable(itensCount)
        this.insertDataToDepartamentoTable(itensCount)
        this.insertDataToCursoTable(itensCount)
        this.insertDataToDisciplinaTable(itensCount)
        this.insertDataToMatrizCurricularTable(itensCount)
        this.insertDataToMatriculaTable(itensCount)
        this.insertDataToDisciplinaMinistradaTable(itensCount)
        this.insertDataToTCCTable(itensCount)
        return;
    }

    insertDataToAlunoTable(itensCount) {
        let alunoID = 0
        let nome = ""
        let email = ""

        var values = []
        for (let i = 0; i < itensCount; i++) {
        alunoID = i+1
        nome = generator.getRandomName()
        email = generator.getRandomEmail()
        if (i == itensCount-1) {
            let valueToAdd = "( " + alunoID + " ,'" + nome + "', '" + email + "' );"
            values.push(valueToAdd)
        } else {
            let valueToAdd = "( " + alunoID + " ,'" + nome + "', '" + email + "' )"
            values.push(valueToAdd)
        }
    }

        var sql = "INSERT INTO aluno (aluno_id, nome, email) VALUES " + values.toString();
        console.log(sql)
        client.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToProfessorTable(itensCount) {

        let professorID = 0
        let nome = ""
        let email = ""
        let chefeDepartamento = Boolean

        var values = []
        for (let i = 0; i < itensCount; i++) {
            professorID = i+1
            nome = generator.getRandomName()
            email = generator.getRandomEmail()
            chefeDepartamento = false

            if (i == itensCount-1) {
                let valueToAdd = "(" + professorID + ", '" + nome + "', '" + email + "', '" + chefeDepartamento + "');"
                values.push(valueToAdd)
            } else {
                let valueToAdd = "(" + professorID + ", '" + nome + "', '" + email + "', '" + chefeDepartamento + "')"
                values.push(valueToAdd)
            }
        }

        var sql = "INSERT INTO professor (professor_id, nome, email, chefe_departamento) VALUES " + values.toString()
        console.log(sql)
        client.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela professores")
        })
    }

    insertDataToDepartamentoTable(itensCount) {
        /*
        INSERT INTO Departamentos (Nome, Chefe_ID) VALUES ("Departamento de Geografia", 1);
        */
       const departamento = generator.getDepartamentos();

        let departamentoID = 0
        let nome = ""
        let chefeID = 0

        for (let i = 0; i < departamento.length; i++) {
            nome = departamento[i];
            departamentoID = i + 1;
            var sql = "INSERT INTO departamento (departamento_id, nome) VALUES ($1, $2)";
            client.query(sql, [departamentoID, nome], (err, result) => {
                if (err) throw err;
                console.log("Dados inseridos na tabela departamentos")
            })
        }
    }

    insertDataToCursoTable(itensCount) {
        /*
        INSERT INTO Cursos (Nome, Departamento_ID) VALUES ("Geo-politica", 1);
        */
       const cursos = generator.getCursos();

        let cursoId = 0
        let nome = ""
        let departamentoId = 0

        for (let i = 0; i < cursos.length; i++) {
            nome = cursos[i];
            cursoId = i + 1;
            var sql = "INSERT INTO curso (curso_id, nome) VALUES ($1, $2)";
            client.query(sql, [cursoId, nome], (err, result) => {
                if (err) throw err;
                console.log("Dados inseridos na tabela cursos")
            })
        }
    }

    insertDataToDisciplinaTable(itensCount) {
        /*
        INSERT INTO Disciplinas (Nome, Curso_ID) VALUES ("Ecologia", 1);
        */

        const disciplina = generator.getDisciplinas();

        let disciplinaId = 0
        let nome = ""
        let cursoId = 0

        for (let i = 0; i < disciplina.length; i++) {
            nome = disciplina[i];
            disciplinaId = i + 1;
            var sql = "INSERT INTO disciplina (disciplina_id, nome) VALUES ($1, $2)";
            client.query(sql, [disciplinaId, nome], (err, result) => {
                if (err) throw err;
                console.log("Dados inseridos na tabela cursos")
            })
        }
    }

    insertDataToMatrizCurricularTable(itensCount) {
        /*
        INSERT INTO MatrizCurricular (Curso_ID, Disciplina_ID, Semestre_Recomendado, Carga_Horaria) VALUES (1, 1, 2, 60);
        */

        const sql = "CREATE TABLE MatrizCurricular (MatrizID SERIAL PRIMARY KEY,CursoID INT,DisciplinaID INT,SemestreRecomendado INT,CargaHoraria INT,FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToMatrizCurricularTable(itensCount) {
        /*
        INSERT INTO MatrizCurricular (Curso_ID, Disciplina_ID, Semestre_Recomendado, Carga_Horaria) VALUES (1, 1, 2, 60);
        */

        const sql = "CREATE TABLE MatrizCurricular (MatrizID SERIAL PRIMARY KEY,CursoID INT,DisciplinaID INT,SemestreRecomendado INT,CargaHoraria INT,FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToMatriculaTable(itensCount) {
        /*
        INSERT INTO Matriculas (Aluno_ID, Disciplina_ID, Ano, Semestre, Nota_Final) VALUES (1, 1, 2024, "1º Semestre", 8.5);
        */

        const sql = "CREATE TABLE Matriculas (MatriculaID SERIAL PRIMARY KEY,AlunoID INT,DisciplinaID INT,Ano INT,Semestre VARCHAR(10),NotaFinal FLOAT,FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToDisciplinaMinistradaTable(itensCount) {
        /*
        INSERT INTO DisciplinasMinistradas (Professor_ID, Disciplina_ID, Ano, Semestre) VALUES (1, 1, 2024, "1º Semestre");
        */

        const sql = "CREATE TABLE DisciplinasMinistradas (DisciplinaMinistradaID SERIAL PRIMARY KEY,ProfessorID INT,DisciplinaID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToTCCTable(itensCount) {
        /*
        INSERT INTO TCCs (Titulo, Aluno_ID, Professor_ID, Ano, Semestre) VALUES ("Estudo sobre Ecossistemas Aquáticos", 1, 2, 2024, "2º Semestre");
        */

        const sql = "CREATE TABLE TCCs (TCCID SERIAL PRIMARY KEY,Titulo VARCHAR(255),AlunoID INT,ProfessorID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }
}

const tablePopulateController = new TablePopulateController();
export default tablePopulateController;