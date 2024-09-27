#!/usr/bin/env node
//arquivo de entrada de execução do CDK
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ECommerceAwsStack } from   '../lib/e_commerce_aws-stack';
import { ProductsAppStack } from    '../lib/productsApp-stack';
import { ECommerceApiStack } from   '../lib/e_commerceApi-stacks';

//instancia a aplicação CDK
const app = new cdk.App();

//configurações do ambiente
const env: cdk.Environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
};

//tags para identificar os recursos
const tags = {
    cost: "ECommerce",
    team: "DevOps"
};

//cria os stacks
const productsAppStack = new ProductsAppStack(app, 'ProductsAppStack', {tags: tags, env: env});

//cria o stack da api
const eCommerceApiStack = new ECommerceApiStack(app, 'ECommerceApiStack', {
    //funções lambda que serão invocadas pelo api gateway
    productsAdminFunction: productsAppStack.productsAdminHandler,
    productsFunction: productsAppStack.productsFetHandler,
    //configurações do stack
    tags: tags, 
    env: env
});

//deixa explicito que o stack da api depende do stack de produtos
eCommerceApiStack.addDependency(productsAppStack);