# GUPY_APP

O gupy_app é dividido em duas partes: backend e fronted.

No backend temos o nodejs que serve uma API para o frontend e interage com o banco de dados em SQLite3.

## Configurações

- Node > 5
- SQLite > 3

## Rodando a aplicação

### Backend

Instale as dependências:

`npm install`

Rode a aplicação com:

`npm run dev`

Após a aplicação rodando, de uma carga de dados inicias no banco de dados, requisitando a rota (pode ser pelo browser):

`http://localhost:3000/starships/charge`

### Frontend

Instale as dependências:

`npm install`

Rode a aplicação com:

`npm run dev`

Depois é só acessar o browser com o endereço:

`http://localhost:8080/`