# 🗞️ Front-end para a API sjcc 
## 🤔 Como utilizar
### 1. Configure a API sjcc
Ainda não configurou? 🥲 <br>
Clone o projeto e siga as instruções para configuração! -> https://github.com/lucasolima/sjcc
### 2. Crie um arquivo .env no diretório /src
- Copie e cole o conteúdo do arquivo <i>.env.example</i> dentro do arquivo <i>.env</i> <br>
- Cole a url da instância da sua API sjcc em ```VITE_API_URL```<br>
- Cole o seu JWT Token em ```VITE_JWT_TOKEN```, que foi gerado ao executar o arquivo <i>generateToken.ts</i> durante a configuração da API sjcc
### 3. Rode a aplicação
- Dentro do diretório do projeto, abra seu terminal e digite:
```bash
npm run dev
```
Sua aplicação será servida em: ```http://localhost:5173/``` 
