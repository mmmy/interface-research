package com.example.swagger.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
    private String token;
    private String tokenHead;
    private TokenType tokenType;
}
