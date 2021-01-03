/**
 * 注意:
 * 此文件是自动生成的, 请勿手动修改, 请配置eslint, tslint, prettier等忽略此文件
 */

/* eslint-disable */

import axios from 'src/utils/request'

/** get 无参数, 返回string */
export async function getDataStringUsingGET(): Promise < ExampleController.CommonResultOfstring > {
  return axios.get('/example/get_name')
}

/** get 含有请求参数, 返回对象 */
export async function getObjectByParamsUsingGET(
  params: {
    /** department_id */
    'department_id': string;
    /** name */
    'name': string;
  }
): Promise < ExampleController.CommonResultOfExampleObject > {
  return axios.get('/example/get_object_by_params', {
    params
  })
}

/** get, 参数in path, 返回数组 */
export async function getPropertiesByIdUsingGET(
  params: {
    /** 类型 */
    'category': number;
    /** id */
    'id': string;
  }
): Promise < ExampleController.CommonResultOfListOfRecordProperty > {
  return axios.get('/example/get_properties/{id}/{category}', {
    params
  })
}

/** put, 返回数组 */
export async function addSomePropertiesToRecordUsingPUT(data: ExampleController.AddSomeRecordParam): Promise < ExampleController.CommonResultOfListOfstring > {
  return axios.put('/example/put_return_string_list', data)
}