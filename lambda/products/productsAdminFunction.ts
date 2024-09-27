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
        //obtem o metodo http e verifica se é POST
        if(event.resource === "/products") {
            console.log("POST /products");
                return {
                    statusCode: 201,
                    body: "POST /products" 
                };   
        } //verifica se o recurso é /products/{id}
        else if(event.resource === "/products/{id}") {
            //obtem o id do produto
            const productId = event.pathParameters!.id as string;
            //verifica se o metodo é PUT
            if(event.httpMethod === "PUT") {
                console.log("PUT /products/{productId}");
                return {
                    statusCode: 200,
                    body: "PUT /products" 
                };  
            }//verifica se o metodo é DELETE
            else if(event.httpMethod === "DELETE") {
                console.log("DELETE /products/{productId}");
                return {
                    statusCode: 200,
                    body: "DELETE /products" 
                }; 
            }    
        }//retorna erro
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Error",
                }),
            };
    }