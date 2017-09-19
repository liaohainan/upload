import axios from 'axios'
import qs from 'qs'
let config_post = {
    // baseURL: '/api/',
    timeout: 10000,
    //`headers`选项是需要被发送的自定义请求头信息
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
    },
    // transformRequest: [function (data) {  
    //     //需要序列化数据，数据放到formdata
    //     return qs.stringify(data)
    // }]
}

//通用ajax
export const api_post = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *callback:事件回调
    */
    var option = {
        url: option.url || '',
        data: option.data || {},
        callback: option.callback || function () {}
    }
    return axios.post(option.url, option.data, config_post)
        .then(res => {
            // console.log(res.data)
            option.callback(res.data)
        })
        .catch(res => {
            console.log(res)
        })
}