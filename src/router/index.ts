import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import layoutsRoutes from "./autoload/index";
import guard from "./guard"
import autoload from "./autoload/index";
import userStore from "@/store/userStore";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //数组里面展开运算符[...[{},{}]]会转换为[{},{}]
        {
            path:'/:any(.*)',
            name:'notFound',
            component:()=>import('@/views/errors/404.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
    },
})

export async function setup(app:App){
    const user = userStore()
    await user.getUserInfo()
    autoload(router)
    guard(router)
    app.use(router)
}
export default router