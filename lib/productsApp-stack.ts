import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

//classe que representa o stack
export class ProductsAppStack extends cdk.Stack {
   //propriedade que armazena a função lambda
   readonly productsFetHandler: lambdaNodejs.NodejsFunction;
    //propriedade que armazena a tabela
   readonly productsTable: dynamodb.Table;
    //construtor: recebe o escopo, o id e as propriedades do stack
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        //cria uma tabela no dynamodb
        this.productsTable = new dynamodb.Table(this, "ProductsTable", {
            //configurações da tabela
            tableName: "Produtos",
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            partitionKey: {
                name: "id",
                type: dynamodb.AttributeType.STRING,
            },
            //configurações de capacidade
            billingMode: dynamodb.BillingMode.PROVISIONED,
            readCapacity: 1,
            writeCapacity: 1
        });

        //cria uma função lambda e a atribui à propriedade de classe
        this.productsFetHandler = new lambdaNodejs.NodejsFunction(this, "ProductsFunction", {
            runtime: lambda.Runtime.NODEJS_20_X,
            functionName: "ProductsFunction",
            entry: "lambda/products/ProductsFunction.ts",
            handler: "handler",
            //configurações do ambiente
            memorySize: 512,
            bundling: {
                //configurações do pacote
                minify: true,
                sourceMap: false,
            },
            timeout: cdk.Duration.seconds(5),
        });
    }
}
