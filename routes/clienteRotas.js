var express = require("express")
var clienteControlador = require("./../controllers/clienteControlador")

var rotas = express.Router()

//Rotas da API
rotas.post("/",clienteControlador.inserir)
//rotas.get("/:id",clienteControlador.buscarUm)
rotas.get("/",clienteControlador.buscarVarios)
rotas.put("/:id",clienteControlador.atualizar)
rotas.delete("/:id",clienteControlador.remover)

//Rota das páginas
rotas.get("/cadastrar",clienteControlador.novoFormulario) //Retorna a página de cadastro
rotas.get("ediReq/:id",clienteControlador.editarFormulario)  //Retorna a página de edição
rotas.get("delReq/:id",clienteControlador.montarReqDelete)  //Monta a requisição de remoção
rotas.post("/editar/:id",clienteControlador.montarReqEdicao)  //Monta a requisição de edição

module.exports = rotas