<template>
  <div class="min-h-screen flex pt-[40px] items-center justify-center bg-gray-50 px-6">
    <div
        class="max-w-4xl w-full h-full bg-white shadow-lg rounded-xl flex overflow-hidden"
      >
        <!-- Left Section (Form) -->
        <div class="w-full lg:w-1/2 p-8">
          <h2 class="text-2xl font-semibold text-gray-700 text-center">
            Create an Account
          </h2>
  
          <button
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
            <span
              class="bg-white px-2 absolute left-1/2 transform -translate-x-1/2 -top-3"
              >or</span
            >
          </div>
  
          <form @submit.prevent="register" class="space-y-4">
            <div class="pb-3">
              <input
                v-model="registerForm.name"
                class="input-field"
                type="text"
                placeholder="Full Name"
              />
              <span v-if="registerErrors.name">{{ registerErrors.name[0] }}</span>
            </div>
  
            <div class="pb-3">
              <input
                v-model="registerForm.email"
                class="input-field"
                type="email"
                placeholder="Email Address"
              />
              <span v-if="registerErrors.email">{{
                registerErrors.email[0]
              }}</span>
            </div>
            <div class="pb-3">
              <input
                v-model="registerForm.password"
                class="input-field"
                type="password"
                placeholder="Password"
              />
            </div>
  
            <div class="">
              <input
                v-model="registerForm.password_confirmation"
                class="input-field"
                type="password"
                placeholder="Confirm Password"
              />
  
              <span v-if="registerErrors.password">{{
                registerErrors.password[0]
              }}</span>
            </div>
  
            <!-- Register Button -->
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
              <p v-if="!loading">Register</p>
              <p v-else>Processing...</p>
            </button>
          </form>
        </div>
  
        <!-- Right Section (Image) -->
        <div
          class="flex-1 bg-indigo-900 m-3 rounded-xl text-center hidden lg:flex"
        >
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style="background-image: url('/src/assets/smartlogo2.png')"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import { useToast } from "vue-toastification";
  
  export default {
    setup() {
      const router = useRouter();
      const registerForm = ref({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
  
      const registerErrors = ref({});
      const registerSuccess = ref(null);
      const loading = ref(false);
      const toast = useToast();
  
      const register = async () => {
        loading.value = true; // Start loading
        try {
          registerErrors.value = {};
          registerSuccess.value = null;
          const response = await axios.post(
            "http://localhost:8000/api/register",
            registerForm.value
          );
          registerSuccess.value = response.data.message;
          toast.success("Registration successful!", {
            timeout: 2000,
          });
  
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } catch (error) {
          if (error.response && error.response.data.errors) {
            registerErrors.value = error.response.data.errors;
          }
        } finally {
          loading.value = false; // Stop loading
        }
      };
  
      return {
        registerForm,
        registerErrors,
        registerSuccess,
        loading,
        register,
      };
    },
  };
  </script>
  
  <style>
  .input-field {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    outline: none;
    font-size: 14px;
    background-color: #f9fafb;
    transition: border-color 0.3s;
  }
  .input-field:focus {
    border-color: #6366f1;
    background-color: #ffffff;
  }
  </style>
  