/**
 * 注意:
 * 此文件是自动生成的, 请勿手动修改, 请配置eslint, tslint, prettier等忽略此文件
 */

/* eslint-disable */

import axios from 'src/utils/request'

/** 登录以后返回token */
export async function loginUsingPOST(data: UmsAdminController.UmsAdminLoginParam): Promise < UmsAdminController.CommonResultOfLoginResponse > {
  return axios.post('/admin/login', data)
}

/** 用户注册 */
export async function registerUsingPOST(data: UmsAdminController.UmsAdminParam): Promise < UmsAdminController.CommonResultOfUmsAdmin > {
  return axios.post('/admin/register', data)
}

/** 获取用户详细信息 */
export async function getAdminDetailInfoUsingGET(
  params: {
    /** username */
    'username': string;
  }
): Promise < UmsAdminController.CommonResultOfUmsAdminDetailData > {
  return axios.get('/admin/user_detail_info/{username}', {
    params
  })
}

/** 获取用户信息 */
export async function getAdminInfoUsingGET(
  params: {
    /** user_id */
    'user_id': string;
  }
): Promise < UmsAdminController.CommonResultOfUmsAdmin > {
  return axios.get('/admin/user_info', {
    params
  })
}