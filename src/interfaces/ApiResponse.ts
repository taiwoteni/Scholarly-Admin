export interface ApiResponse<T = any>{
    message:string,
    data:T
}

export interface Delete{
    id: string,
    deleted: boolean
}