import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const counterStore = defineStore('countStore', ()=> {
    /*
    States
    */
   const count = ref(0);

   /*
   Actions
   */
  const increaseCount = () => {count.value++};
  const decreaseCount = () => {count.value--};
  
  /*
  Getters
  */
    const oddOrEven = computed(()=>{
        return count.value % 2 === 0 ? 'Even' : 'Odd';
    })

    return {
        count,
        increaseCount,
        decreaseCount,
        oddOrEven
    }
})