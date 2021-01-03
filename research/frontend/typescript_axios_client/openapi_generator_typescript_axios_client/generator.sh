#npm install @openapitools/openapi-generator-cli -g
#npx @openapitools/openapi-generator-cli generate --global-property debugOperations -i ../../../swagger/admin_example.json -g typescript-fetch -o ../src/service -c typescript_axios_config.yaml
npx @openapitools/openapi-generator-cli generate -c typescript_axios_config.yaml
