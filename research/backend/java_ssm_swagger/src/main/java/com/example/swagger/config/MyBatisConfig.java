package com.example.swagger.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(value = "com.example.swagger.mbg.mapper")
public class MyBatisConfig {
}
