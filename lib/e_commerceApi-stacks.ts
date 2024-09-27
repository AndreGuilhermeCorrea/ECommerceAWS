import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cwlogs from "aws-cdk-lib/aws-logs";

//classes que representam o stack
export class ECommerceApiStack extends cdk.Stack {
    //construtor: recebe o escopo, o id e as propriedades do stack
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        //cria uma api gateway
        const api = new apigateway.RestApi(this, "ECommerceApi", {
            restApiName: "ECommerceApi",
        });
    }
}