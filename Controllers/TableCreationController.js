import client from './../db.js'

class TableCreationController {
    constructor() {}

    createAllTables() {
        this.createAlunoTable()
        this.createProfessorTable()
        this.createDepartamentoTable()
        this.createCursoTable()
        this.createDisciplinaTable()
        this.createMatrizCurricularTable()
        this.createMatriculaTable()
        this.createDisciplinaMinistradaTable()
        this.createTCCTable()
        return;
    }

    createAlunoTable() {
        /*
        CREATE TABLE Alunos (
            Aluno_ID SERIAL PRIMARY KEY,
            Nome VARCHAR(100),
            Data_Nascimento DATE,
            Email VARCHAR(100)
        );
        */
        const sql = "CREATE TABLE Alunos (Aluno_ID SERIAL PRIMARY KEY,Nome VARCHAR(100),Data_Nascimento DATE,Email VARCHAR(100));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Alunos")
            }
        })
    }

    createProfessorTable() {
        /*
        CREATE TABLE Professores (
            Professor_ID SERIAL PRIMARY KEY,
            Nome VARCHAR(100),
            Email VARCHAR(100),
            Chefe_Departamento BOOLEAN
        );
        */

        const sql = "CREATE TABLE Professores (Professor_ID SERIAL PRIMARY KEY,Nome VARCHAR(100),Email VARCHAR(100),Chefe_Departamento BOOLEAN);"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Professores")
            }
        })
    }

    createDepartamentoTable() {
        /*
        CREATE TABLE Departamentos (
            Departamento_ID SERIAL PRIMARY KEY,
            Nome VARCHAR(100),
            Chefe_ID INT,
            FOREIGN KEY (Chefe_ID) REFERENCES Professores(Professor_ID)
        );
        */

        const sql = "CREATE TABLE Departamentos (Departamento_ID SERIAL PRIMARY KEY,Nome VARCHAR(100),Chefe_ID INT,FOREIGN KEY (Chefe_ID) REFERENCES Professores(Professor_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Departamentos")
            }
        })
    }

    createCursoTable() {
        /*
        CREATE TABLE Cursos (
            Curso_ID SERIAL PRIMARY KEY,
            Nome VARCHAR(100),
            Departamento_ID INT,
            FOREIGN KEY (Departamento_ID) REFERENCES Departamentos(Departamento_ID)
        );
        */

        const sql = "CREATE TABLE Cursos (Curso_ID SERIAL PRIMARY KEY,Nome VARCHAR(100),Departamento_ID INT,FOREIGN KEY (Departamento_ID) REFERENCES Departamentos(Departamento_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Cursos")
            }
        })
    }

    createDisciplinaTable() {
        /*
        CREATE TABLE Disciplinas (
            Disciplina_ID SERIAL PRIMARY KEY,
            Nome VARCHAR(100),
            Curso_ID INT,
            FOREIGN KEY (Curso_ID) REFERENCES Cursos(Curso_ID)
        );
        */
        
        const sql = "CREATE TABLE Disciplinas (Disciplina_ID SERIAL PRIMARY KEY,Nome VARCHAR(100),Curso_ID INT,FOREIGN KEY (Curso_ID) REFERENCES Cursos(Curso_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Disciplinas")
            }
        })
    }

    createMatrizCurricularTable() {
        /*
        CREATE TABLE MatrizCurricular (
            Matriz_ID SERIAL PRIMARY KEY,
            Curso_ID INT,
            Disciplina_ID INT,
            Semestre_Recomendado INT,
            Carga_Horaria INT,
            FOREIGN KEY (Curso_ID) REFERENCES Cursos(Curso_ID),
            FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID)
        );
        */
        
        const sql = "CREATE TABLE MatrizCurricular (Matriz_ID SERIAL PRIMARY KEY,Curso_ID INT,Disciplina_ID INT,Semestre_Recomendado INT,Carga_Horaria INT,FOREIGN KEY (Curso_ID) REFERENCES Cursos(Curso_ID),FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela MatrizCurricular")
            }
        })
    }

    createMatriculaTable() {
        /*
        CREATE TABLE Matriculas (
            Matricula_ID SERIAL PRIMARY KEY,
            Aluno_ID INT,
            Disciplina_ID INT,
            Ano INT,
            Semestre VARCHAR(10),
            Nota_Final FLOAT,
            FOREIGN KEY (Aluno_ID) REFERENCES Alunos(Aluno_ID),
            FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID)
        );
        */

        const sql = "CREATE TABLE Matriculas (Matricula_ID SERIAL PRIMARY KEY,Aluno_ID INT,Disciplina_ID INT,Ano INT,Semestre VARCHAR(10),Nota_Final FLOAT,FOREIGN KEY (Aluno_ID) REFERENCES Alunos(Aluno_ID),FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela Matriculas")
            }
        })
    }

    createDisciplinaMinistradaTable() {
        /*
        CREATE TABLE DisciplinasMinistradas (
            Disciplina_Ministrada_ID SERIAL PRIMARY KEY,
            Professor_ID INT,
            Disciplina_ID INT,
            Ano INT,
            Semestre VARCHAR(10),
            FOREIGN KEY (Professor_ID) REFERENCES Professores(Professor_ID),
            FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID)
        );
        */

        const sql = "CREATE TABLE DisciplinasMinistradas (Disciplina_Ministrada_ID SERIAL PRIMARY KEY,Professor_ID INT,Disciplina_ID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (Professor_ID) REFERENCES Professores(Professor_ID),FOREIGN KEY (Disciplina_ID) REFERENCES Disciplinas(Disciplina_ID));"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log("Criou tabela DisciplinasMinistradas")
            }
        })
    }

    createTCCTable() {
        /*
        CREATE TABLE TCCs (
            TCC_ID SERIAL PRIMARY KEY,
            Titulo VARCHAR(255),
            Aluno_ID INT,
            Professor_ID INT,
            Ano INT,
            Semestre VARCHAR(10),
            FOREIGN KEY (Aluno_ID) REFERENCES Alunos(Aluno_ID),
            FOREIGN KEY (Professor_ID) REFERENCES Professores(Professor_ID)
        );
        */
        
        const sql = "CREATE TABLE TCCs (TCC_ID SERIAL PRIMARY KEY,Titulo VARCHAR(255),Aluno_ID INT,Professor_ID INT,Ano INT,Semestre VARCHAR(10),FOREIGN KEY (Aluno_ID) REFERENCES Alunos(Aluno_ID),FOREIGN KEY (Professor_ID) REFERENCES Professores(Professor_ID));"
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