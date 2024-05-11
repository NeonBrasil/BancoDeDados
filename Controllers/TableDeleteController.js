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
        const sql = 'DROP TABLE defaultdb.matriculas';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropTccsTable() {
        const sql = 'DROP TABLE defaultdb.tccs';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropAlunosTable() {
        const sql = 'DROP TABLE defaultdb.alunos';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropMatrizCurricularTable() {
        const sql = 'DROP TABLE defaultdb.matrizcurricular';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropDisciplinasMinistradasTable() {
        const sql = 'DROP TABLE defaultdb.disciplinasministradas';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropDisciplinasTable() {
        const sql = 'DROP TABLE defaultdb.disciplinas';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropCursosTable() {
        const sql = 'DROP TABLE defaultdb.cursos';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropDepartamentosTable() {
        const sql = 'DROP TABLE defaultdb.departamentos';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }

    dropProfessoresTable() {
        const sql = 'DROP TABLE defaultdb.professores';
        client.query(sql, (err, result) => {
            if (err) {
                console.log('deu bom não...', err);
            } else {
                console.log('boa mlk')
            }
        })
    }
}

const tableDeleteController = new TableDeleteController();
export default tableDeleteController;