const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a inteligência artificial está transformando o mercado de trabalho?",
        alternativas: [
            {
                texto: "Reduzindo a demanda por empregos tradicionais",
                afirmacao: "Você achou que a demanda de empregos ficou escassa "
            },
            {
                texto: "Criando novas oportunidades de emprego",
                afirmacao: "Você achou que é a criação de oportunidade de emprego."
            }
        ]
    },
    {
        enunciado: "Quais os principais desafios éticos associados ao uso crescente de inteligência artificial?",
        alternativas: [
            {
                texto: "Melhora a precisão de dados",
                afirmacao: "Vocẽ achou que se tem uma visão geral da precisão de dados"
            },
            {
                texto: "Aumentar a privacidade e segurança dos dados",
                afirmacao: "Vocẽ achou que com a inteligẽncia artificial a privacidade dos dados é mais segura."
            }
        ]
    },
    {
        enunciado: "Na sua opinião, o desenvolvimento da IA deve ser",
        alternativas: [
            {
                texto: "Rigorosamente regulamentado para evitar abuso.",
                afirmacao: "O desenvolvimento da IA deve ser  impulsionado com a inovação nessa área e luta para abrir novos caminhos profissionais."
            },
            {
                texto: "Liberado para incentivar a inovação",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();