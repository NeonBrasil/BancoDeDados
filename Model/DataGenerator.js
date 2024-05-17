class DataGenerator {
    constructor() {}

    getRandomName() {
        return "nomeDeTeste"
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