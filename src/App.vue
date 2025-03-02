<template>
    <Toast />

  <div>
    <Navbar/>

    <router-view></router-view>
  </div>
</template>

<style>

</style>
<script>
import 'primeicons/primeicons.css';
import Navbar from './components/Layouts/Navbar.vue'; // Adjust the path if needed
import Toast from 'primevue/toast';

  export default {
  components: {
    Navbar,
    
  }
}
</script>