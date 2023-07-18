import { defineStore } from 'pinia'

export default defineStore('user',{
    state:()=>{
        return {
          info:{} as Record<string,any> | null
        }
    },
    persist:true,//是否持续化存储，可进行对象配置
    actions:{
        async getUserInfo(){
        },
    },
    
})

