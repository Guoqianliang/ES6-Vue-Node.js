import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {

    // 查询支付状态的
    queryPayStatus(orderId) {
        return request({
            url: `${api_name}/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },

    // 生成微信支付的二维码
    createNative(orderId) {
        return request({
            url: `/api/order/weixin/createNative/${orderId}`,
            method: `get`,
        })
    },
    getLoginParam() {
        return request({
            url: `${api_name}/getLoginParam`,
            method: `get`,
        })
    }
}
