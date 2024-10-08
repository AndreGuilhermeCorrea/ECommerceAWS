import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cwlogs from "aws-cdk-lib/aws-logs";

//propriedades do stack
interface ECommerceApiStackProps extends cdk.StackProps {
    //função lambda que será invocada pelo api gateway para obter os produtos
    productsFunction: lambdaNodejs.NodejsFunction;
    //função lambda que será invocada pelo api gateway para administração da tabela
    productsAdminFunction: lambdaNodejs.NodejsFunction;
}

//classes que representam o stack
export class ECommerceApiStack extends cdk.Stack {
    //construtor: recebe o escopo, o id e as propriedades do stack
    constructor(scope: Construct, id: string, props: ECommerceApiStackProps) {
        super(scope, id, props);
        //pastas que agrupam os arquivos de logs
        const logGroup = new cwlogs.LogGroup(this, "ECommerceApiLogGroup");
        //cria uma api gateway
        const api = new apigateway.RestApi(this, "ECommerceApi", {
            restApiName: "ECommerceApi",
            cloudWatchRole: true,
            deployOptions: {
                //configurações do deploy
                accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
                //configurações do log
                accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
                    //campos que serão exibidos no log
                    httpMethod: true,
                    ip: true,
                    protocol: true,
                    requestTime: true,
                    resourcePath: true,
                    responseLength: true,
                    status: true,
                    caller: true,
                    user: true,
                }),
            }
        });
        //cria um recurso de integração para os produtos
        const productsFetchIntegration = new apigateway.LambdaIntegration(props.productsFunction);
        
        // "GET /products"
        //cria um recurso para os produtos
        const productsResouce = api.root.addResource("products");
        //adiciona um metodo para o recurso
        productsResouce.addMethod("GET", productsFetchIntegration);

        // "GET /products/{id}"
        const productIdResource = productsResouce.addResource("{id}");
        productIdResource.addMethod("GET", productsFetchIntegration);

        //integração para a função de administração
        const productsAdminIntegration = new apigateway.LambdaIntegration(props.productsAdminFunction);

        // "POST /products"
        productsResouce.addMethod("POST", productsAdminIntegration);

        // "PUT /products/{id}"
        productIdResource.addMethod("PUT", productsAdminIntegration);

        // "DELETE /products/{id}"
        productIdResource.addMethod("DELETE", productsAdminIntegration);
    }
}