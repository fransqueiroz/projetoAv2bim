# Projeto Avaliativo Segundo Bimestre ADS Fatec Franca.

# Descrição
    Desenvolvemos o software "TICKETS" para a avaliação do segundo bimestre, 
    nele, é possivel criar tickets, alterar os dados e a exclusão completa.

# Instalação e execução do projeto.

Foram utilizadas as tecnologias: 
  - Backend: "Node": "14.17.0"
    - dependencias: 
        - "cors": "^2.8.5"
        - "express": "^4.17.1"
        - "knex": "^0.95.6"
        - "sqlite3": "^5.0.2"
    - dependenciasDesenvolvimento:
        - "nodemon": "^2.0.7"
  
  - Frontend: "React": "17.0.2"
    - dependencias:
        - "@testing-library/jest-dom": "^5.11.4"
        - "@testing-library/react": "^11.1.0"
        - "@testing-library/user-event": "^12.1.10"
        - "axios": "^0.21.1"
        - "react": "^17.0.2"
        - "react-dom": "^17.0.2"
        - "react-router-dom": "^5.2.0"
        - "react-scripts": "4.0.3"
        - "web-vitals": "^1.0.1"


Para iniciar a instalação do projeto, baixe o arquivo no repositório através do link: https://github.com/fransqueiroz/projetoAv2bim.git

 1º Passo: Abra o seu editor de código-fonte favorito (Visual Studio Code / Sublime Text / Atom / Brackets / Notepad++ entre outros)
      
 2º Passo: Acesse a pasta onde está localizado o projeto e inicie a instalação das dependencias executando o comando: 
   - Pasta backend: yarn install
   - Pasta frontend: yarn install
 
 3º Passo: No terminal, execute o comando: 
   - Pasta backend: yarn start
   - Pasta frontend: yarn start
  
 4º Passo: O servidor será inicializado na porta: 3000, acesse o link: http://localhost:3000/tickets
 
 # Como usar
 
 Para criar o ticket, clique no botão: " + Adicionar ticket", o sistema vai abrirá um "sidebar" com os campos:
  - Nome 
  - Assunto 
  - Descrição
  
após preencher os dados, o usuário deve clicar no botão: "Enviar" e o ticket é criado na página principal.

Para editar os dados do ticket, na página principal o usuário deve clicar no botão: "editar" e o sidebar é aberto novamente para alteração dos dados, após alterar,
o usuário clica no botão: "enviar" e o ticket é atualizado.

Para excluir o ticket, o usuário deve clicar no botão: "excluir" e o ticket selecionado é excluido do sistema.

# Contribuição
    - Fransérgio da Silva Queiroz
    - Heitor Fernandes Pires
    - Yago Prestes Montanari Rabelo
