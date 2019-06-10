API vCaixa, foi desenvolvida ultilizando o framework Adonis JS e Banco de dados PostgreSQL.

Link da API em produção, no o heroku:

Para testar a API eu ultlizei o insominia, segue link para download:
https://insomnia.rest/download/

ROTAS DISPONIBILIZADAS

USUARIOS / SESSÃO:
    Para cadastrar usuario de acesso ultlize a seguinte rota.
    POST: http://localhost:3333/users
    JSON:{
	        "username": "Eduardo Castellini",
	        "email": "eduardo.castellini@hotmail.com.br",
	        "password": "123456"
        }

    Para Autenticar na API
    POST: http://localhost:3333/sessions
    JSON:{
	        "email": " ",
	        "password": " "
        


CAIXA:


CATEGORIAS:


MOVIMENTOS DO CAIXA:


Está disponibilizado o código fonte no github: https://github.com/EduardoCastellini/vcaixa.git

para executar o projeto precisa ter instalado a CLI do do adonis, Caso não tenha, execute o camando:
$   npm i -g @adonisjs/cli


Segue os passos abaixo para fazer o download rodar o projeto

$   git clone https://github.com/EduardoCastellini/vcaixa.git

$   cd vcaixa

$   yarn install

Ajuste o arquivo .env com as variaveis de ambiente, para acesso ao banco de dados PostgreSQL.
Altere os campos:
DB_CONNECTION=pg
DB_HOST=127.0.0.1  **Confirmar o IP do host**
DB_PORT=5432       **Cofirmar a Porta**
DB_USER=           **usuario do banco**
DB_PASSWORD=       **senha do banco**
DB_DATABASE=       **nome da base de dados**

Na raiz do projetos executar o comando a seguir para atualizar a base de dados conforme as migrastions
$   adonis migration:run

Apos atualizar a base de dados, execute o seguinte comando para startar a API
$   adonis serve --dev
    OU
$   yarn start