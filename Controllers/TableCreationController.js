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
        this.createTCCTable()
        this.setFKsKeys()
        return;
    }

    createAlunoTable() {
        /*
        CREATE TABLE IF NOT EXISTS Aluno (
            aluno_id INT PRIMARY KEY,
            nome VARCHAR(100),
            email VARCHAR(100)
        );
        */
        const sql = "CREATE TABLE IF NOT EXISTS Aluno (aluno_id INT PRIMARY KEY,nome VARCHAR(100),email VARCHAR(100));"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Aluno")
        })
    }

    createProfessorTable() {
        /*
        CREATE TABLE IF NOT EXISTS Professor (
            professor_id INT PRIMARY KEY,
            nome VARCHAR(100),
            email VARCHAR(100)
        );
        */

        const sql = "CREATE TABLE IF NOT EXISTS Professor (professor_id INT PRIMARY KEY,nome VARCHAR(100),email VARCHAR(100));"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Professor")
        })
    }

    createDepartamentoTable() {
        /*
        CREATE TABLE IF NOT EXISTS Departamento (
            departamento_id INT PRIMARY KEY,
            nome VARCHAR(100),
            chefe_ID INT
        );
        */

        const sql = "CREATE TABLE IF NOT EXISTS Departamento (departamento_id INT PRIMARY KEY,nome VARCHAR(100),chefe_ID INT);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Departamento")
        })
    }

    createCursoTable() {
        /*
        CREATE TABLE IF NOT EXISTS Curso (
            curso_id INT PRIMARY KEY,
            nome VARCHAR(100),
            departamento_id INT
        );
        */

        const sql = "CREATE TABLE IF NOT EXISTS Curso (curso_id INT PRIMARY KEY,nome VARCHAR(100),departamento_id INT);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Curso")
        })
    }

    createDisciplinaTable() {
        /*
        CREATE TABLE IF NOT EXISTS Disciplina (
            disciplina_id INT PRIMARY KEY,
            nome VARCHAR(100),
            curso_ID INT,
            professor_id INT, 
            semestre INT,
            ano INT
        );
        */
        
        const sql = "CREATE TABLE IF NOT EXISTS Disciplina (disciplina_id INT PRIMARY KEY,nome VARCHAR(100),curso_ID INT, professor_id INT, semestre INT, ano INT);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Disciplina")
        })
    }

    createMatrizCurricularTable() {
        /*
        CREATE TABLE IF NOT EXISTS MatrizCurricular (
            matriz_id INT PRIMARY KEY,
            curso_id INT,
            disciplina_id INT,
            semestre_recomendado INT,
            carga_horaria INT
        );
        */
        
        const sql = "CREATE TABLE IF NOT EXISTS MatrizCurricular (matriz_id INT PRIMARY KEY,curso_id INT,disciplina_id INT,semestre_recomendado INT,carga_horaria INT);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Matriz Curricular")
        })
    }

    createMatriculaTable() {
        /*
        CREATE TABLE IF NOT EXISTS Matricula (
            matricula_id INT PRIMARY KEY,
            aluno_id INT,
            curso_id INT,
            disciplina_id INT
            ano INT,
            semestre INT,
            nota_final FLOAT,
            aprovado BOOLEAN
        ); 
        */

        const sql = "CREATE TABLE IF NOT EXISTS Matricula (matricula_id INT PRIMARY KEY,aluno_id INT,curso_id INT, disciplina_id INT, ano INT,semestre INT,nota_final FLOAT,aprovado BOOLEAN);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela Matricula")
        })
    }

    createTCCTable() {
        /*
        CREATE TABLE IF NOT EXISTS TCC (
            titulo VARCHAR(255),
            aluno_id INT,
            grupo_id INT,
            professor_id INT
        );
        */
        
        const sql = "CREATE TABLE IF NOT EXISTS TCC (titulo VARCHAR(255),aluno_id INT,grupo_id INT,professor_id INT);"
        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Criou tabela TCC")
        })
    }

    setFKsKeys() {
        /*
        alter table departamento ADD CONSTRAINT fk_dpto_profs FOREIGN KEY (chefe_id) REFERENCES professor(professor_id);
        alter table curso ADD CONSTRAINT fk_curso_dpto FOREIGN KEY (departamento_id) REFERENCES departamento(departamento_id);
        alter table disciplina ADD CONSTRAINT fk_disc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
        alter table disciplina ADD CONSTRAINT fk_disc_profs FOREIGN KEY (professor_id) REFERENCES curso(professor_id);

        alter table matrizcurricular ADD CONSTRAINT fk_matrizc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
        alter table matrizcurricular ADD CONSTRAINT fk_matrizc_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id);

        alter table matricula ADD CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id);
        alter table matricula ADD CONSTRAINT fk_matricula_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
        alter table matricula ADD CONSTRAINT fk_matricula_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id);

        alter table tcc ADD CONSTRAINT fk_tcc_aluno FOREIGN KEY (alunos_id) REFERENCES aluno(aluno_id);
        alter table tcc ADD CONSTRAINT fk_tcc_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);
        */

        var sql = "alter table departamento ADD CONSTRAINT fk_dpto_profs FOREIGN KEY (chefe_id) REFERENCES professor(professor_id); \n"
        sql = sql + "alter table curso ADD CONSTRAINT fk_curso_dpto FOREIGN KEY (departamento_id) REFERENCES departamento(departamento_id); \n"
        sql = sql + "alter table disciplina ADD CONSTRAINT fk_disc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id); \n"
        sql = sql + "alter table disciplina ADD CONSTRAINT fk_disc_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);"
        sql = sql + "alter table matrizcurricular ADD CONSTRAINT fk_matrizc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id); \n"
        sql = sql + "alter table matrizcurricular ADD CONSTRAINT fk_matrizc_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id); \n"
        sql = sql + "alter table matricula ADD CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id); \n"
        sql = sql + "alter table matricula ADD CONSTRAINT fk_matricula_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id); \n"
        sql = sql + "alter table matricula ADD CONSTRAINT fk_matricula_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id); \n"
        sql = sql + "alter table tcc ADD CONSTRAINT fk_tcc_aluno FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id); \n"
        sql = sql + "alter table tcc ADD CONSTRAINT fk_tcc_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);"

        client .query(sql, (err, result) => {
            if (err) throw err;
            console.log("Atualizou as tabelas com os FKs")
        })
    }
}

const tableCreationController = new TableCreationController();
export default tableCreationController;