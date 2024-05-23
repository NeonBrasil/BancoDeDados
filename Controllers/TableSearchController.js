import client from './../db.js'

class TableSearchController {
    constructor() {}

    searchAlunoTable() {
        const sql = "SELECT * FROM aluno"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log(result)
            }
        })
    }

    searchProfessorTable() {
        const sql = "SELECT * FROM professor"
        client .query(sql, (err, result) => {
            if (err) {
                console.log("deu erro")
            }else{
                console.log(result)
            }
        })
    }
}

const tableSearchController = new TableSearchController();
export default tableSearchController;