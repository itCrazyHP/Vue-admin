import 'vue-router'
import { IMenu } from './menu'
declare module 'vue-router'{
    interface RouteMeta{
        auth?:boolean,
        guest?:boolean,
        menu?:IMenu
        permission?:string
    }
}