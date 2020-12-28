package com.example.swagger.service.impl;

import com.example.swagger.dao.UmsAdminDao;
import com.example.swagger.dto.UmsAdminDetailData;
import com.example.swagger.mbg.model.UmsAdmin;
import com.example.swagger.service.UmsAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 后台用户管理实现类
 */
@Service
public class UmsAdminServiceImpl implements UmsAdminService {
    @Autowired
    private UmsAdminDao umsAdminDao;

    @Override
    public UmsAdmin getAdminByUsername(String username) {
        return null;
    }

    @Override
    public UmsAdminDetailData getAdminDetailData(String username) {
        return umsAdminDao.getAdminDetailData(username);
    }
}
