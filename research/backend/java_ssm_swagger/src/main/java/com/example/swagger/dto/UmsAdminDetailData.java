package com.example.swagger.dto;

import com.example.swagger.mbg.model.UmsAdmin;
import com.example.swagger.mbg.model.UmsAdminLoginLog;
import com.example.swagger.mbg.model.UmsRole;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * 后台用户详情
 * 增加登录记录和权限信息
 */
public class UmsAdminDetailData extends UmsAdmin {
    @Getter
    @Setter
    @ApiModelProperty("登录历史记录列表")
    private List<UmsAdminLoginLog> loginLogList;

    @Getter
    @Setter
    @ApiModelProperty("角色列表")
    private List<UmsRole> roleList;
}
