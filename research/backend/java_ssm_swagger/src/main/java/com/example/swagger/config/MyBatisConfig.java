package com.example.swagger.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@MapperScan(value = {"com.example.swagger.mbg.mapper", "com.example.swagger.dao"})
public class MyBatisConfig {
}
