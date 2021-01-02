package com.example.swagger.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ExampleObject {
    @ApiModelProperty(required = true)
    private String id;
    @ApiModelProperty(required = true)
    private String name;
    private String departmentId;
    @ApiModelProperty(required = true)
    private String type;
    @ApiModelProperty(allowEmptyValue = true)
    private List<RecordProperty> recordProperties;
}
