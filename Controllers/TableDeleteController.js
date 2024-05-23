import client from './../db.js'

class TableDeleteController {
    constructor() {}

    dropAllTables() {
        this.dropMatriculasTable()
        this.dropTccsTable()
        this.dropAlunosTable()
        this.dropMatrizCurricularTable()
        this.dropDisciplinasMinistradasTable()
        this.dropDisciplinasTable()
        this.dropCursosTable()
        this.dropDepartamentosTable()
        this.dropProfessoresTable()
        return;
    }

    dropMatriculasTable() {
        const sql = 'DROP TABLE defaultdb.matricula';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela matricula deletada')
            }
        })
    }

    dropTccsTable() {
        const sql = 'DROP TABLE defaultdb.tcc';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela tcc deletada')
            }
        })
    }

    dropAlunosTable() {
        const sql = 'DROP TABLE defaultdb.aluno';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela aluno deletada')
            }
        })
    }

    dropMatrizCurricularTable() {
        const sql = 'DROP TABLE defaultdb.matrizcurricular';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela matriz curricular deletada')
            }
        })
    }

    dropDisciplinasMinistradasTable() {
        const sql = 'DROP TABLE defaultdb.disciplinaministrada';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela disciplina ministrada deletada')
            }
        })
    }

    dropDisciplinasTable() {
        const sql = 'DROP TABLE defaultdb.disciplina';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela disciplina deletada')
            }
        })
    }

    dropCursosTable() {
        const sql = 'DROP TABLE defaultdb.curso';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela curso deletada')
            }
        })
    }

    dropDepartamentosTable() {
        const sql = 'DROP TABLE defaultdb.departamento';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela departamento deletada')
            }
        })
    }

    dropProfessoresTable() {
        const sql = 'DROP TABLE defaultdb.professor';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('Tabela professor deletada')
            }
        })
    }
}

const tableDeleteController = new TableDeleteController();
export default tableDeleteController;