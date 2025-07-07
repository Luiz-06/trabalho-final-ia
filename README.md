# Projeto Final de Inteligência Artificial

Este repositório contém a solução para o trabalho final da disciplina de Inteligência Artificial, ministrada pelo professor Otilio Paulo. O projeto está dividido em duas questões principais, que abordam a criação de uma rede neural convolucional para classificação de imagens e o desenvolvimento de um assistente de chatbot com a API do Google Gemini.

## ✒️ Aluno

* **Nome:** Luiz

## 📋 Sumário

* [Sobre o Projeto](#sobre-o-projeto)
* [Questão 1: Classificação de Grãos de Arroz](#questão-1-classificação-de-grãos-de-arroz)
* [Questão 2: Assistente de Chat com Gemini](#questão-2-assistente-de-chat-com-gemini)
    * [Funcionalidades](#funcionalidades)
    * [Tecnologias Utilizadas](#tecnologias-utilizadas)
    * [Como Utilizar](#como-utilizar)
* [Estrutura do Repositório](#estrutura-do-repositório)

## Sobre o Projeto

Este trabalho final consiste na aplicação prática de conceitos de inteligência artificial em dois cenários distintos: visão computacional e processamento de linguagem natural. A primeira parte foca na construção e treinamento de um modelo de classificação de imagens, enquanto a segunda explora a integração com uma API de um modelo de linguagem avançado para criar uma aplicação interativa.

## Questão 1: Classificação de Grãos de Arroz

Nesta questão, foi desenvolvida uma **Rede Neural Convolucional (CNN)** para classificar imagens de grãos de arroz em duas categorias: `grao_quebrado` e `graos_inteiros`. O objetivo era atingir uma acurácia superior a 90%, conforme especificado no projeto.

* **Modelo:** A rede foi construída em Keras/TensorFlow, utilizando camadas como `Conv2D`, `MaxPooling2D`, `Dropout` e `Dense`.
* **Dataset:** O treinamento foi realizado com o "Conjunto de dados de imagens de arroz" disponível no Mendeley Data.
* **Performance:** O modelo final alcançou uma **acurácia de 97,37%** no conjunto de testes, superando a meta estabelecida. A matriz de confusão e os gráficos de performance estão detalhados no relatório `questao1.pdf`.

## Questão 2: Assistente de Chat com Gemini

A segunda parte do projeto consistiu na implementação de um assistente de chatbot com uma interface web simples e amigável, capaz de interagir com o usuário respondendo a perguntas baseadas em texto e analisando imagens.

### Funcionalidades

* **Interface Limpa:** Um layout de chat moderno e responsivo, facilitando a interação.
* **Respostas por Texto:** Envie qualquer pergunta em texto e o assistente irá gerar uma resposta utilizando o modelo `gemini-1.5-flash`.
* **Análise de Imagens:** Envie uma imagem (JPEG, PNG, etc.) e faça uma pergunta sobre ela. O assistente utilizará a capacidade multimodal do Gemini para analisar o conteúdo visual e responder à sua pergunta.

### Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript
* **API:** Google Gemini (`gemini-1.5-flash-latest`)

### Como Utilizar

Para executar e testar o assistente de chatbot localmente, siga os passos abaixo.

**1. Obtenha sua Chave de API do Google Gemini:**

* Acesse o [Google AI Studio](https://aistudio.google.com/).
* Faça login com sua conta Google e crie um novo projeto.
* No menu lateral esquerdo, clique em "**Get API key**" e depois em "**Create API key**" para gerar sua chave pessoal. Copie essa chave.

**2. Configure a Chave de API no Projeto:**

* Abra a pasta `questao2/` e localize o arquivo `script.js`.
* Abra o arquivo `script.js` em um editor de código.
* Na primeira linha do arquivo, você encontrará a seguinte variável:
    ```javascript
    // Substitua pela sua chave da API do Google Gemini.
    const API_KEY = "SUA_CHAVE_API_AQUI"; 
    ```
* Substitua o texto `"SUA_CHAVE_API_AQUI"` pela chave de API que você copiou no passo anterior. Salve o arquivo.

**3. Execute o Chatbot:**

* Após salvar a alteração no `script.js`, abra o arquivo `questao2/index.html` no seu navegador de internet (ex: Google Chrome, Firefox, Microsoft Edge).
* A interface do chat será carregada e estará pronta para uso.

**4. Interaja com o Assistente:**

* **Para texto:** Digite sua mensagem na caixa de texto na parte inferior e clique no botão **"Enviar"** (ou pressione a tecla `Enter`).
* **Para imagem:** Clique no botão **"🖼️ Imagem"**, selecione um arquivo de imagem do seu computador. Após a imagem ser carregada, digite uma pergunta sobre ela na caixa de texto e clique em **"Enviar"**.

## Estrutura do Repositório
