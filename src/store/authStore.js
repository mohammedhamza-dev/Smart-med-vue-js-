import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import VueCookies from 'vue-cookies';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loginForm: { 
      email: "", 
      password: "" 
    },
    loginErrors: {},
    generalError: null,
    loading: false,
    dataLoading: false,
    
    registerForm: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    registerErrors: {},
    registerSuccess: null,
  }),
  
  actions: {
    async fetchUser() {
      this.dataLoading = true;
      const token = VueCookies.get("jwt");
      
      try {
        const response = await axios.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        this.dataLoading = false;
      }
    },
    
    async login() {
      const toast = useToast();
      this.loading = true;
      this.loginErrors = {};
      this.generalError = null;
      
      try {
        const response = await axios.post("/login", this.loginForm);
        
        VueCookies.set("jwt", response.data.token, "1d");
        
        toast.success("Login successful!", { timeout: 2000 });
        
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        
        return true;
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.loginErrors = error.response.data.errors || {};
          } else {
            this.generalError = error.response.data.message || "Login failed.";
          }
        } else {
          this.generalError = "An unexpected error occurred.";
        }
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async loginWithGoogle() {
      const toast = useToast();
      try {
        const response = await axios.get("/google");
        window.location.href = response.data.url; // Redirect user to Google login page
      } catch (error) {
        console.error("Google login failed", error);
        toast.error("Google login failed. Try again.");
      }
    },
    
    async register(router) {
      const toast = useToast();
      this.loading = true;
      
      try {
        this.registerErrors = {};
        this.registerSuccess = null;
        
        const response = await axios.post("/register", this.registerForm);
        this.registerSuccess = response.data.message;
        
        toast.success("Registration successful!", {
          timeout: 2000,
        });
        
        setTimeout(() => {
          router.push("/login");
        }, 2000);
        
        return true;
      } catch (error) {
        if (error.response && error.response.data.errors) {
          this.registerErrors = error.response.data.errors;
        }
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    clearLoginForm() {
      this.loginForm = { email: "", password: "" };
      this.loginErrors = {};
      this.generalError = null;
    },
    
    clearRegisterForm() {
      this.registerForm = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      };
      this.registerErrors = {};
      this.registerSuccess = null;
    }
  }
});