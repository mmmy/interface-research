package com.example.swagger.service;

import com.example.swagger.mbg.model.UmsAdmin;

/**
 * 后台管理员Service
 */
public interface UmsAdminService {
    UmsAdmin getAdminByUsername(String username);
}
