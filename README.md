<img alt="GoStack" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" style="max-width:100%">

## <p style="margin-top: 16px" align="center">**Desafio - Primeiro projeto Node.js**</p>

Uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.


```
# clonar o repositório
git clone https://github.com/nivaldoandrade/desafio-fundamentos-node.git

# Instalar as dependência
yarn

# Iniciar a aplicação
yarn dev:server

```
---
### Insomnia
Tutorial de como importar Workspace para teste [Importing and Exporting Data.](https://support.insomnia.rest/article/52-importing-and-exporting-data)
Download do [Workspace](https://github.com/nivaldoandrade/desafio-fundamentos-node/blob/master/InsomniaData/desafio-fundamentos-node.json).

---
### Rotas da aplicação
* POST /transactions: A rota receber **title**, **value** e **type** dentro do corpo da requisição, sendo type o tipo da transação, que deve ser **income** para entradas (depósitos) e **outcome** para saídas (retiradas).
  ```JSON
  {
    "title": "Salário",
    "value": 3000,
    "type": "income"
  }
  ```

* GET /transactions: Essa rota retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito.
  ```JSON
  {
    "transactions": [
      {
        "id": "uuid",
        "title": "Salário",
        "value": 4000,
        "type": "income"
      },
      {
        "id": "uuid",
        "title": "Cadeira Gamer",
        "value": 1200,
        "type": "outcome"
      }
    ],
    "balance": {
      "income": 4000,
      "outcome": 1200,
      "total": 1200
    }
  }
  ```
____
Desafio feito pela [RocketSeat](https://rocketseat.com.br/).

