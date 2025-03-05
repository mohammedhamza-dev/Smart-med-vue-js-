import { defineStore } from "pinia";
import axios from "axios";
import VueCookies from "vue-cookies";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    user: null,
    loading: true, // Controls the global loading state for user data
  }),
  actions: {
    async fetchUser() {
      this.loading = true;
      try {
        const token = VueCookies.get("jwt");
        if (!token) {
          this.loading = false;
          return;
        }

        const response = await axios.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        this.loading = false;
      }
    },

    logout() {
      VueCookies.remove("jwt");
      this.user = null;
      window.location.href = "/login";
    },
  },
});
