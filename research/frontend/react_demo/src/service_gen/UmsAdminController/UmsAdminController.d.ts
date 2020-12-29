/**
 * 注意:
 * 此文件是自动生成的, 请勿手动修改, 请配置eslint, tslint, prettier等忽略此文件
 */

/* eslint-disable */

declare namespace UmsAdminController {

  export type UmsAdminLoginParam = {
    /** 密码 */
    'password': string
    /** 用户名 */
    'username': string
  }

  export type CommonResultOfLoginResponse = {

    'code' ? : number

    'data' ? : LoginResponse

    'message' ? : string
  }

  export type LoginResponse = {

    'token' ? : string

    'tokenHead' ? : string

    'tokenType' ? : "type1" | "type2"
  }

  export type UmsAdminParam = {
    /** 邮箱 */
    'email' ? : string
    /** 用户头像 */
    'icon' ? : string
    /** 用户昵称 */
    'nickName' ? : string
    /** 备注 */
    'note' ? : string
    /** 密码 */
    'password': string
    /** 用户名 */
    'username': string
  }

  export type CommonResultOfUmsAdmin = {

    'code' ? : number

    'data' ? : UmsAdmin

    'message' ? : string
  }

  export type UmsAdmin = {
    /** 创建时间 */
    'createTime' ? : string
    /** 邮箱 */
    'email' ? : string
    /** 头像 */
    'icon' ? : string

    'id' ? : number
    /** 最后登录时间 */
    'loginTime' ? : string
    /** 昵称 */
    'nickName' ? : string
    /** 备注信息 */
    'note' ? : string

    'password' ? : string
    /** 帐号启用状态：0->禁用；1->启用 */
    'status' ? : number

    'username' ? : string
  }

  export type CommonResultOfUmsAdminDetailData = {

    'code' ? : number

    'data' ? : UmsAdminDetailData

    'message' ? : string
  }

  export type UmsAdminDetailData = {
    /** 创建时间 */
    'createTime' ? : string
    /** 邮箱 */
    'email' ? : string
    /** 头像 */
    'icon' ? : string

    'id' ? : number
    /** 登录历史记录列表 */
    'loginLogList' ? : Array < UmsAdminLoginLog >
      /** 最后登录时间 */
      'loginTime' ? : string
    /** 昵称 */
    'nickName' ? : string
    /** 备注信息 */
    'note' ? : string

    'password' ? : string
    /** 角色列表 */
    'roleList' ? : Array < UmsRole >
      /** 帐号启用状态：0->禁用；1->启用 */
      'status' ? : number

    'username' ? : string
  }

}