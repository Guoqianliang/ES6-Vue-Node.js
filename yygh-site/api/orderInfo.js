import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
  // 生成订单方法
  saveOrders(scheduleId, patientId) {
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: `post`
    })
  },
  // 订单的详情信息
  getOrders(orderId) {
    return request({
      url: `${api_name}/auth/getOrders/${orderId}`,
      method: `get`
    })
  },
}
