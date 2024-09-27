import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Context } from "vm";

//funcao handler assincrona que será invocada pelo api gateway
export async function handler(event: APIGatewayProxyEvent, 
    context: Context): Promise<APIGatewayProxyResult> {
        //obtem o id da requisição
        const lambdaRequestId = context.awsRequestId;
        //obtem o id da requisição http
        const apiRequestId = event.requestContext.requestId;  
        //logs que exibem os ids no console (Lembrar que logs geram custos e nao devem expor informações sensíveis)
        console.log(`API Gateway RequestId: ${apiRequestId} - Lambda Request ID: ${lambdaRequestId}`);    
        //obtem o metodo http
        const method = event.httpMethod;
        //obtem o recurso
        if(event.resource === "/products") {
            if(event.httpMethod === "GET") {
                console.log("GET /products");
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "GET /products",
                    }), 
                };
            }
            
        } //verifica se o recurso é /products/{id}
        else if(event.resource === "/products/{id}") {
            //obtem o id do produto
            const productId = event.pathParameters!.id as string;
            console.log("GET /products/{productId}");
            //verifica se o id é um numero
            return {
                statusCode: 200,
                body: "GET /products/{productId}",
            }; 
        }//retorna erro
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Error",
                }),
            };
    }
