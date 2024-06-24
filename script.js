const caixaPrincipal=document.querySelector("caixa-principal")
const caixaPerguntas=document.querySelector("caixa-perguntas")
const caixaAlternativas=document.querySelector("caixa-alternativas")
const caixaResultado=document.querySelector("caixa-resultado")
consttextoResultado=document.querySelector("texto-resulatdo")

const perguntas = [
    {
    enunciado: "Como a inteligência artificial está transformando o mercado de trabalho?",
    alternativas: [
    "Reduzindo a demanda por empregos tradicionais",
    "Criando novas oportunidades de emprego"
    ]
    },
    {
    enunciado: "Quais os principais desafios éticos associados ao uso crescente de inteligência artificial?",
    alternativas: [
    "Melhora a precisão de dados",
    "Aumentar a privacidade e segurança dos dados"
    ]
    },
    {
    enunciado: "Na sua opinião, o desenvolvimento da IA deve ser",
    alternativas: [
    "Rigorosamente regulamentado para evitar abuso",
    "Liberado para incentivar a inovação"
    ]
    },
    
];