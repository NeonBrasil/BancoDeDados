# BancoDeDados

---
TESTE
---
``` mermaid
erDiagram
    ALUNO ||--o{ HISTORICO_ESCOLAR : allows
    ALUNO {
        ID ID
        string NAME
        int SEMESTRE
    }
    DISCIPLINA ||--o{ HISTORICO_ESCOLAR : is
    DISCIPLINA {
        ID codigo da disciplina
        string NAME
    }
```

EXEMPLO DE COMO DEVE SER:

![image](https://github.com/NeonBrasil/BancoDeDados/assets/81389290/6e27c0a0-f8b1-4277-8238-1d0c4cd32245)

