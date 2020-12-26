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
                .title("后台系统接口")
                .description("后台相关接口文档")
                .contactName("yangqi")
                .version("1.0")
                .enableSecurity(true)
                .build();
    }
}
