# BancoDeDados

---
TESTE
---
``` mermaid
erDiagram
    Alunos {
        ID_aluno ID
        nome VARCHAR
        matricula VARCHAR
    }
    Professores {
        ID_professor ID
        nome VARCHAR
    }
    Cursos {
        ID_curso ID
        nome VARCHAR
        codigo VARCHAR
    }
    Departamentos {
        ID_departamento ID
        nome VARCHAR
        ID_chefe INT
        ID_curso INT
    }
    Disciplinas {
        ID_disciplina ID
        nome VARCHAR
        codigo VARCHAR
    }
    Matrizes_Curriculares {
        ID_matriz ID
        ID_curso ID
        ID_disciplina ID
        semestre INT
        ano INT
    }
    Historico_Escolar {
        ID_aluno ID
        ID_disciplina ID
        semestre INT
        ano INT
        nota_final FLOAT
    }
    Disciplinas_Ministradas {
        ID_professor ID
        ID_disciplina ID
        semestre INT
        ano INT
    }
    TCC {
        ID_grupo ID
        ID_aluno ID
        ID_professor_orientador ID
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

