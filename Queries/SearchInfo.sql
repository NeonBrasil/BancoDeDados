/* Query 1 */
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



/* Query 2 */ 
select  disciplina.semestre
        ,disciplina.ano
        ,disciplina.nome as nome_disciplina
        ,professor.nome as nome_professor
        ,professor.professor_id
from professor
left join disciplina on disciplina.professor_id = professor.professor_id and professor.professor_id = $1
where disciplina.nome notnull 

/* Query 3 */
SELECT DISTINCT a.aluno_id, a.nome, AVG(m.nota_final) as nota_final
FROM aluno a
JOIN matricula m ON a.aluno_id = m.aluno_id
JOIN MatrizCurricular mc ON m.curso_id = mc.curso_id
WHERE m.aprovado = TRUE
AND m.semestre = $1
AND m.ano = $2
GROUP BY a.aluno_id, a.nome
HAVING COUNT(DISTINCT mc.curso_id) = (SELECT COUNT(curso_id) FROM MatrizCurricular);


/* Query 4 */
select  professor.nome as nomeProfessor
        ,departamento.nome as nomeDepartamento
        ,departamento.chefe_id
        ,professor.professor_id 
from professor
left join departamento on professor.professor_id = departamento.chefe_id
where departamento.nome notnull

/* Query 5 */
select  tcc.titulo
        ,tcc.aluno_id 
        ,aluno.nome as nome_aluno
        ,tcc.grupo_id
        ,tcc.professor_id
        ,professor.nome as nome_professor
from tcc
left join professor on professor.professor_id = tcc.professor_id 
left join aluno on aluno.aluno_id = tcc.aluno_id 
where grupo_id = $1