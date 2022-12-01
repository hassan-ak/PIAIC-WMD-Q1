# Class 03 - 2022/11/17

## Class Notes

### Presentation

- Create you first project with CDK
  - Prerequisites:
    - Nodejs
    - AWS Account
    - AWS-CLI 2.0
    - CDK CLI 2.0 => npm i -g aws-cdk
  - Creating project:
    - aws configure
    - Run this command in an empty directory => cdk init app --language=typescript
    - cdk bootstrap aws://ACCOUNT_NUMBER/REGION
    - yarn add @aws-cdk/aws-appsync-alpha
    - yarn add -D @types/aws-lambda aws-lambda
- CDK Useful commands
  - cdk init app --language=typescript
  - cdk bootstrap
  - cdk deploy
  - cdk destroy
  - cdk diff
  - cdk synth
  - cdk ls
- GRAPHQL
  - Query Language for APIs.
  - Provides a type system.
  - Have a single entry point.
  - Clients have access to the exact data they need.
  - No under fetching and over fetching.
  - Client Driven

### Schemas and Types

- Type system
- Type language
- Object types and fields
- Arguments
- The Query and Mutation types
- Scalar types
  - Int
  - Float
  - Boolean
  - String
  - ID
- Enumeration types
- Lists and Non-Null
- Interfaces
- Union types
- Input types
