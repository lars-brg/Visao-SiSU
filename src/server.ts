import { PrismaClient } from "@prisma/client";
import * as http from 'http';

const prismaClient = new PrismaClient();

http.createServer(async (requisicao, resposta) => {
    const method = requisicao.method
    const url = requisicao.url
    if(method === 'GET'){
        try {
            const dados = await prismaClient.modalidade.findMany();
            resposta.setHeader('Content-Type', 'application/json')
            resposta.setHeader('Access-Control-Allow-Origin', '*');
            resposta.end(JSON.stringify(dados))
        } catch (error) {
            console.log('ERRO');
            resposta.statusCode = 500;
            resposta.end('ERRO')

        }
    }
}).listen(3333)
console.log("Servidor rodando")