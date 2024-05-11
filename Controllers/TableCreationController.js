import client from './../db.js'
import pg from "pg";

// const { Pool } =  pg;

// const pool = new Pool({
//     user: 'danilo_miranda',
//     host: 'postgresql://danilo-miranda:911TWvYFkisPBtCXbxJ0iQ@projeto-banco-de-dados-14602.7tt.aws-us-east-1.cockroachlabs.cloud:26257/testedrop?sslmode=verify-full',
//     database: 'testedrop',
//     password: '911TWvYFkisPBtCXbxJ0iQ'
    
// })

class TableCreationController {
    constructor() {}

    createProfessorTable() {
        const sql = ' CREATE TABLE willDropSoon (nome varchar(100), idade int)';
    client.query(sql, (err, result) => {
        if (err) {
            console.log('deu bom não...', err);
        } else {
            console.log('boa mlk')
        }
    })
    }

    createDepartamentoTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createCursoTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createDisciplinaTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createMatrizCurricularTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createMatriculaTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }
    
    createAlunoTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createDisciplinaMinistradaTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }

    createTCCTable() {
        const sql = ""
        client .query(sql, (err, result) => {
            
        })
    }
}

const tableCreationController = new TableCreationController();
export default tableCreationController;