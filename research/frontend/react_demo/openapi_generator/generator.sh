#npm install @openapitools/openapi-generator-cli -g
rm tmp -rf
npx @openapitools/openapi-generator-cli generate --global-property debugModels -i ../service_codegen/swagger.json -g typescript-node -o ./tmp/test/ -c typescript_axios_config.yaml
