package com.example.swagger.controller;

import com.example.swagger.common.api.CommonResult;
import com.example.swagger.dto.AddSomeRecordParam;
import com.example.swagger.dto.ExampleObject;
import com.example.swagger.dto.RecordProperty;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

    @ApiOperation(value = "get 含有请求参数, 返回对象")
    @RequestMapping(value = "/get_object_by_params", method = RequestMethod.GET)
    @ResponseBody
    CommonResult<ExampleObject> getObjectByParams(@RequestParam(name = "name") String name, @RequestParam(name = "department_id") String departmentId) {
        ExampleObject exampleObject = new ExampleObject();
        exampleObject.setId("1");
        exampleObject.setName("name");
        exampleObject.setDepartmentId("2");
        return CommonResult.success(exampleObject);
    }

    @ApiOperation(value = "get, 参数in path, 返回数组")
    @RequestMapping(value = {"/get_properties/{id}/{category}"}, method = RequestMethod.GET)
    @ResponseBody
    CommonResult<List<RecordProperty>> getPropertiesById(@PathVariable String id, @ApiParam(required = true, value = "类型", example = "3") @PathVariable Integer category) {
        List<RecordProperty> list = new ArrayList<>();
        return CommonResult.success(list);
    }

    @ApiOperation(value = "put, 返回数组")
    @RequestMapping(value = "/put_return_string_list", method = RequestMethod.PUT)
    @ResponseBody
    CommonResult<List<String>> addSomePropertiesToRecord(@RequestBody AddSomeRecordParam addSomeRecordParam) {
        List<String> result = new ArrayList<>();
        return CommonResult.success(result);
    }
}
