import request from "./request"

export const getDetail = (params):Promise<any>=>{
    return request.get('/url', params)
}