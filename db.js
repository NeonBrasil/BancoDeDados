import pg from 'pg'

class DataBaseManager {

    constructor() {
        this.client = new pg.Client("postgresql://danilo-miranda:LAZxcK4nQgzwEyGNma-xZQ@projeto-banco-de-dados-14602.7tt.aws-us-east-1.cockroachlabs.cloud:26257/testedrop?sslmode=verify-full");
        this.configSettings()
    }

    configSettings() {
        this.client.connect(function(error) {
            if (!!error) {
                console.log(error.stack);
            } else {
                console.log('connected');
            }
        });
    }
}

const client = new DataBaseManager().client;
export default client;