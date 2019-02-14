import axios from 'axios'
import { Message, Loading } from 'element-ui';
import router from './router'

// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://localhost:5000/'; //这是调用数据接口
let loading        //定义loading变量

function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '酥肉正在拼命赶来...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}

// 请求拦截
axios.interceptors.request.use(config => {
    // 加载
    startLoading()
    // if (localStorage.eleToken)
    //     config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    endLoading()
    return response
}, error => {
    // 错误提醒
    endLoading()
    Message.error({
        message: '加载失败'
    })

    // const { status } = error.response
    // if (status == 401) {
    //     Message.error('token值无效，请重新登录')
    //     // 清除token
    //     localStorage.removeItem('eleToken')

    //     // 页面跳转
    //     router.push('/login')
    // }

    return Promise.reject(error)
})

export default axios