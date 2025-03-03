<template>

  <div>
    <Navbar />

    <router-view>
      
    </router-view>
  </div>
</template>
<script>
import 'primeicons/primeicons.css';
import Navbar from './components/Layouts/Navbar.vue'; // Adjust the path if needed

export default {
  components: {
    Navbar,

  }
}
</script>