package com.example.swagger.controller;

import com.example.swagger.common.api.CommonResult;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/example")
@Api(tags = "ExampleController", value = "不同类型接口示例")
public class ExampleController {
    @ApiOperation(value = "get 无参数, 返回string")
    @RequestMapping(value = "/get_name", method = RequestMethod.GET)
    @ResponseBody
    CommonResult<String> getDataString() {
        return CommonResult.success("string");
    }
}
