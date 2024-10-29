body {
    font-family: Arial, sans-serif;
    background-color: #71baeb; /* Fundo leve */
    margin: 0;
    padding: 20px;
    
}
h1 {
    color: #ffffff; /* Cor do texto */
    font-size: 30px; /* Tamanho da fonte */
    margin-bottom: 8px; /* Espaço abaixo do título */
    text-align: center;
}
#container {
    display: flex;
    flex-direction: row; /* Organiza os cartões horizontalmente */
    align-items: center;
    margin: 0 auto;
}

.cartao {
    background: rgb(223, 216, 161); /* Fundo  para os cartões */
    border: 1px solid #e9fa02; /* Borda  */
    border-radius: 8px; /* Cantos arredondados */
    padding: 20px;
    margin: 10px; /* Espaço entre os cartões */
    width: 300px; /* Largura dos cartões */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: transform 0.2s; /* Transição suave para efeito de hover */
}

.cartao:hover {
    transform: scale(1.05); /* Aumenta o cartão ao passar o mouse */
}

h3 {
    text-align: center; /* Centraliza o título */
    color: #000000; /* Cor do texto do título */
}

.cartao__conteudo__pergunta {
    margin: 10px 0; /* Margem para a pergunta */
    font-weight: bold; /* Texto em negrito */
    color: #000000; /* Cor do texto da pergunta */
}

.cartao__conteudo__opcoes {
    margin-top: 10px; /* Espaço acima das opções */
}

label {
    display: block; /* Coloca cada opção em uma nova linha */
    margin-bottom: 5px; /* Espaço entre as opções */
    cursor: pointer; /* Cursor de mão ao passar sobre as opções */
}

input[type="radio"] {
    margin-right: 10px; /* Espaço entre o radio e o texto */
}

button {
    display: block; /* Botão em bloco */
    margin: 20px auto 0; /* Margem automática para centralizar */
    padding: 10px 20px; /* Espaçamento interno do botão */
    border: none; /* Sem borda */
    background-color: #80814a; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    border-radius: 5px; /* Bordas arredondadas */
    cursor: pointer; /* Cursor de mão ao passar sobre o botão */
    transition: background-color 0.3s; /* Transição para a cor de fundo */
}

button:hover {
    background-color: #757c85; /* Cor de fundo ao passar o mouse */
}

footer {
    text-align: center; /* Centraliza o texto do rodapé */
    margin-top: 20px; /* Espaço acima do rodapé */
    font-size: 14px; /* Tamanho da fonte do rodapé */
    color: #ffffff; /* Cor do texto do rodapé */
    
}
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

#container {
    display: flex;              
    flex-wrap: wrap;           /* Permite que os itens quebrem para a próxima linha */
    justify-content: space-between; 
    align-items: stretch;       
    height: 100vh;              
    padding: 20px;             
    background-color: #f0f0f0; 
}

.item {
    background-color: #7e06ee; 
    color: white;              
    padding: 20px;             
    margin: 10px;              /* Margem entre os itens */
    border-radius: 5px;       
    flex: 0 1 calc(33.33% - 20px); /* Tamanho flexível com largura de 1/3 menos as margens */
    height: 150px;            /* Altura fixa para todos os cartões */
    box-sizing: border-box;   /* Inclui padding e margin no cálculo da largura */
}
