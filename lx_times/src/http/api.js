import service from './service'
import request_url from './request'

export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post'
    })
}

export function login(arg){
    return service({
        url:request_url.login,
        data:arg,
        method:'post'
    })
}

export function data(arg){
    return service({
        url:request_url.datas,
        data:arg,
        method:'get'
    })

  
}

export function password(arg){
    return service({
        url:request_url.password,
        data:arg,
        method:'post'
    })
}

export function recommend(arg){
    return service({
        url:request_url.recommend,
        data:arg,
        method:'get'
    })
}

export function teacher(arg){
    return service({
        url:request_url.teacher,
        data:arg,
        method:'get'
    })
}

// export function teachers(arg){
//     return service({
//         url:request_url.teachers,
//         data:arg,
//         method:'get'
//     })
// }

export function ri(arg){
    return service({
        url:request_url.recommend,
        data:arg,
        method:'get'
    })
}