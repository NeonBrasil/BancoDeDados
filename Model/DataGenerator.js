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

    getRandomTccTitle() {
        const nameData = [
            'A Influência das Redes Sociais no Comportamento do Consumidor',
            'Desenvolvimento de um Sistema de Gestão Escolar com Interface Web',
            'Estudo Comparativo de Algoritmos de Machine Learning para Previsão de Vendas',
            'O Impacto da Transformação Digital nas Empresas Tradicionais',
            'Análise de Segurança em Aplicações Web: Vulnerabilidades e Soluções',
            'A Importância da User Experience (UX) no Desenvolvimento de Aplicativos Móveis',
            'Blockchain: Aplicações e Desafios na Área Financeira',
            'Inteligência Artificial e Ética: Implicações Sociais e Morais',
            'Desenvolvimento de um Chatbot para Atendimento ao Cliente Utilizando Processamento de Linguagem Natural',
            'A Utilização de Big Data na Tomada de Decisões Empresariais',
            'Energia Renovável: Tecnologias e Perspectivas Futuras',
            'Análise da Eficiência de Técnicas de SEO em E-commerce',
            'Aplicações de Realidade Aumentada na Educação',
            'Desenvolvimento de um Sistema de Monitoramento de Saúde com IoT',
            'Gamificação no Ambiente Corporativo: Benefícios e Desafios',
            'O Uso de Tecnologias de Cloud Computing em Startups',
            'Desenvolvimento de um Aplicativo de Gestão Financeira Pessoal',
            'A Influência da Cultura Organizacional na Inovação',
            'Automação Residencial: Tecnologias e Aplicações',
            'Impactos da Internet das Coisas (IoT) na Indústria 4.0',
            'A Evolução do Direito Trabalhista no Brasil',
            'Análise dos Efeitos da Globalização na Cultura Local',
            'A Importância da Nutrição no Desempenho Esportivo',
            'Impactos das Mudanças Climáticas na Agricultura Sustentável',
            'O Papel da Educação Financeira nas Escolas Brasileiras',
            'A Influência da Mídia na Formação da Opinião Pública',
            'Estudo sobre a Violência Doméstica e os Mecanismos de Apoio às Vítimas',
            'A Gestão de Resíduos Sólidos em Grandes Centros Urbanos',
            'A Importância da Saúde Mental no Ambiente de Trabalho',
            'A Participação das Mulheres na Política Brasileira'
        ]

        const randomIndex = Math.floor(Math.random() * nameData.length);

        return nameData[randomIndex];
    }
}

const generator = new DataGenerator();
export default generator;