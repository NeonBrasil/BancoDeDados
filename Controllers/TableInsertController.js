import client from './../db.js'
import generator from "../Model/DataGenerator.js";

class TableInsertController {
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
        let date = ""
        let email = ""

        var values = []
        for (let i = 0; i < itensCount; i++) {
            alunoID = i+1
            nome = generator.getRandomName()
            date = generator.getRandomDate()
            email = generator.getRandomEmail()

            if (i == itensCount-1) {   
                let valueToAdd = "(" + alunoID + ", '" + nome + "', " + date + ", '" + email + "');"
                values.push(valueToAdd)
            } else {
                let valueToAdd = "(" + alunoID + ", '" + nome + "', " + date + ", '" + email + "')"
                values.push(valueToAdd)
            }
        }

        var query = "INSERT INTO alunos (aluno_id, nome, data_nascimento, email) VALUES " + values.toString()
        console.log(query)
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToProfessorTable(itensCount) {
        /*
        INSERT INTO Professores (Nome, Email) VALUES ("Pedroca", "pedroca@gmail.com", true);
        */

        let professorID = 0
        let nome = ""
        let email = ""

        var values = []
        for (let i = 0; i < itensCount; i++) {
            professorID = i+1
            nome = generator.getRandomName()
            email = generator.getRandomEmail()

            if (i == itensCount-1) {   
                let valueToAdd = "(" + professorID + ", '" + nome + "', '" + email + "');"
                values.push(valueToAdd)
            } else {
                let valueToAdd = "(" + professorID + ", '" + nome + "', '" + email + "')"
                values.push(valueToAdd)
            }
        }
        
        var query = "INSERT INTO professores (professor_id, nome, email) VALUES " + values.toString()
        console.log(query)
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela professores")
        })
    }

    insertDataToDepartamentoTable(itensCount) {
        /*
        INSERT INTO Departamentos (Nome, Chefe_ID) VALUES ("Departamento de Geografia", 1);
        */

        let departamentoID = 0
        let nome = ""
        let chefeID = ""

        var values = []
        for (let i = 0; i < itensCount; i++) {
            departamentoID = i+1
            nome = generator.getRandomName()
            chefeID = 0

            if (i == itensCount-1) {   
                let valueToAdd = "(" + departamentoID + ", '" + nome + "', " + chefeID + ");"
                values.push(valueToAdd)
            } else {
                let valueToAdd = "(" + departamentoID + ", '" + nome + "', " + chefeID + ")"
                values.push(valueToAdd)
            }
        }

        var query = "INSERT INTO departamentos (departamento_id, nome, chefe_id) VALUES " + values.toString()
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela departamentos")
        })
    }

    insertDataToCursoTable(itensCount) {
        /*
        INSERT INTO Cursos (Nome, Departamento_ID) VALUES ("Geo-politica", 1);
        */

        const sql = "CREATE TABLE Cursos (CursoID SERIAL PRIMARY KEY,Nome VARCHAR(100),DepartamentoID INT,FOREIGN KEY (DepartamentoID) REFERENCES Departamentos(DepartamentoID));"
        client.query(query, (err, result) => {
            if (err) throw err;
            console.log("Dados inseridos na tabela alunos")
        })
    }

    insertDataToDisciplinaTable(itensCount) {
        /*
        INSERT INTO Disciplinas (Nome, Curso_ID) VALUES ("Ecologia", 1);
        */
        
        const sql = "CREATE TABLE Disciplinas (DisciplinaID SERIAL PRIMARY KEY,Nome VARCHAR(100),CursoID INT,FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID));"
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

const tableInsertController = new TableInsertController();
export default tableInsertController;