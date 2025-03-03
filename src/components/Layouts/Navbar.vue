<template>
  <div class="header pb-[50px] font-family flex justify-center min-w-full">
    <nav class="px-6 shadow lg:pt-1 lg:pb-4 pb-2 sm:mb-[-30px] bg-indigo-900 fixed top-0 left-0 right-0 z-50">
      <div class="max-w-[1800px] mx-auto flex items-center justify-between">
        
        <!-- Logo -->
        <router-link to="/">
          <img class="w-auto h-[30px] mt-2 sm:h-[40px]" src="/src/assets/smartlogo2.png" alt="Logo" />
        </router-link>

        <!-- Buttons (Always Visible) -->
        <div class="flex gap-3 pt-3">
          <router-link
            to="/login"
            class="bg-[#faaf40] hover:bg-[#FFC45A] active:bg-[#E09B38] flex items-center justify-center gap-x-1  sm:py-2 py-1 sm:px-5 px-3 text-white font-medium duration-150 rounded-lg text-sm sm:text-md"
          >
            <p>Login</p>
          </router-link>
          
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
