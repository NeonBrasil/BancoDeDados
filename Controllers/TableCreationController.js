import client from './../db.js'

class TableCreationController {
    constructor() {}

    createAlunoTable() {
        // CREATE TABLE Alunos (
        //     AlunoID SERIAL PRIMARY KEY,
        //     Nome VARCHAR(100),
        //     DataNascimento DATE,
        //     Email VARCHAR(100)
        // );
        const sql = "CREATE TABLE Alunos (AlunoID SERIAL PRIMARY KEY,Nome VARCHAR(100),DataNascimento DATE,Email VARCHAR(100));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Alunos")
            }
        })
    }

    createProfessorTable() {
        // CREATE TABLE Professores (
        //     ProfessorID SERIAL PRIMARY KEY,
        //     Nome VARCHAR(100),
        //     Email VARCHAR(100),
        //     ChefeDepartamento BOOLEAN
        // );

        const sql = "CREATE TABLE Professores (ProfessorID SERIAL PRIMARY KEY,Nome VARCHAR(100),Email VARCHAR(100),ChefeDepartamento BOOLEAN);"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Professores")
            }
        })
    }

    createDepartamentoTable() {
        // CREATE TABLE Departamentos (
        //     DepartamentoID SERIAL PRIMARY KEY,
        //     Nome VARCHAR(100),
        //     ChefeID INT,
        //     FOREIGN KEY (ChefeID) REFERENCES Professores(ProfessorID)
        // );

        const sql = "CREATE TABLE Departamentos (DepartamentoID SERIAL PRIMARY KEY,Nome VARCHAR(100),ChefeID INT,FOREIGN KEY (ChefeID) REFERENCES Professores(ProfessorID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Departamentos")
            }
        })
    }

    createCursoTable() {
        // CREATE TABLE Cursos (
        //     CursoID SERIAL PRIMARY KEY,
        //     Nome VARCHAR(100),
        //     DepartamentoID INT,
        //     FOREIGN KEY (DepartamentoID) REFERENCES Departamentos(DepartamentoID)
        // );

        const sql = "CREATE TABLE Cursos (CursoID SERIAL PRIMARY KEY,Nome VARCHAR(100),DepartamentoID INT,FOREIGN KEY (DepartamentoID) REFERENCES Departamentos(DepartamentoID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Cursos")
            }
        })
    }

    createDisciplinaTable() {
        // CREATE TABLE Disciplinas (
        //     DisciplinaID SERIAL PRIMARY KEY,
        //     Nome VARCHAR(100),
        //     CursoID INT,
        //     FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID)
        // );
        
        const sql = "CREATE TABLE Disciplinas (DisciplinaID SERIAL PRIMARY KEY,Nome VARCHAR(100),CursoID INT,FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Disciplinas")
            }
        })
    }

    createMatrizCurricularTable() {
        // CREATE TABLE MatrizCurricular (
        //     MatrizID SERIAL PRIMARY KEY,
        //     CursoID INT,
        //     DisciplinaID INT,
        //     SemestreRecomendado INT,
        //     CargaHoraria INT,
        //     FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID),
        //     FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID)
        // );
        
        const sql = "CREATE TABLE MatrizCurricular (MatrizID SERIAL PRIMARY KEY,CursoID INT,DisciplinaID INT,SemestreRecomendado INT,CargaHoraria INT,FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela MatrizCurricular")
            }
        })
    }

    createMatriculaTable() {
        // CREATE TABLE Matriculas (
        //     MatriculaID SERIAL PRIMARY KEY,
        //     AlunoID INT,
        //     DisciplinaID INT,
        //     Ano INT,
        //     Semestre VARCHAR(10),
        //     NotaFinal FLOAT,
        //     FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),
        //     FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID)
        // );

        const sql = "CREATE TABLE Matriculas (MatriculaID SERIAL PRIMARY KEY,AlunoID INT,DisciplinaID INT,Ano INT,Semestre VARCHAR(10),NotaFinal FLOAT,FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Matriculas")
            }
        })
    }

    createDisciplinaMinistradaTable() {
        // CREATE TABLE DisciplinasMinistradas (
        //     DisciplinaMinistradaID SERIAL PRIMARY KEY,
        //     ProfessorID INT,
        //     DisciplinaID INT,
        //     Ano INT,
        //     Semestre VARCHAR(10),
        //     FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID),
        //     FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID)
        // );

        const sql = "CREATE TABLE DisciplinasMinistradas (DisciplinaMinistradaID SERIAL PRIMARY KEY,ProfessorID INT,DisciplinaID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID),FOREIGN KEY (DisciplinaID) REFERENCES Disciplinas(DisciplinaID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela DisciplinasMinistradas")
            }
        })
    }

    createTCCTable() {
        // CREATE TABLE TCCs (
        //     TCCID SERIAL PRIMARY KEY,
        //     Titulo VARCHAR(255),
        //     AlunoID INT,
        //     ProfessorID INT,
        //     Ano INT,
        //     Semestre VARCHAR(10),
        //     FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),
        //     FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID)
        // );
        
        const sql = "CREATE TABLE TCCs (TCCID SERIAL PRIMARY KEY,Titulo VARCHAR(255),AlunoID INT,ProfessorID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),FOREIGN KEY (ProfessorID) REFERENCES Professores(ProfessorID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela TCCs")
            }
        })
    }
}

const tableCreationController = new TableCreationController();
export default tableCreationController;