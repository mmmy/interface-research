#npm install @openapitools/openapi-generator-cli -g
npx @openapitools/openapi-generator-cli generate --global-property debugModels -i ../../../swagger/admin.json -g typescript-fetch -o ../src/service -c typescript_axios_config.yaml
