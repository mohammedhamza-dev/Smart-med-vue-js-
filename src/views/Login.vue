<template>
  <div v-if="dataLoading">
    <Loading />
  </div>

  <div v-else class="min-h-screen flex pt-[20px] items-center justify-center bg-gray-50 px-6">
    <div class="max-w-4xl w-full h-full bg-white shadow-lg rounded-xl flex overflow-hidden">
      <!-- Left Section (Form) -->
      <div class="w-full lg:w-1/2 p-8">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">Login</h2>

        <!-- Google Login Button -->
        <button
          @click="loginWithGoogle"
          class="w-full mt-6 flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <svg
            class="w-5 h-5 mr-2"
            viewBox="0 0 533.5 544.3"
            fill="currentColor"
          >
            <path
              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
              fill="#4285f4"
            />
            <path
              d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
              fill="#34a853"
            />
            <path
              d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
              fill="#fbbc04"
            />
            <path
              d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
              fill="#ea4335"
            />
          </svg>
          Sign In with Google
        </button>

        <div class="my-6 text-gray-500 text-center relative border-t">
          <span class="bg-white px-2 absolute left-1/2 transform -translate-x-1/2 -top-3">or</span>
        </div>

        <!-- Email/Password Login Form -->
        <form @submit.prevent="login" class="space-y-4">
          <div class="pb-3">
            <input
              v-model="loginForm.email"
              class="input-field"
              type="email"
              placeholder="Email Address"
              required
            />
            <p v-if="loginErrors.email" class="text-red-600 mt-2 text-sm">{{ loginErrors.email }}</p>
          </div>

          <div class="pb-3">
            <input
              v-model="loginForm.password"
              class="input-field"
              type="password"
              placeholder="Password"
              required
            />
            <p v-if="loginErrors.password" class="text-red-600 mt-2 text-sm">{{ loginErrors.password }}</p>
          </div>

          <!-- General Error -->
          <span v-if="generalError" class="text-red-600 mt-2 text-sm">{{ generalError }}</span>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full flex items-center justify-center bg-indigo-800 text-white py-3 rounded-lg hover:bg-indigo-700 active:bg-indigo-900 transition"
            :disabled="loading"
          >
            <svg
              v-if="loading"
              class="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
            </svg>
            <p v-if="!loading">Login</p>
            <p v-else>Processing...</p>
          </button>
        </form>
<p class="text-center mt-5">        Don’t have an account? <router-link class="font-[600]"
  to="/Register"
  >
  Sign up

</router-link>
</p>      </div>
      <div
          class="flex-1 bg-indigo-900 m-3 rounded-xl text-center hidden lg:flex"
        >
          <div
            class="m-12 xl:m-16 logo-bg w-full bg-contain bg-center bg-no-repeat"
          ></div>
        </div> 
        
         </div>
  </div>
  
</template>
<script>
import { computed, onMounted } from "vue";
import Loading from "../components/Loading.vue";
import { useAuthStore } from "../store/authStore";


export default {
  setup() {
    const authStore = useAuthStore();
    
    authStore.clearLoginForm();
    
    onMounted(() => {
      authStore.fetchUser();
    });
    
    return {
      loginForm: computed(() => authStore.loginForm),
      loginErrors: computed(() => authStore.loginErrors),
      generalError: computed(() => authStore.generalError),
      loading: computed(() => authStore.loading),
      dataLoading: computed(() => authStore.dataLoading),
      
      login: authStore.login,
      loginWithGoogle: authStore.loginWithGoogle
    };
  },
  components: { Loading },
};
</script>
