import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Context } from "vm";

//funcao handler assincrona que será invocada pelo api gateway
export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
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
