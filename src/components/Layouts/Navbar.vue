<template>
  <div class="header pb-[50px] font-family flex justify-center min-w-full">
    <nav class="px-6 shadow lg:pt-1 lg:pb-4 pb-2 sm:mb-[-30px] bg-indigo-900 fixed top-0 left-0 right-0 z-50">
      <div class="max-w-[1800px] mx-auto flex items-center justify-between">
        
        <!-- Logo -->
        <router-link to="/">
          <img class="w-auto h-[30px] mt-2 sm:h-[40px]" src="/src/assets/smartlogo2.png" alt="Logo" />
        </router-link>

        <!-- Buttons (Conditionally Visible) -->
        <div class="flex gap-3 pt-3">
          <!-- Show Login if no user -->
          <router-link
            v-if="!userName"
            to="/login"
            class="bg-[#faaf40] hover:bg-[#FFC45A] active:bg-[#E09B38] flex items-center justify-center gap-x-1  sm:py-2 py-1 sm:px-5 px-3 text-white font-medium duration-150 rounded-lg text-sm sm:text-md"
          >
            <p>Login</p>
          </router-link>

      

          <!-- Show Logout if user exists -->
          <button
            v-if="userName"
            @click="logout"
            class="bg-[#faaf40] hover:bg-[#FFC45A] active:bg-[#E09B38] flex items-center justify-center gap-x-1  sm:py-2 py-1 sm:px-5 px-3 text-white font-medium duration-150 rounded-lg text-sm sm:text-md"
          >
            <p>Logout</p>
          </button>

          <router-link
            to="/register"
            class="bg-white hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center gap-x-1  sm:py-2 py-1 sm:px-4 px-3 text-[#262261] font-medium duration-150 rounded-lg text-sm sm:text-md"
          >
            <p>Register</p>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
import VueCookies from 'vue-cookies';
import axios from 'axios'; // Ensure axios is imported

export default {
  setup() {
    const userName = ref(null);
    const token = VueCookies.get("jwt"); // Change 'jwt_token' to your actual JWT cookie name

    const forgetJwt = () => {
      // Remove JWT cookie
      VueCookies.remove('jwt_token');
      console.log('JWT cookie removed');
    }

    const logout = () => {
      forgetJwt();
      userName.value = null;  // Clear the userName to trigger the Login button visibility
      VueCookies.remove('jwt');
      window.location.href = '/login'; 
    }

    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get("/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
  
          userName.value = response.data.name;
        } catch (error) {
          console.error("Error fetching user:", error);
          // Handle error (e.g., invalid token)
          userName.value = null;
        }
      }
    };

    // Fetch user when component is mounted
    fetchUser();

    return {
      userName,
      forgetJwt,
      logout
    };
  }
}
</script>
