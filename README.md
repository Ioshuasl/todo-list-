# To-Do List

Minha primeira experiência como desenvolvedor backend, criei uma To-Do List básica que permite o usuário cadastrar, editar ou excluir tarefas dentro da aplicação. Como primeira experiência desenvolvendo uma aplicação backend foi muito importanta para mim pois conseguir aprender e aplicar Métodos CRUD, organização do meu projeto em pastas (config, controllers, models, routes) de acordo com suas devidas funcionalidades, estruturar e modelar um conteiner no Docker simulando um banco de dados PostgreSQL

## Funcionalidades
- Cadastro de tarefas
- Listar tarefas cadastradas na aplicação
- Edição de uma tarefa cadastrada na aplicação
- Exclusão de uma tarefa cadastrada na aplicação

## Estrutura de pastas

```plaintext
/src                   #código principal da aplicação
	/controllers   #funções de controle de rotas
	/models        #modelos de dados do banco de dados
	/routes        #Definição de rotas da API
	/config        #Configuração para sincronizar a API com o banco de dados
  index.js             #Arquivo principal para executar a aplicação
```

## Tecnologias utilizadas:
- Node.js
- Express.js
- PostgreSQL
- Docker

## Rodando localmente

- Clonar o repositório:
```plaintext
git clone https://github.com/Ioshuasl/todo-list-.git
```

- Instalar o docker e rodar o seguinte comando para criar o conteiner:
```plaintext
docker run --name todolist -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres
```

- Instalar as dependencias:
```plaintext
npm install
```

- Inicializando o servidor:
```plaintext
node index.js
```
