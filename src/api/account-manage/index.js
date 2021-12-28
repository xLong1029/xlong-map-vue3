/*
 * 功能 : 封装数据交互api接口(mock.js请求)。
 * 用处 : 账户操作相关api
 * 作者 : 罗永梅（381612175@qq.com）
 * 日期 : 2021-12-27
 * 版本 : version 2.3
 */

import request from "utils/request.js";

export default {
    /**
     * 获取职位列表
     */
    GetJobList: () => {
        return request({
            url: `/api/list/job`,
            method: 'get'
        })
    },
    /**
    * 获取专业领域列表
    */
    GetProfessionList: () => {
        return request({
            url: `/api/list/profession`,
            method: 'get'
        })
    },
    /**
     * 获取所有账户列表
     *
     * @param {*} params 查询参数对象
     * @param {*} pageNo 当前页码
     * @param {*} pageSize 每页显示几条数据
     */
    GetAccList: (params, pageNo, pageSize) => {
        return request({
            url: `/api/account/list`,
            method: 'get',
            params: {
                params, pageNo, pageSize
            }
        })
    },
    /**
     * 新增账户
     *
     * @param {*} params 新增的参数对象
     */
    AddAccount: (params) => {

    },
    /**
     * 获取账户信息
     *
     * @param {*} id 查询的objectId
     */
    GetAccInfo: (id) => {

    },
    /**
     * 修改账户信息
     *
     * @param {*} params 新增的参数对象
     * @param {*} id 查询的objectId
     */
    EditAccount: (params, id) => {

    },
    /**
     * 删除账户
     *
     * @param {*} ids 需要删除的对象的objectId
     */
    DeleteAcc: (ids) => {

    },
    /**
     * 启用或禁用账户
     *
     * @param {*} params 修改的参数对象
     * @param {*} ids 需要操作的对象的objectId
     */
    EnableAcc: (params, ids) => {

    },
}