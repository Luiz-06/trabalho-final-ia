// Substitua pela sua chave da API do Google Gemini.
const API_KEY = "SUA_CHAVE_API_AQUI"; 

const GEMINI_URL_TEXT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
const GEMINI_URL_VISION = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

const sendButton = document.getElementById('send-button');
const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('image-upload');
const chatMessages = document.getElementById('chat-messages');

let imageBase64 = null;

imageInput.addEventListener('change', (evento) => {
    const arquivo = evento.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onloadend = () => {
        imageBase64 = leitor.result.split(',')[1];
        displayMessage('Imagem selecionada. Faça sua pergunta sobre ela.', 'user');
    };
    leitor.readAsDataURL(arquivo);
});

sendButton.addEventListener('click', handleSendMessage);
textInput.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        handleSendMessage();
    }
});

async function handleSendMessage() {
    const textoPrompt = textInput.value.trim();
    if (!textoPrompt && !imageBase64) {
        alert("Por favor, digite uma mensagem ou selecione uma imagem.");
        return;
    }

    displayMessage(textoPrompt || "Analisando imagem...", 'user');
    textInput.value = '';
    
    const loadingMessageDiv = displayMessage("Gerando resposta...", 'bot');

    try {
        let respostaBot;
        if (imageBase64) {
            respostaBot = await sendVisionRequest(textoPrompt, imageBase64);
            imageBase64 = null; 
            imageInput.value = ''; 
        } else {
            respostaBot = await sendTextRequest(textoPrompt);
        }
        loadingMessageDiv.textContent = respostaBot;

    } catch (erro) {
        console.error("Erro ao chamar a API:", erro);
        loadingMessageDiv.textContent = `Ocorreu um erro: ${erro.message}`;
        loadingMessageDiv.classList.add('error');
    }
}

async function sendTextRequest(prompt) {
    const corpoRequisicao = {
        contents: [{ parts: [{ text: prompt }] }]
    };
    
    const resposta = await fetch(GEMINI_URL_TEXT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoRequisicao)
    });

    const dados = await resposta.json();

    if (!resposta.ok || !dados.candidates) {
        console.error("Resposta da API com erro:", dados);
        const mensagemErro = dados?.error?.message || "A API retornou uma resposta inesperada.";
        throw new Error(mensagemErro);
    }

    return dados.candidates[0].content.parts[0].text;
}

async function sendVisionRequest(prompt, imagem) {
    const corpoRequisicao = {
        contents: [{
            parts: [
                { text: prompt },
                { inline_data: { mime_type: "image/jpeg", data: imagem } }
            ]
        }]
    };

    const resposta = await fetch(GEMINI_URL_VISION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoRequisicao)
    });

    const dados = await resposta.json();

    if (!resposta.ok || !dados.candidates) {
        console.error("Resposta da API com erro:", dados);
        const mensagemErro = dados?.error?.message || "A API retornou uma resposta inesperada.";
        throw new Error(mensagemErro);
    }
    
    return dados.candidates[0].content.parts[0].text;
}

function displayMessage(mensagem, remetente, isErro = false) {
    const divMensagem = document.createElement('div');
    divMensagem.classList.add('message', `${remetente}-message`);
    if (isErro) {
        divMensagem.classList.add('error');
    }
    divMensagem.textContent = mensagem;
    chatMessages.appendChild(divMensagem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return divMensagem;
}