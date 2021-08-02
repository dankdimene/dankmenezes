//Importar o módulo sequelize que foi instalado

var sequelize = require("sequelize")


//Criar a função que conecta com o banco de dados
//QUando quiser criar um objeto dentro do parâmetro, precisa usar {}
//Colocar dentro do 1º parâmetro o nome do banco de dados criado, depois usuário e senha
//Passar objeto com 2 parâmetros: host e dialect. Sequelize usa para encontrar o banco de dados
//Se o arquivo do banco estiver no seu PC, usar "localhost" como host

var conexao = new sequelize("progwebtest","root","",{
    host: "localhost",
    dialect: "mysql"
})


//Criar um comando de autenticação para validar os dados e conectar com o projeto
//Método para tratar uma possível exceção (erro) numa tentativa de conexao
//O then vai rodar se a conexão estiver ok (tipo if else)
//Se algo der errado, vai rodar o que estiver no catch

conexao.authenticate().then(
 function(){
    console.log("Conectado ao banco de dados...")
    }

).catch(
    function(erro){
    console.log("Erro ao conectar com o banco. Erro: "+erro)
    }
)


//Para mostrar pelo terminal, digitar: node banco_config.js

//Para fazer a exportação desse módulo: colocar o que a gente quer exportar, no caso, a conexão

module.exports = conexao