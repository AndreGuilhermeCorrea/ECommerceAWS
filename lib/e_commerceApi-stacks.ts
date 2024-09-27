import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cwlogs from "aws-cdk-lib/aws-logs";

//propriedades do stack
interface ECommerceApiStackProps extends cdk.StackProps {
    //função lambda que será invocada pelo api gateway
    productsFunction: lambdaNodejs.NodejsFunction;
}
//classes que representam o stack
export class ECommerceApiStack extends cdk.Stack {
    //construtor: recebe o escopo, o id e as propriedades do stack
    constructor(scope: Construct, id: string, props: ECommerceApiStackProps) {
        super(scope, id, props);
        //cria uma api gateway
        const api = new apigateway.RestApi(this, "ECommerceApi", {
            restApiName: "ECommerceApi",
        });
        //cria um recurso de integração para os produtos
        const productsFetchIntegration = new apigateway.LambdaIntegration(props.productsFunction);
        //cria um recurso para os produtos
        const productsResouce = api.root.addResource("products");
        //adiciona um metodo para o recurso
        productsResouce.addMethod("GET", productsFetchIntegration);
    }
}