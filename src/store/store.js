import { defineStore } from "pinia";
import { ref } from "vue";

export const counterStore = defineStore({
    id:'countStore',
    state:()=>({
        count:0
    }),
    actions:{
        increaseCount(){this.count++},
        decreaseCount(){this.count--},
    },
    getters:{
        oddOrEven:(state)=>{
            return state.count % 2 === 0 ? 'Even' : 'Odd';
        }
    }
})