class DataGenerator {
    constructor() {}

    getRandomName() {
        const nameData = [
            'Maria Silva',
            'João Souza',
            'Ana Oliveira',
            'Pedro Santos',
            'Júlia Lima',
            'Carlos Ferreira',
            'Bruna Costa',
            'Lucas Alves',
            'Beatriz Rodrigues',
            'Gabriel Pereira',
            'Mariana Almeida',
            'Matheus Gomes',
            'Rafael Barbosa',
            'Laura Monteiro',
            'Gustavo Martins',
            'Fernanda Ribeiro',
            'André Carvalho',
            'Camila Melo',
            'Felipe Dias',
            'Letícia Azevedo'
        ]

        const randomIndex = Math.floor(Math.random() * nameData.length);

        return nameData[randomIndex];
    }

    getRandomDate() {
        return "CURRENT_TIMESTAMP"
    }

    getRandomEmail() {
        return "emailDeTeste@gmail.com"
    }
}

const generator = new DataGenerator();
export default generator;