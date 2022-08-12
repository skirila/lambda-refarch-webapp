// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "lmauo3snau56fs8j3285pdm4b",     // CognitoClientID
  "api_base_url": "https://conwqnn6ef.execute-api.us-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-amplifyteststack.auth.us-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1yekonycuuvkr.amplifyapp.com"                                      // AmplifyURL
};

export default config;
