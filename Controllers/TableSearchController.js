import client from './../db.js'

class TableSearchController {
    constructor() {}

    buscarHistoricoEscolar(alunoID) {
        var query = `
            SELECT  aluno.aluno_id 
                    ,aluno.nome as nome_aluno
                    ,disciplina.nome as disciplina_nome
                    ,disciplina.disciplina_id as codigo_disciplina
                    ,matricula.ano
                    ,matricula.semestre
                    ,matricula.nota_final
            FROM 
                matricula
            INNER JOIN 
                aluno ON matricula.aluno_id = aluno.aluno_id
            INNER JOIN 
                disciplina ON matricula.disciplina_id = disciplina.disciplina_id
            WHERE 
                aluno.aluno_id = $1;
        `
        client.query(query, [alunoID], (err, result) => {
            console.log("Query:" + query);
            if (err) throw err;
            console.log("RESULT") 
            console.log(result.rows)
        })
    }

    buscarHistóricoDeDisciplinas(professorID) {
        var query =  `
            select  disciplina.semestre
                    ,disciplina.ano
                    ,disciplina.nome as nome_disciplina
                    ,professor.nome as nome_professor
                    ,professor.professor_id
            from professor
            left join disciplina on disciplina.professor_id = professor.professor_id and professor.professor_id = $1
            where disciplina.nome notnull 
        `
        
        client.query(query, [professorID], (err, result) => {
            console.log("Query:" + query);
            if (err) throw err;
            console.log("RESULT") 
            console.log(result.rows)
        })
    }

    listarFormandos() {
        //Listar alunos que já se formaram (foram aprovados em todos os cursos de uma matriz curricular) em um determinado semestre de um ano
    }

    listarChefesDeDepartamento() {
        var query = `
            select  professor.nome as nomeProfessor
                    ,departamento.nome as nomeDepartamento
                    ,departamento.chefe_id
                    ,professor.professor_id 
            from professor
            left join departamento on professor.professor_id = departamento.chefe_id
            where departamento.nome notnull
        `

        client.query(query, (err, result) => {
            console.log("Query:" + query);
            if (err) throw err;
            console.log("RESULT") 
            console.log(result.rows)
        })
    }

    buscarGrupoTCC() {
        //Saber quais alunos formaram um grupo de TCC e qual professor foi o orientador
    }
}

const tableSearchController = new TableSearchController();
export default tableSearchController;