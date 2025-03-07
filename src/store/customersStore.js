import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { useUserStore } from './userStore';
import VueCookies from 'vue-cookies';

const API_URL = import.meta.env.VITE_API_URL;

export const useCustomersStore = defineStore('customers', {
  state: () => ({
    customers: [],
    pagination: {
      current_page: 1,
      per_page: 10,
      total: 0,
      last_page: 1,
    },
    isLoading: false,
    getDataLoading: true,
    deleteId: null,
    form: {
      id: null,
      name: "",
      start_date: "",
      free_trial: "",
      note: "",
      phone: "",
      address: "",
      created_by: null,
    },
    token: VueCookies.get("jwt"),
  }),
  
  actions: {
    getTokenFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const userToken = urlParams.get("user");

      if (userToken) {
        const [, tokenValue] = userToken.split("|"); // Extract the token part after '|'
        if (tokenValue) {
          VueCookies.set("jwt", tokenValue, "7d"); // Store JWT for 7 days
          this.token = tokenValue;

          // Remove the token from the URL (optional for security)
          window.history.replaceState({}, document.title, window.location.pathname);

          // Refresh the page to apply changes
          window.location.reload();
        }
      }
    },
    
    async fetchCustomers(page = 1) {
      this.getDataLoading = true;
      try {
        const userStore = useUserStore();
        await userStore.fetchUser(); // Fetch user first
        
        if (userStore.user) {
          this.form.created_by = userStore.user.id; // Set created_by
        }
        
        const response = await axios.get(
          `${API_URL}/customers?page=${page}&per_page=${this.pagination.per_page}`,
          { headers: { Authorization: `Bearer ${userStore.user?.token}` } }
        );

        this.customers = response.data.data;
        this.pagination = {
          current_page: response.data.current_page,
          per_page: response.data.per_page,
          total: response.data.total,
          last_page: response.data.last_page,
        };
      } catch (error) {
        console.error("Error fetching customers:", error);
        const toast = useToast();
        toast.error("Error fetching customers.");
      } finally {
        this.getDataLoading = false;
      }
    },
    
    setFormData(customer = null) {
      const userStore = useUserStore();
      
      this.form = customer
        ? { ...customer }
        : {
            id: null,
            name: "",
            phone: "",
            address: "",
            start_date: "",
            free_trial: "",
            note: "",
            created_by: userStore.user?.id,
          };
    },
    
    setDeleteId(id) {
      this.deleteId = id;
    },
    
    async saveCustomer() {
      this.isLoading = true;
      const toast = useToast();
      
      try {
        const userStore = useUserStore();
        
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
          return false;
        }
        
        if (this.form.id) {
          await axios.put(
            `${API_URL}/customers/${this.form.id}`,
            this.form,
            {
              headers: { Authorization: `Bearer ${userStore.user?.token}` },
            }
          );
          toast.success("Customer updated successfully!");
        } else {
          await axios.post(`${API_URL}/customers`, this.form, {
            headers: { Authorization: `Bearer ${userStore.user?.token}` },
          });
          toast.success("Customer added successfully!");
        }
        
        await this.fetchCustomers(this.pagination.current_page);
        return true;
      } catch (error) {
        console.error("Error saving customer:", error);
        toast.error("Error saving customer.");
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    
    async deleteCustomer() {
      this.isLoading = true;
      const toast = useToast();
      
      try {
        const userStore = useUserStore();
        
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
          return false;
        }
        
        await axios.delete(`${API_URL}/customers/${this.deleteId}`, {
          headers: { Authorization: `Bearer ${userStore.user?.token}` },
        });
        
        await this.fetchCustomers(this.pagination.current_page);
        toast.success("Customer deleted successfully!");
        return true;
      } catch (error) {
        console.error("Error deleting customer:", error);
        toast.error("Error deleting customer.");
        return false;
      } finally {
        this.isLoading = false;
      }
    }
  },
  
  getters: {
    currentPage: (state) => state.pagination.current_page,
    lastPage: (state) => state.pagination.last_page,
    perPage: (state) => state.pagination.per_page,
    total: (state) => state.pagination.total
  }
});