const perguntas = [
    {
        pergunta: "Por qual motivo os EUA entraram para a 2 Guerra?",
        opcoes: [
            "Por conta de bombardeios",
            "Por conta de disputas territoriais",
            "Por causa de um ataque do Japão em uma de suas bases navais",
            "Por que foi pedido ajuda para eles"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "Qual o nome da base naval dos EUA que foi bombardeada pelo Japão?",
        opcoes: [
            "Fort Sumter National Monument",
            "Fort Clinch State Park",
            "U.S. Naval Academy",
            "Pearl Harbor"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual faculdade Hitler fez antes de entrar para o exército?",
        opcoes: [
            "Agronomia",
            "História",
            "Artes",
            "Arquitetura"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual foi o principal povo perseguido pelos nazistas?",
        opcoes: [
            "Cristões",
            "Negros",
            "Judeus",
            "Comunistas"
        ],
        resposta: 2
    },
    {
        pergunta: "Em qual ano a Segunda Guerra Mundial começou?",
        opcoes: [
            "1945",
            "1942",
            "1935",
            "1939"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual país a Alemanha tentou invadir, dando início a Guerra?",
        opcoes: [
            "Pôlonia",
            "URSS",
            "França",
            "Itália"
        ],
        resposta: 0
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;
