import { defineStore } from "pinia";
import axios from "axios";
import VueCookies from "vue-cookies";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    loading: true,
  }),
  actions: {
    async fetchUser() {
      try {
        const token = VueCookies.get("jwt"); // Get JWT token from cookies
        if (!token) {
          this.user = null;
          this.loading = false;
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        this.user = null;
      } finally {
        this.loading = false;
      }
    },
  },
});
