/* tslint:disable */
/* eslint-disable */
/**
 * RESTFul接口示例
 * 此示例用于(interface_research)研究用, 包含不同种类的接口形态, 研究使用swagger规范生成客户端可执行代码
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * 请勿手动修改此文件.
 */

import axios from '../request'

import {
    AddSomeRecordParam,
    CommonResultOfExampleObject,
    CommonResultOfListOfRecordProperty,
    CommonResultOfListOfstring,
    CommonResultOfstring,
} from '../models';

export interface GetObjectByParamsUsingGETRequest {
  departmentId: string;
  name: string;
}


/**
 * put, 返回数组
 */
export async function addSomePropertiesToRecordUsingPUT(
  bodyData: AddSomeRecordParam
): Promise<CommonResultOfListOfstring> {
  return axios({
    url: `/example/put_return_string_list`,
    method: 'PUT',
    data: bodyData,
  })
}

/**
 * get 无参数, 返回string
 */
export async function getDataStringUsingGET(
): Promise<CommonResultOfstring> {
  return axios({
    url: `/example/get_name`,
    method: 'GET',
  })
}

/**
 * get 含有请求参数, 返回对象
 */
export async function getObjectByParamsUsingGET(
  params: GetObjectByParamsUsingGETRequest
): Promise<CommonResultOfExampleObject> {
  return axios({
    url: `/example/get_object_by_params`,
    method: 'GET',
    params,
  })
}

/**
 * get, 参数in path, 返回数组
 */
export async function getPropertiesByIdUsingGET(
  /** 类型 */
  category: number,
  /** id */
  id: string
): Promise<CommonResultOfListOfRecordProperty> {
  return axios({
    url: `/example/get_properties/{id}/{category}`.replace(`{${"category"}}`, encodeURIComponent(String(category))).replace(`{${"id"}}`, encodeURIComponent(String(id))),
    method: 'GET',
  })
}

