// src/store/contractDetailStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useUserStore } from './userStore';

export const useContractDetailStore = defineStore('contractDetail', {
  state: () => ({
    contract: null,
    contractId: null,
    getDataLoading: true
  }),
  
  actions: {
    setContractId(id) {
      this.contractId = id;
    },
    
    async fetchContract() {
      this.getDataLoading = true;
      try {
        const userStore = useUserStore();
        await userStore.fetchUser(); // Fetch user first
        
        const response = await axios.get(`/contracts/${this.contractId}`);
        this.contract = response.data;
      } catch (error) {
        console.error("Error fetching contract:", error);
      } finally {
        this.getDataLoading = false;
      }
    }
  }
});