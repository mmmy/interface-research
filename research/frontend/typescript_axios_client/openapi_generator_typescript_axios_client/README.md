# 说明
根据swagger2.0规范生成client service, 技术栈使用typescript + axios;
适用于: 适用于使用typescript的nodejs或者前端项目;

# 如何在项目中使用
使用前提:
1.初始化项目生成package.json
2.初始化tsconfig.json
步骤:
1.复制此文件夹到项目根目录
2.根据实际情况修改配置 typescript_axios_config.yaml
3.安装依赖 openapi-generator-cli generate, axios
4.在package.json中添加脚本, 比如:
```json
{
  "scripts": {
    "generate-api": "cd openapi_generator_typescript_axios_client && ../node_modules/.bin/openapi-generator-cli generate -c typescript_axios_config.yaml"
  }
}
```
5.调试,修改参数以及模板

# 调试方法
```shell script
npm run generate-api
或
sh generator.sh
```
> 具体细节原理请查看generator.sh

