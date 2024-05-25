# BancoDeDados

---
Diagrama Relacional
---
``` mermaid
erDiagram

    Aluno ||--o{ Matricula : "está matriculado"
    Aluno ||--o{ TCC : "participa"
    Professor ||--o{ Departamento : "chefia"
    Professor ||--o{ DisciplinaMinistrada : "ministra"
    Professor ||--o{ TCC : "orienta"
    Departamento ||--|{ Curso : "inclui"
    Curso ||--|{ Disciplina : "contém"
    Curso ||--|{ MatrizCurricular : "define"
    Disciplina ||--|{ MatrizCurricular : "parte de"
    Disciplina ||--o{ Matricula : "registrada em"
    Disciplina ||--o{ DisciplinaMinistrada : "ensinada em"

    Aluno {
        int aluno_id PK
        string nome
        string email
    }

    Professor {
        int professor_id PK
        string nome
        string email
    }

    Departamento {
        int departamento_id PK
        string nome
        int chefe_id FK
    }

    Curso {
        int curso_id PK
        string nome
        int departamento_id FK
    }

    Disciplina {
        int disciplina_id PK
        string nome
        int curso_id FK
        int professor_id FK
        int semestre
        int ano
    }

    MatrizCurricular {
        int matriz_id PK
        int curso_id FK
        int disciplina_id FK
        int semestre_recomendado
        int carga_horaria
    }

    Matricula {
        int matricula_id PK
        int aluno_id FK
        int disciplina_id FK
        int ano
        string semestre
        float nota_final
    }

    DisciplinaMinistrada {
        int disciplina_ministrada_id PK
        int professor_id FK
        int disciplina_id FK
        int ano
        string semestre
    }

    TCC {
        string titulo
        int aluno_id FK
        int grupo_id
        int professor_id FK
    }



```
Código <br>
Feito em Javascript para criação, inserção e consultas no banco de dados.
---
Como funciona:
---
Queries de consulta:
---
