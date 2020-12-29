
var fs = require("fs");
var CodeGen = require("swagger-typescript-gen").CodeGen;

var file = "swagger.json";
// .d.ts文件的模板
var nameSpaceTemp = fs.readFileSync("./templates/d.mustache", "UTF-8");
// typescript类型模板
var typeTemp = fs.readFileSync("./templates/type.mustache", "UTF-8");
// index.ts模板
var indexTemp = fs.readFileSync("./templates/index.mustache", "UTF-8");
// swagger json
var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));
// 生成目标文件
CodeGen.generateServiceCode({
    // 目标文件的目录
    outputPath: "../src/service_gen",
    swagger: swagger,
    typeTemplate: typeTemp,
    nameSpaceTemplate: nameSpaceTemp,
    indexTemplate: indexTemp,
    // 启用debug之后, 将在控制台打印调试信息
    debug: false,
    // 默认开启自动格式化
    beautify: true,
    // 参考: https://github.com/beautify-web/js-beautify#options
    beautifyOptions: {
        indent_size: 2,
        indent_char: " ",
        brace_style: "collapse"
    }
});