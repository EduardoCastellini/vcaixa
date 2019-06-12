API vCaixa, foi desenvolvida utilizando o framework Adonis JS e Banco de dados PostgreSQL.

Link da API em produção, no o Heroku: https://still-castle-92030.herokuapp.com

Para testar a API utilizei o insominia, link para download: https://insomnia.rest/download/

ROTAS DISPONIVEIS PARA CONSUMIR A API <br>

USUARIOS / SESSÃO
Para cadastrar um novo usuário, utilize a seguinte rota:<br>
    POST: https://still-castle-92030.herokuapp.com/users <br>

    JSON: 
    {
        "username": " ",
        "email": " ",
        "password": " "
    }

Para Autenticar na API, utilize a rota:<br>
    POST: https://still-castle-92030.herokuapp.com/sessions <br>

    JSON: 
    {
        "email": " ",
        "password": " "
    }

<br>
**Para as próximas Rotas, utilizar a opção de autenticação "Bearer Token" e no campo TOKEN informar valor que é retornado pela rota /sessions (Autenticação) ***
<hr>

CAIXA <br>
Cadastrar novo caixa:<br>
    POST: https://still-castle-92030.herokuapp.com/caixa <br>

    JSON: 
    {
        "description": "",
        "saldo": 
    }

Visualizar todos os Caixas com os respectivos movimentos registrados:<br>
    GET: https://still-castle-92030.herokuapp.com/caixa

Visualizar somente um caixa com os respectivos movimentos, (passando como parâmetro na URL o ID do caixa):<br>
    GET: https://still-castle-92030.herokuapp.com/caixa/1

Deletar um caixa, (Passando como parâmetro na URL o ID do caixa), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/caixa/1

<hr>

CATEGORIAS <br>
Cadastrar uma nova categoria:<br>
    POST: https://still-castle-92030.herokuapp.com/categorias <br>

    JSON: 
    {
        "description": ""
    }

Visualizar todas as categorias cadastradas:<br>
    GET: https://still-castle-92030.herokuapp.com/categorias

Visualizar somente uma categoria, (passando como parâmetros na URL o ID da categoria):<br>
    GET: https://still-castle-92030.herokuapp.com/categorias/1

Deletar uma categoria, (passando como parâmetro na URL o ID da categoria), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/categorias/1

<hr>

MOVIMENTOS DO CAIXA <br>
Cadastrar um novo movimento de caixa:<br>
    POST: https://still-castle-92030.herokuapp.com/movimentocaixa <br>

    JSON: 
    {
        "cashier_id": 7, (ID do Caixa)
        "categories_id": 2, (ID da Categoria)
        "type": "s", ***  ("S" para saida e "E" para entrada)
        "value": 00.00,
        "description": "diversos"
    }

Visualizar todos os movimentos de caixa cadastrados:<br>
    GET: https://still-castle-92030.herokuapp.com/movimentocaixa

Visualizar somente uma movimento, (passando como parâmetro na URL o ID do movimento):<br>
    GET: https://still-castle-92030.herokuapp.com/movimentocaixa/1

Deletar um movimento, (passando como parâmetro na URL o ID do movimento), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/movimentocaixa/1
<hr>
<br>
<br>
BAIXAR O PROJETO E RODAR EM SEU COMPUTADOR.

Para executar o projeto, precisa ter instalado a CLI do Adonis, caso não tenha, execute o comando:

$   npm i -g @adonisjs/cli

Segue os passos abaixo para fazer o download e rodar o projeto.

$   git clone https://github.com/EduardoCastellini/vcaixa.git

$   cd vcaixa

$   yarn install

Pegando como exemplo o arquivo “.env.exemple”, crie um novo arquivo somente “.env”.<br>
E altere os campos conforme descrito abaixo: <br>
<br>
APP_KEY=BvqSIKcZFkUTDTX9hGie2A3YRTEay70U <br>
DB_CONNECTION=pg    <br>
DB_HOST=127.0.0.1  (Confirmar o IP do host)<br>
DB_PORT=5432       (Cofirmar a Porta)<br>
DB_USER=           (usuario do banco)<br>
DB_PASSWORD=       (senha do banco)<br>
DB_DATABASE=       (nome da base de dados)<br>

Na raiz do projeto executar o comando a seguir para atualizar a base de dados conforme as migrations.

$   adonis migration:run

Após rodar as migrations na base de dados, execute o seguinte comando para startar a API.

$   adonis serve --dev <br>
        OU <br>
$   npm start
