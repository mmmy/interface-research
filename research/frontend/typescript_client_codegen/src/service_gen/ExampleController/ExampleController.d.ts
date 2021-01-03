/**
 * 注意:
 * 此文件是自动生成的, 请勿手动修改, 请配置eslint, tslint, prettier等忽略此文件
 */

/* eslint-disable */

declare namespace ExampleController {

  export type CommonResultOfstring = {
    /** 状态码 */
    'code': number
    /** 数据, 注意一般只有code=200的情况下才有该数据 */
    'data': string
    /** 提示信息, 默认为空 */
    'message': string
  }

  export type CommonResultOfExampleObject = {
    /** 状态码 */
    'code': number
    /** 数据, 注意一般只有code=200的情况下才有该数据 */
    'data': ExampleObject
    /** 提示信息, 默认为空 */
    'message': string
  }

  export type ExampleObject = {

    'departmentId' ? : string

    'id': string

    'name': string

    'recordProperties' ? : Array < RecordProperty >

      'type': string
  }

  export type CommonResultOfListOfRecordProperty = {
    /** 状态码 */
    'code': number
    /** 数据, 注意一般只有code=200的情况下才有该数据 */
    'data': Array < RecordProperty >
      /** 提示信息, 默认为空 */
      'message': string
  }

  export type RecordProperty = {

    'enable' ? : boolean

    'propertyName': string
    /** 类型, 枚举值: type1, type2, type3, 在实际业务场景中, 可以用String来代替 */
    'type': "type1" | "type2" | "type3"

    'value': number
  }

  export type AddSomeRecordParam = {
    /** 属性分类 */
    'category': number
    /** record id */
    'id': string
    /** 属性列表 */
    'recordProperties': Array < RecordProperty >
  }

  export type CommonResultOfListOfstring = {
    /** 状态码 */
    'code': number
    /** 数据, 注意一般只有code=200的情况下才有该数据 */
    'data': Array < string >
      /** 提示信息, 默认为空 */
      'message': string
  }

}