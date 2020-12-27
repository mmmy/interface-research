package com.example.swagger.controller;

import com.example.swagger.common.api.CommonResult;
import com.example.swagger.dto.LoginResponse;
import com.example.swagger.dto.TokenType;
import com.example.swagger.dto.UmsAdminLoginParam;
import com.example.swagger.dto.UmsAdminParam;
import com.example.swagger.mbg.model.UmsAdmin;
import io.swagger.annotations.*;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ApiModel
enum WeekDay {
    token, tokenHead
}

@Controller
@RequestMapping("/admin")
@Api(tags = "UmsAdminController", value = "后台用户管理")
public class UmsAdminController {

    @ApiOperation(value = "用户注册")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult<UmsAdmin> register(@Validated @RequestBody UmsAdminParam umsAdminParam) {
        UmsAdmin umsAdmin = new UmsAdmin();
        if (umsAdmin == null) {
            return CommonResult.failed();
        }
        return CommonResult.success(umsAdmin);
    }

    @ApiOperation(value = "获取用户信息")
    @RequestMapping(value = "/user_info", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult<UmsAdmin> getUserInfo(@RequestParam(name = "user_id") String userId) {
        UmsAdmin umsAdmin = new UmsAdmin();
        if (umsAdmin == null) {
            return CommonResult.failed();
        }
        return CommonResult.success(umsAdmin);
    }

    @ApiOperation(value = "登录以后返回token")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult<LoginResponse> login(@Validated @RequestBody UmsAdminLoginParam umsAdminLoginParam) {
        String token = "";//;adminService.login(umsAdminLoginParam.getUsername(), umsAdminLoginParam.getPassword());
        if (token == null) {
            return CommonResult.validateFailed("用户名或密码错误");
        }
        LoginResponse result = new LoginResponse();
        result.setToken(token);
        result.setTokenHead("todo: tokenHead");
        result.setTokenType(TokenType.type1);
        return CommonResult.success(result);
    }
}
