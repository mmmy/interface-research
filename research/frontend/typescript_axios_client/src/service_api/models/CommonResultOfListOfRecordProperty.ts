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
import {
    RecordProperty,
} from './';

export interface CommonResultOfListOfRecordProperty {
    /**
     * 状态码
     * @type {number}
     */
    code: number;
    /**
     * 数据, 注意一般只有code=200的情况下才有该数据
     * @type {Array<RecordProperty>}
     */
    data: Array<RecordProperty>;
    /**
     * 提示信息, 默认为空
     * @type {string}
     */
    message: string;
}
