<template>
        <div v-if="loading" >
       <Loading/>
        </div>

    <section  v-else
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <!-- Show loading spinner while user data is being fetched -->
    
  
        <!-- Main content to show when user data is fetched -->
        <div>
          <router-link
            to="/Customers"
            class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4"
          >
            <span class="w-[80%]" to="/Customers">
              <span class="font-inter text-center text-xs font-medium text-gray-900 ml-3">
                Show Customers
              </span>
            </span>
            <a
              href="javascript:;"
              class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-800"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </router-link>
  
          <h1
            class="max-w-2xl mx-auto text-center font-manrope font-bold text-[26px] text-gray-900 mb-5 md:text-5xl md:leading-[60px]"
          >
            Assignment Submission for <span class="text-indigo-800">Smart Med</span>
          </h1>
          <p class="max-w-lg mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Delivering innovative solutions to support Smart Med's vision.
          </p>
          <router-link
            to="register"
            class="w-full md:w-auto inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-800 shadow-xs hover:bg-indigo-700 active:bg-indigo-900 transition-all duration-500"
          >
            Create an account
            <svg
              class="ml-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import VueCookies from 'vue-cookies';
  import axios from 'axios'; // Ensure axios is imported
  import Loading from "../components/Loading.vue";
  
  export default {
    setup() {
      const userName = ref(null);
      const token = ref(VueCookies.get("jwt")); // Get JWT from cookies
      const loading = ref(false);
  
      // Function to extract token from URL
      const getTokenFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userToken = urlParams.get("user");

  if (userToken) {
    const [, tokenValue] = userToken.split("|"); // Extract the token part after '|'
    if (tokenValue) {
      VueCookies.set("jwt", tokenValue, "7d"); // Store JWT for 7 days
      token.value = tokenValue;

      // Remove the token from the URL (optional for security)
      window.history.replaceState({}, document.title, window.location.pathname);

      // Refresh the page to apply changes
      window.location.reload();
    }
  }
};

  
      const forgetJwt = () => {
        VueCookies.remove('jwt');
        console.log('JWT cookie removed');
      };
  
      const logout = () => {
        forgetJwt();
        window.location.href = '/login'; 
      };
  
      const fetchUser = async () => {
        loading.value = true;
        try {
          if (!token.value) return;
          const response = await axios.get("/user", {
            headers: { Authorization: `Bearer ${token.value}` },
          });
          userName.value = response.data.name;
        } catch (error) {
          console.error("Error fetching user:", error);
          userName.value = null;
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        getTokenFromUrl(); // Extract and store token on load
        fetchUser(); // Fetch user data if token exists
      });
  
      return {
        userName,
        forgetJwt,
        logout,
        loading,
      };
    },
    components: {
      Loading,
    },
  };
  </script>
  
  