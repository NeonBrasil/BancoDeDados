# BancoDeDados #

Diagrama Relacional
---
``` mermaid
erDiagram

    Aluno ||--o{ Matricula : "está matriculado"
    Aluno ||--o{ TCC : "participa"
    Professor ||--o{ Departamento : "chefia"
    Professor ||--o{ TCC : "orienta"
    Departamento ||--|{ Curso : "inclui"
    Curso ||--|{ Disciplina : "contém"
    Curso ||--|{ MatrizCurricular : "define"
    Disciplina ||--|{ MatrizCurricular : "parte de"
    Disciplina ||--o{ Matricula : "registrada em"

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

    TCC {
        string titulo
        int aluno_id FK
        int grupo_id
        int professor_id FK
    }



```
Código feito em Javascript para criação, inserção e consultas no banco de dados. 
---

<h2> Como funciona: </h2>
<p> As queries são definidas por funções criadas nos controladores e chamadas no arquivo main.js. <br> </p>
<p> Para executá-las, basta descomentar a função desejada no final do arquivo main.js e para rodar o código, basta inserir o comando "node main.js" no terminal. <br> </p>
<br>
<p> O banco já está configurado para conectar ao usuário pré-definido no arquivo "db.js", sendo assim, não é necessário configurar um novo usuário para realizar a conexão. <br> </p>

<h2> Queries: </h2>
<p> Todas as queries podem ser localizadas dentro da pasta "Queries" no arquivo do código. <br> </p>

