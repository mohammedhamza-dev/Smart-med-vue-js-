// src/store/contractsStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { useUserStore } from './userStore';
import VueCookies from 'vue-cookies';

const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = API_URL;
const token = VueCookies.get("jwt"); 

export const useContractsStore = defineStore('contracts', {
  state: () => ({
    contracts: [],
    isLoading: false,
    getDataLoading: true,
    currentPage: 1,
    lastPage: 1,
    customerId: null,
    customerIdError: false,
    form: {
      customer_id: null,
      start_date: '',
      expire_date: '',
      payment: '',
      note: '',
      created_by: '',
    },
    deleteId: null,
  }),
  
  actions: {
    setCustomerId(id) {
      this.customerId = id;
      this.form.customer_id = id;
    },
    
    async fetchContracts(page = 1) {
      this.getDataLoading = true;
      this.customerIdError = false;
      
      try {
        const userStore = useUserStore();
        await userStore.fetchUser();
        
        if (userStore.user) {
          this.form.created_by = userStore.user.id;
        }
        
        const response = await axios.get(
          `/customers/${this.customerId}/contracts?page=${page}`
        );
        
        this.contracts = response.data.data;
        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;
      } catch (error) {
        console.error("Error fetching contracts:", error);
        this.customerIdError = true;
      } finally {
        this.getDataLoading = false;
      }
    },
    
    resetForm() {
      const userStore = useUserStore();
      this.form = {
        customer_id: this.customerId,
        start_date: '',
        expire_date: '',
        payment: '',
        note: '',
        created_by: userStore.user?.id,
      };
    },
    
    setFormData(contract = null) {
      if (contract) {
        this.form = { ...contract };
      } else {
        this.resetForm();
      }
    },
    
    async saveContract() {
      const toast = useToast();
      this.isLoading = true;
      
      try {
        const userStore = useUserStore();
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
          return;
        }
        
        if (this.form.id) {
          await axios.put(`/contracts/update/${this.form.id}`, this.form,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          toast.success("Contract updated successfully!");
        } else {
          await axios.post(`${API_URL}/contracts/store`, this.form, {
            headers: { Authorization: `Bearer ${token}` },
          });
          toast.success("Customer added successfully!");
        }
        
        await this.fetchContracts(this.currentPage);
        return true;
      } catch (error) {
        toast.error("Error!");
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    
    setDeleteId(id) {
      this.deleteId = id;
    },
    
    async deleteContract() {
      const toast = useToast();
      this.isLoading = true;
      
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
        
        // Update local state first for faster UI response
        this.contracts = this.contracts.filter(
          (contract) => contract.id !== this.deleteId
        );
        
        await axios.delete(`/contracts/delete/${this.deleteId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        
        // Refresh from API to ensure data consistency
        await this.fetchContracts(this.currentPage);
        
        toast.success("Contract deleted successfully!");
        return true;
      } catch (error) {
        toast.error("Error deleting contract!");
        return false;
      } finally {
        this.isLoading = false;
      }
    }
  }
});