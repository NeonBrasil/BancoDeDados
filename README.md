# BancoDeDados

---
TESTE
---
``` mermaid
erDiagram

    Alunos ||--o{ Matriculas : "está matriculado"
    Alunos ||--o{ TCCs : "participa"
    Professores ||--o{ Departamentos : "chefia"
    Professores ||--o{ DisciplinasMinistradas : "ministra"
    Professores ||--o{ TCCs : "orienta"
    Departamentos ||--|{ Cursos : "inclui"
    Cursos ||--|{ Disciplinas : "contém"
    Cursos ||--|{ MatrizCurricular : "define"
    Disciplinas ||--|{ MatrizCurricular : "parte de"
    Disciplinas ||--o{ Matriculas : "registrada em"
    Disciplinas ||--o{ DisciplinasMinistradas : "ensinada em"

    Alunos {
        int AlunoID PK
        string Nome
        date DataNascimento
        string Email
    }

    Professores {
        int ProfessorID PK
        string Nome
        string Email
        bool ChefeDepartamento
    }

    Departamentos {
        int DepartamentoID PK
        string Nome
        int ChefeID FK
    }

    Cursos {
        int CursoID PK
        string Nome
        int DepartamentoID FK
    }

    Disciplinas {
        int DisciplinaID PK
        string Nome
        int CursoID FK
    }

    MatrizCurricular {
        int MatrizID PK
        int CursoID FK
        int DisciplinaID FK
        int SemestreRecomendado
        int CargaHoraria
    }

    Matriculas {
        int MatriculaID PK
        int AlunoID FK
        int DisciplinaID FK
        int Ano
        string Semestre
        float NotaFinal
    }

    DisciplinasMinistradas {
        int DisciplinaMinistradaID PK
        int ProfessorID FK
        int DisciplinaID FK
        int Ano
        string Semestre
    }

    TCCs {
        int TCCID PK
        string Titulo
        int AlunoID FK
        int ProfessorID FK
        int Ano
        string Semestre
    }



```

EXEMPLO DE COMO DEVE SER:(JUNTAR DISCIPLINA COM DISCIPLINA MINISTRADA PARA SER O HIST DO PROFESSOR, E JUNTARÁ O TCC COM ALUNO)

![image](https://github.com/NeonBrasil/BancoDeDados/assets/81389290/6e27c0a0-f8b1-4277-8238-1d0c4cd32245)

