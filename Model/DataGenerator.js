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
            'Letícia Azevedo',
            'João Santos',
            'Maria Oliveira',
            'Carlos Lima',
            'Ana Ferreira',
            'Pedro Costa',
            'Júlia Pereira',
            'Rafael Almeida',
            'Beatriz Rodrigues',
            'Gustavo Martins',
            'Fernanda Ribeiro'
        ]

        const randomIndex = Math.floor(Math.random() * nameData.length);

        return nameData[randomIndex];
    }

    getRandomEmail() {
        const emailData = [
            'joao.santos@example.com',
            'maria.oliveira@example.com',
            'carlos.lima@example.com',
            'ana.ferreira@example.com',
            'pedro.costa@example.com',
            'julia.pereira@example.com',
            'rafael.almeida@example.com',
            'beatriz.rodrigues@example.com',
            'gustavo.martins@example.com',
            'fernanda.ribeiro@example.com',
            'j.santos@example.com',
            'm.oliveira@example.com',
            'c.lima@example.com',
            'a.ferreira@example.com',
            'p.costa@example.com',
            'j.pereira@example.com',
            'r.almeida@example.com',
            'b.rodrigues@example.com',
            'g.martins@example.com',
            'f.ribeiro@example.com',
            'joao_santos@example.com',
            'aria_oliveira@example.com',
            'carlos_lima@example.com',
            'ana_ferreira@example.com',
            'pedro_costa@example.com',
            'julia_pereira@example.com',
            'rafael_almeida@example.com',
            'beatriz_rodrigues@example.com',
            'gustavo_martins@example.com',
            'fernanda_ribeiro@example.com',
            'joaosantos@example.com',
            'mariaoliveira@example.com',
            'carloslima@example.com',
            'anaferreira@example.com',
            'pedrocosta@example.com',
            'juliapereira@example.com',
            'rafaelalmeida@example.com',
            'beatrizrodrigues@example.com',
            'gustavomartins@example.com',
            'fernandaribeiro@example.com',
        ]

        const randomIndex = Math.floor(Math.random() * emailData.length);

        return emailData[randomIndex];
    }

    getDepartamentos() {
        const departamento = [
            'Administração',
            'Ciências Contábeis',
            'Economia',
            'Engenharia',
            'Tecnologia da Informação',
            'Recursos Humanos',
            'Marketing',
            'Finanças',
            'Pesquisa e Desenvolvimento',
            'Educação e Treinamento'
        ]

        return departamento;
    }

    getCursos() {
        const cursos = [
            'Gestão Empresarial',
            'Contabilidade e Finanças',
            'Análise Econômica',
            'Engenharia Civil',
            'Ciência da Computação',
            'Gestão de Pessoas',
            'Marketing Digital',
            'Finanças Corporativas',
            'Inovação Tecnológica',
            'Formação de Professores'
        ]

        return cursos;
    }

    getDisciplinas() {
        const disciplinas = [
            'Gestão Estratégica',
            'Empreendedorismo',
            'Contabilidade Gerencial',
            'Análise de Balanços',
            'Microeconomia',
            'Macroeconomia',
            'Estruturas de Concreto',
            'Mecânica dos Solos',
            'Programação Orientada a Objetos',
            'Algoritmos e Estruturas de Dados',
            'Desenvolvimento Organizacional',
            'Psicologia do Trabalho',
            'Gestão de Mídias Sociais',
            'Marketing de Conteúdo',
            'Gestão de Investimentos',
            'Planejamento Financeiro',
            'Gestão de Projetos de Inovação',
            'Tecnologias Emergentes',
            'Didática e Metodologia do Ensino',
            'Psicopedagogia'
        ]

        return disciplinas;
    }
}

const generator = new DataGenerator();
export default generator;