<template>
    <div class="header pb-[50px] font-family flex justify-center min-w-full">
      <nav class="px-6  shadow lg:pt-1 lg:pb-4 pb-2 sm:mb-[-30px] bg-indigo-900 fixed top-0 left-0 right-0 z-50">
        <div class="max-w-[1800px] mx-auto lg:items-center lg:justify-between lg:flex">
          <div class="flex items-center justify-between">
            <router-link to="/" class="">
              <img
                class="w-auto h-[30px] mt-2 sm:h-[40px]"
                src="/src/assets/smartlogo2.png"
                alt="Logo"
              />
            </router-link>
  
            <!-- Mobile menu button -->
            <div class="lg:hidden flex items-center gap-7 pt-2">
              <lang-swith />
  
              <button
                @click="toggleMenu"
                type="button"
                class="text-[#faaf40]"
                aria-label="toggle menu"
              >
                <svg
                  v-if="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          <!-- Navigation Links -->
          <div
            :class="[
              'absolute duration-[0.4s] inset-x-0 z-20 w-full px-6 mt- py-4 transition-all ease-in-out bg-[#262261] shadow-md lg:bg-transparent lg:shadow-none lg:mt-[14px] mt-3 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center',
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            ]"
          >
            <router-link
              to="/"
              class="block px-3 py-2 text-white text-md rounded-lg duration-[0.7s] hover:text-[#faaf40] lg:mx-2"
            >
              Home
            </router-link>
            <router-link
              to="/About-us"
              class="block px-3 py-2 text-white text-md rounded-lg duration-[0.7s] hover:text-[#faaf40] lg:mx-2"
            >
              About Us
            </router-link>
            <router-link
              to="/Customers"
              class="block px-3 py-2 text-white rounded-lg text-md duration-[0.7s] hover:text-[#faaf40] lg:mx-2"
            >
              Customers
            </router-link>
            <router-link
              to="/About-us"
              class="block px-3 py-2 text-white rounded-lg text-md duration-[0.7s] hover:text-[#faaf40] lg:mx-2"
            >
              Amanj
            </router-link>
  
            <router-link
              to="/login"
              class="lg:hidden bg-[#faaf40] hover:bg-[#FFC45A] active:bg-[#E09B38] flex items-center justify-center gap-x-1 pb-2.5 py-2 px-4 mt-4 lg:mt-0 text-white font-medium bg- duration-150 rounded-lg"
            >
              <p class="mb-[-5px] text-md">Login</p>
             
            </router-link>
            <router-link
              to="/register"
              class="lg:hidden bg-[#ffff] hover:bg-gray-200 active:bg-gray-300 active:bg-[#E09B38] flex items-center justify-center gap-x-1 pb-2.5 py-2 px-4 mt-4 lg:mt-0 text-[#262261] font-medium bg- duration-150 rounded-lg"
            >
              <p class="mb-[-5px] text-md">Register</p>
             
            </router-link>
          </div>
  
          <!-- Mobile Menu -->
          <div
            :class="[
              'absolute items-center gap-9 hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center',
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            ]"
          >
            <lang-swith />
  
            <div class="flex gap-3 lg:pt-3 ">
            <router-link
              to="/login"
              class=" bg-[#faaf40] hover:bg-[#FFC45A] active:bg-[#E09B38] flex items-center justify-center gap-x-1 pb-3.5 py-2 px-5 mt-7 lg:mt-0 text-white font-medium bg- duration-150 rounded-lg"
            >
              <p class="mb-[-5px] text-md">Login</p>
             
            </router-link>
            <router-link
              to="/register"
              class=" bg-[#ffff] hover:bg-gray-200 active:bg-gray-300 active:bg-[#E09B38] flex items-center justify-center gap-x-1 pb-2.5 py-2 px-4 mt-4 lg:mt-0 text-[#262261] font-medium bg- duration-150 rounded-lg"
            >
              <p class="mb-[-5px] text-md">Register</p>
             
            </router-link>
           </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
//   import LangSwith from "@/lang/lang-swith";
  
  export default {
    // components: {
    //   LangSwith,
    // },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  