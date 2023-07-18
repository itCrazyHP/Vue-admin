import { mock } from "@/plugins/axios";

export interface Article{
    id:number,
    title:string,
    content:string
}
function articleApi() {
    return mock.request<Article[]>({
        url: 'article',
        method:'get',
    })
}
export default articleApi