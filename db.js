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
