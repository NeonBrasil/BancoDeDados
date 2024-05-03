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
