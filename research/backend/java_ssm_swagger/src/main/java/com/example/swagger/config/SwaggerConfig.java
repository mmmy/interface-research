package com.example.swagger.config;

import com.example.swagger.domain.SwaggerProperties;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Swagger API文档相关配置
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig extends BaseSwaggerConfig {

    @Override
    public SwaggerProperties swaggerProperties() {
        return SwaggerProperties.builder()
                .apiBasePackage("com.example.swagger.controller")
                .title("RESTFul接口示例")
                .description("此示例用于(interface_research)研究用, 包含不同种类的接口形态, 研究使用swagger规范生成客户端可执行代码")
                .contactName("yangqi")
                .version("1.0")
                .enableSecurity(true)
                .build();
    }
}
