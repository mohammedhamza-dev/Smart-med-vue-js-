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
import { useUserStore } from './store/userStore';
import { ref, onMounted, watch } from "vue";

onMounted(() => {
  useUserStore.fetchUser();
});
export default {
  components: {
    Navbar,

  }
  
}
</script>