API vCaixa, foi desenvolvida ultilizando o framework Adonis JS e Banco de dados PostgreSQL.

Link da API em produção, no o Heroku: https://still-castle-92030.herokuapp.com

Para testar a API eu ultlizei o insominia, link para download: https://insomnia.rest/download/

ROTAS DISPONIVEIS PARA CONSUMIR A API <br>

USUARIOS / SESSÃO
Para cadastrar um novo usuario, ultlize a seguinte rota:<br>
    POST: https://still-castle-92030.herokuapp.com/users <br>

    JSON: 
    {
	    "username": "Eduardo Castellini",
	    "email": "eduardo.castellini@hotmail.com.br",
	    "password": "123456"
    }

Para Autenticar na API, ultilize a rota:<br>
    POST: https://still-castle-92030.herokuapp.com/sessions <br>

    JSON: 
    {
	    "email": " ",
	    "password": " "
    }


***Para as proximas Rotas, ultlizar a opção de autenticação "Bearer Token" e no campo TOKEN informar valor que é retornado pela rota /sessions ***
______________________________________________________________________________________________________

CAIXA
Cadastrar novo caixa:<br>
    POST: https://still-castle-92030.herokuapp.com/caixa <br>

    JSON: 
    {
	    "description": "",
	    "saldo": 
    }

Visualizar todos os Caixa com os movimentos registrado:<br>
    GET: https://still-castle-92030.herokuapp.com/caixa


Visualizar somente um caixa com os respequitivos movimentos, (passando como parametro na URL o ID do caixa):<br>
    GET: https://still-castle-92030.herokuapp.com/caixa/1


Deletar um caixa, (Passando como parametro na URL o ID do caixa), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/caixa/1


______________________________________________________________________________________________________


CATEGORIAS:
Cadastrar uma nova categoria:<br>
    POST: https://still-castle-92030.herokuapp.com/categorias <br>

    JSON: 
    {
	    "description": ""
    }

Visualizar todos as categorias cadastradas:<br>
    GET: https://still-castle-92030.herokuapp.com/categorias


Visualizar somente uma categorias,(passando como parametro na URL o ID da categorias):<br>
    GET: https://still-castle-92030.herokuapp.com/categorias/1


Deletar uma categorias, (Passando como parametro na URL o ID da categorias), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/categorias/1


______________________________________________________________________________________________________


MOVIMENTOS DO CAIXA:
Cadastrar um novo movimento de caixa:<br>
    POST: https://still-castle-92030.herokuapp.com/movimentocaixa <br>

    JSON: 
    {
	    "cashier_id": 1,
	    "categories_id": 3,
	    "type": "s",    
	    "value": 00.00,
	    "description": "diversos"
    }

Visualizar todos os movimentos de caixa cadastrados:<br>
    GET: https://still-castle-92030.herokuapp.com/movimentocaixa


Visualizar somente uma movimento,(passando como parametro na URL o ID do movimento):<br>
    GET: https://still-castle-92030.herokuapp.com/movimentocaixa/1


Deletar um movimento, (Passando como parametro na URL o ID do movimento), conforme o exemplo abaixo:<br>
    DELETE: https://still-castle-92030.herokuapp.com/movimentocaixa/1





BAIXAR O PROJETO E RODAR EM SEU COMPUTADOR.

Para executar o projeto, precisa ter instalado a CLI do do Adonis, Caso não tenha, execute o camando:

$   npm i -g @adonisjs/cli


Segue os passos abaixo para fazer o download e rodar o projeto.

$   git clone https://github.com/EduardoCastellini/vcaixa.git

$   cd vcaixa

$   yarn install

Ajuste o arquivo .env com as variaveis de ambiente, para acesso ao banco de dados PostgreSQL.
Altere os campos: <br>

DB_CONNECTION=pg <br>
DB_HOST=127.0.0.1  (Confirmar o IP do host)<br>
DB_PORT=5432       (Cofirmar a Porta)<br>
DB_USER=           (usuario do banco)<br>
DB_PASSWORD=       (senha do banco)<br>
DB_DATABASE=       (nome da base de dados)<br>

Na raiz do projetos executar o comando a seguir para atualizar a base de dados conforme as migrastions.

$   adonis migration:run

Apos rodar as migration na base de dados, execute o seguinte comando para startar a API.

$   adonis serve --dev <br>
        OU <br>
$   yarn start