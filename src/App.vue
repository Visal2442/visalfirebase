<template>
  <div>
    <Header/>
    
    <Footer v-if="route.name !== 'UserDetail'" ></Footer>
  </div>
    <RouterView/>    <!-- Use RouterView to display contents in route.  -->
</template>

<script>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from 'vue-router';

export default {
  components:{
    Header,
    Footer
  },
  setup(){
    const route = useRoute();
    const greeting = ref("hello")
    const name = ref("");

    // Change greeting ---
    let changeGreeting=()=>{
      greeting.value = "hi";
    };

    // Add name -----
    let addName =()=>{
      alert(name.value)
    }
  

    // Return data -----
    return{
      greeting,
      name,
      changeGreeting,
      addName,
      route
    }
  },
  
}

</script>

<style>

</style>