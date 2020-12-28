package com.example.swagger.dao;

import com.example.swagger.dto.UmsAdminDetailData;
import org.apache.ibatis.annotations.Param;

/**
 * 自定义Dao
 */
public interface UmsAdminDao {
    /**
     * 查询admin用户详情
     */
    UmsAdminDetailData getAdminDetailData(@Param("username") String username);
}
