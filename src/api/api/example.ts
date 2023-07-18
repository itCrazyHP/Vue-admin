import { http } from "@/plugins/axios";

export interface Example{
    id:number,
    title:string,
    content:string
}
function exampleApi() {
    return http.request<Example[]>({
        url: 'example',
        method:'get',
    })
}
export default exampleApi