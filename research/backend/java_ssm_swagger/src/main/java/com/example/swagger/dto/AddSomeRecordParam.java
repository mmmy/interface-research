package com.example.swagger.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AddSomeRecordParam {
    @ApiModelProperty(required = true, value = "record id")
    private String id;
    @ApiModelProperty(required = true, value = "属性分类")
    private int category;
    @ApiModelProperty(required = true, value = "属性列表")
    private List<RecordProperty> recordProperties;
}
