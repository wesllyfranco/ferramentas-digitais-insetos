export const perguntas = [
    {
        enunciado: "Você quer descobrir qual é a função principal dos insetos polinizadores no ecossistema?",
        alternativas: [
            {
                texto: "Dispersar sementes",
                afirmacao: [
                    "Na verdade, o papel da dispersão é mais comum em outros animais, como aves e mamíferos."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
            {
                texto: "Polinizar plantas",
                afirmacao: [
                    "A polinização é essencial para a produção de frutos e sementes, mantendo a biodiversidade."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
        ]
    },
    {
        enunciado: "Agora, você quer descobrir qual dos seguintes insetos é conhecido por formar colônias altamente organizadas?",
        alternativas: [
            {
                texto: "Formiga",
                afirmacao: [
                   "As formigas vivem em colônias organizadas com papéis definidos, como operárias, soldados e rainhas.",
                ],
                proxima: 2,  // Direciona para a pergunta 3
            },
            {
                texto: "Grilo",
                afirmacao: [
                    "Os grilos são insetos solitários, não vivendo em colônias organizadas como as formigas ou abelhas."
                ],
                proxima: 2,  // Direciona para a pergunta 3
            },
        ]
    },
    {
        enunciado: "Você ainda pode querer saber qual inseto passa por metamorfose completa durante seu ciclo de vida?",
        alternativas: [
            {
                texto: "Borboleta",
                afirmacao: [
                    " As borboletas passam por uma metamorfose completa, incluindo estágios de ovo, lagarta, pupa (crisálida) e adulto.",
                ],
                proxima: 3,  // Direciona para a pergunta 4
            },
            {
                texto: "Barata",
                afirmacao: [
                    "As baratas passam por metamorfose incompleta, sem o estágio de pupa.",
                ],
                proxima: 3,  // Direciona para a pergunta 4
            },
        ]
    },
    {
        enunciado: "Você também achou interessante perguntar qual inseto é considerado o mais rápido em termos de velocidade de voo?",
        alternativas: [
            {
                texto: "Libélula",
                afirmacao: [
                    "As libélulas são extremamente rápidas, alcançando até 56 km/h em voo.",
                ],
                proxima: 4,  // Direciona para a pergunta 5
            },
            {
                texto: "Abelha",
                afirmacao: [
                    "As abelhas são rápidas, mas não tanto quanto as libélulas. Elas voam a cerca de 24 km/h quando estão em busca de néctar.",
                ],
                proxima: 4,  // Direciona para a pergunta 5
            },
        ]
    },
    {
        enunciado: "Por fim você quer descobrir qual é o maior inseto em termos de envergadura?",
        alternativas: [
            {
                texto: "Borboleta imperador",
                afirmacao: [
                    "A borboleta imperador pode ter uma envergadura de até 30 cm, sendo uma das maiores borboletas do mundo.",
                ]
            },
            {
                texto: "Besouro-golias",
                afirmacao: [
                    "O besouro-golias é um dos maiores insetos em termos de peso, mas não em envergadura."
                ]
            },
        ]
    }
];
