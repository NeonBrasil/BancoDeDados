import * as fs from 'node:fs';

class FileGenerator {
    constructor() {}

    writeFileAsync(queries) {
        var newValue = queries
        console.log(queries)

        fs.writeFile('Queries/InsertToTable.sql', newValue, 'utf-8', function (err) {
            if (err) throw err;
            console.log('filelistAsync complete');
        });
    }
    
}

const fileGenerator = new FileGenerator();
export default fileGenerator;