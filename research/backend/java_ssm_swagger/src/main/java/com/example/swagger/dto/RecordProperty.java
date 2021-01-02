package com.example.swagger.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

enum RecordPropertyType {
    type1, type2, type3
}

@Getter
@Setter
public class RecordProperty {
    @ApiModelProperty(required = true)
    private String propertyName;
    @ApiModelProperty(value = "默认true")
    private boolean isEnable;
    @ApiModelProperty(required = true)
    private double value;
    @ApiModelProperty(required = true, value = "类型, 枚举值: type1, type2, type3, 在实际业务场景中, 可以用String来代替")
    private RecordPropertyType type;
}
