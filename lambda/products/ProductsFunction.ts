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
        }
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Error",
                }),
            };
    }
