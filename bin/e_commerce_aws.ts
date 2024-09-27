#!/usr/bin/env node
//arquivo de entrada de execução do CDK
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ECommerceAwsStack } from '../lib/e_commerce_aws-stack';

const app = new cdk.App();
new ECommerceAwsStack(app, 'ECommerceAwsStack', {
});