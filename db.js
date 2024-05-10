import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    port: '5433',
    password: 'Arthur1103',
    database: 'projetoBD',
})

client.connect(function(error) {
    if (!!error) {
        console.log('erro');
    } else {
        console.log('connected');
    }
});


var sql = "CREATE TABLE Professor (name varchar(255),email varchar(255),chefeDepartamento BIT);";
client.query(sql, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Deu bão porra');
    }
});



/*
INSERIR DADOS

var sql = "INSERT INTO tabela (coluna1,coluna2,...) VALUES ?"
var values = [
    [valorColuna1, valorColuna2],
    [valorColuna1, valorColuna2],
    [valorColuna1, valorColuna2]
]
client.query(sql,[values], (err, result) => {
    tratar callback
})
*/ 

/*
CRIAR TABELA

var sql = "CREATE TABLE tabela (coluna1 varchar(255),coluna2 int,coluna3 BIT);";
client.query(sql, (err, result) => {
    tratar callback
});
*/

/*
DELETAR TABELA

var sql = "DROP TABLE database.tabela;";
client.query(sql, (err, result) => {
    tratar callback
});
*/