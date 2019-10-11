# Lesson 1

 - Make sure you have a recent version of node (10 LTS is fine)
 - Install serverless framework
 - Create the project
    ```
    serverless
    ```
 - Add AWS credentials - follow the docs at https://serverless.com/framework/docs/providers/aws/guide/credentials/
 - Ensure to modify `serverless.yml` with a web api event so you can call your function
 - Run `serverless deploy` to see if you are up and running correctly