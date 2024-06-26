CREATE TABLE IF NOT EXISTS Aluno (
    aluno_id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Professor (
    professor_id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Departamento (
    departamento_id INT PRIMARY KEY,
    nome VARCHAR(100),
    chefe_ID INT
);

CREATE TABLE IF NOT EXISTS Curso (
    curso_id INT PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT
);
 
CREATE TABLE IF NOT EXISTS Disciplina (
    disciplina_id INT PRIMARY KEY,
    nome VARCHAR(100),
    curso_ID INT,
    professor_id INT, 
    semestre INT,
    ano INT
);
       
CREATE TABLE IF NOT EXISTS MatrizCurricular (
    matriz_id INT PRIMARY KEY,
    curso_id INT,
    disciplina_id INT,
    semestre_recomendado INT,
    carga_horaria INT
);
       
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
 
CREATE TABLE IF NOT EXISTS TCC (
    titulo VARCHAR(255)
    aluno_id INT,
    grupo_id INT,
    professor_id INT
);
 
alter table departamento ADD CONSTRAINT fk_dpto_profs FOREIGN KEY (chefe_id) REFERENCES professor(professor_id);
alter table curso ADD CONSTRAINT fk_curso_dpto FOREIGN KEY (departamento_id) REFERENCES departamento(departamento_id);
alter table disciplina ADD CONSTRAINT fk_disc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
alter table disciplina ADD CONSTRAINT fk_disc_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);
alter table matrizcurricular ADD CONSTRAINT fk_matrizc_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
alter table matrizcurricular ADD CONSTRAINT fk_matrizc_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id);
alter table matricula ADD CONSTRAINT fk_matricula_aluno FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id);
alter table matricula ADD CONSTRAINT fk_matricula_curso FOREIGN KEY (curso_id) REFERENCES curso(curso_id);
alter table matricula ADD CONSTRAINT fk_matricula_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id);
alter table disciplinaministrada ADD CONSTRAINT fk_discmin_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);
alter table disciplinaministrada ADD CONSTRAINT fk_discmin_disc FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id);
alter table tcc ADD CONSTRAINT fk_tcc_aluno FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id);
alter table tcc ADD CONSTRAINT fk_tcc_profs FOREIGN KEY (professor_id) REFERENCES professor(professor_id);