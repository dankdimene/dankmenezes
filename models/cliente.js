//Criar um modelo que representa uma tabela do banco de dados: importar SEQUELIZE e a conexão criada com o banco

var sequelize = require("sequelize")


//Depois de exportar o banco de dados (no arquivo banco_config), fazer a importação com o "./nomedoarquivo"
//Nesse caso, como o arquivo que quero importar está numa pasta separada, preciso inserir "../" para voltar uma pasta

var banco = require("../configs/banco_config")

//Relacionamento Um para UM
var cidade = require("./cidade")


//Criação do primeiro modelo (do cliente)
//Define um modelo chamado "cliente", que é o nome da tabela e coloca outro parâmetro (objeto)
//No objeto, informar quais são os campos do meu banco de dados (as colunas de uma tabela)
//Inserir um campo "idcliente" e colocar : (porque é propriedade) e os seus valores entre {}
//Colocar 4 campos: type (tipo de conteúdo), allowNull (permitir campos em branco), primaryKey e autoIncrement
//No type, coloco o que importamos acima (sequelize) seguida de ponto e tipo INTEGER(inteiro)
//No allowNull, primaryKey e autoIncrement, vamos dizer se é TRUE ou FALSE

var cliente = banco.define("cliente",{
    idcliente: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    nome: {
        type: sequelize.STRING(50),
        allowNull: false,
    },

    cpf: {
        type: sequelize.STRING(15),
        allowNull: false,
    },

    email: {
        type: sequelize.STRING(50),
        allowNull: false,
    },

    //Aqui, vamos dizer que essa coluna vai referenciar uma outra tabela, então usar references para referenciar o modelo "cidade"
    //Colocar também a chave que esse modelo referencia
    /*idcidade: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "cidade",
            key: "idcidade"
        }
    },*/

}, {

//Colocar outro atributo para congelar o nome da tabela "freezeTableName". 
//Se não, ele vai mudar o nome da tabela para o plural, Clientes
//Timestamps serve para evitar que se criem duas colunas na tabela referentes ao momento de um dado ser inserido ou atualizado na tabela

    freezeTableName: true,
    timestamps: false

})

//Fazendo o relacionamento 1:1 para os dois lados
cidade.hasOne(cliente, {
    foreignKey: "idcidade"
})
cliente.belongsTo(cidade,{
    foreignKey: "idcidade"
})

//Fazer a exportação do modelo do cliente, para fazer as alterações na tabela
module.exports = cliente

//Para criar a tabela do zero
//cliente.sync()



