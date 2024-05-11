import client from './../db.js'

class TableDeletionController {
    constructor() {}

    dropTesteTable() {
        const sql = ' DROP TABLE willDropSoon ';
    client.query(sql, (err, result) => {
        if (err) {
            console.log('deu bom não...', err);
        } else {
            console.log('boa mlk')
        }
    })
    }
}

const tableDeletionController = new TableDeletionController();
export default tableDeletionController;