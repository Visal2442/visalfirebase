<template>
  <div>
    <Header/>
    <!-- Use RouterView to display contents in route.  -->
    <RouterView/>
    <Footer/>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components:{
    Header,
    Footer
  },
  setup(){
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
      addName
    }
  },
  
}

</script>

<style>

</style>