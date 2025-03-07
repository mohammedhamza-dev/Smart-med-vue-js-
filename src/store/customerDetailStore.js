import { defineStore } from 'pinia';
import axios from 'axios';
import { useUserStore } from './userStore';

export const useCustomerDetailStore = defineStore('customerDetail', {
  state: () => ({
    customer: null,
    customerId: null,
    getDataLoading: true
  }),
  
  actions: {
    setCustomerId(id) {
      this.customerId = id;
    },
    
    async fetchCustomer() {
      this.getDataLoading = true;
      try {
        const userStore = useUserStore();
        await userStore.fetchUser(); // Fetch user first
        
        const response = await axios.get(`/customer/${this.customerId}`);
        this.customer = response.data;
      } catch (error) {
        console.error("Error fetching customer:", error);
      } finally {
        this.getDataLoading = false;
      }
    }
  }
});