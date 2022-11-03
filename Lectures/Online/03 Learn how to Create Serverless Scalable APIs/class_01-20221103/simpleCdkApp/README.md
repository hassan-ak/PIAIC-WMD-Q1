# Simple CDK App

## Steps

- Downlaod and Install [NodeJS](https://nodejs.org/en/download/)
- Create a AWS [account](https://portal.aws.amazon.com/billing/signup)
- [Download](https://awscli.amazonaws.com/AWSCLIV2.msi) and [install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) aws cli
  - Confirm cli installation using `aws --version`
- Install AWS cdk using `npm i -g aws-cdk`
  - Confirm cdk installation using `cdk --version`
- Create IAM user
  - Navigate to AWS console and IAM section and create an new user
- configure aws using `aws configure`
- create a simple cdk app using `cdk init app --language=typescript`

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
