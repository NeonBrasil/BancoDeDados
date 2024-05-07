# BancoDeDados

---
TESTE
---
``` mermaid
erDiagram
    Alunos {
        ID_aluno INT
        nome VARCHAR
        matricula VARCHAR
    }
    Professores {
        ID_professor INT
        nome VARCHAR
    }
    Cursos {
        ID_curso INT
        nome VARCHAR
        código VARCHAR
    }
    Departamentos {
        ID_departamento INT
        nome VARCHAR
        ID_chefe INT
        ID_curso INT
    }
    Disciplinas {
        ID_disciplina INT
        nome VARCHAR
        codigo VARCHAR
    }
    Matrizes_Curriculares {
        ID_matriz INT
        ID_curso INT
        ID_disciplina INT
        semestre INT
        ano INT
    }
    Historico_Escolar {
        ID_aluno INT
        ID_disciplina INT
        semestre INT
        ano INT
        nota_final FLOAT
    }
    Disciplinas_Ministradas {
        ID_professor INT
        ID_disciplina INT
        semestre INT
        ano INT
    }
    TCC {
        ID_grupo INT
        ID_aluno INT
        ID_professor_orientador INT
    }

    Alunos ||--o{ Historico_Escolar : "Cursa"
    Historico_Escolar ||--|| Disciplinas : "Inclui"
    Professores ||--o{ Disciplinas_Ministradas : "Ministra"
    Professores ||--o{ TCC : "Orienta"
    Departamentos ||--o{ Professores : "Chefiado por"
    Departamentos ||--o{ Cursos : "Oferece"
    Cursos ||--|| Matrizes_Curriculares : "Possui"
    Matrizes_Curriculares ||--|| Disciplinas : "Contem"

```

EXEMPLO DE COMO DEVE SER:

![image](https://github.com/NeonBrasil/BancoDeDados/assets/81389290/6e27c0a0-f8b1-4277-8238-1d0c4cd32245)

