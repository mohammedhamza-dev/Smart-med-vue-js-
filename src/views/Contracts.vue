<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Contracts Management</h1>

    <!-- Create Contract Form -->
    <div class="mb-4 p-4 border rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-2">Add New Contract</h2>
      <form @submit.prevent="createContract">
        <div class="grid grid-cols-2 gap-4">
          <input v-model="newContract.customer_id" type="number" placeholder="Customer ID" required class="p-2 border rounded">
          <input v-model="newContract.start_date" type="date" required class="p-2 border rounded">
          <input v-model="newContract.expire_date" type="date" required class="p-2 border rounded">
          <input v-model="newContract.payment" type="number" placeholder="Payment" required class="p-2 border rounded">
          <input v-model="newContract.created_by" type="number" placeholder="Created by (User ID)" required class="p-2 border rounded">
          <textarea v-model="newContract.note" placeholder="Note" class="p-2 border rounded"></textarea>
        </div>
        <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Create Contract</button>
      </form>
    </div>

    <!-- Contracts Table -->
    <div v-if="contracts.length" class="overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border">ID</th>
            <th class="p-2 border">Customer</th>
            <th class="p-2 border">Start Date</th>
            <th class="p-2 border">Expire Date</th>
            <th class="p-2 border">Payment</th>
            <th class="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contract in contracts" :key="contract.id" class="border">
            <td class="p-2">{{ contract.id }}</td>
            <td class="p-2">{{ contract.customer?.name || 'Unknown' }}</td>
            <td class="p-2">{{ contract.start_date }}</td>
            <td class="p-2">{{ contract.expire_date }}</td>
            <td class="p-2">{{ contract.payment }}</td>
            <td class="p-2">
              <button @click="editContract(contract)" class="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button @click="deleteContract(contract.id)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Contract Modal -->
    <div v-if="editingContract" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-2">Edit Contract</h2>
        <form @submit.prevent="updateContract">
          <input v-model="editingContract.start_date" type="date" required class="p-2 border rounded w-full mb-2">
          <input v-model="editingContract.expire_date" type="date" required class="p-2 border rounded w-full mb-2">
          <input v-model="editingContract.payment" type="number" required class="p-2 border rounded w-full mb-2">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <button @click="editingContract = null" class="ml-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = API_URL; // Set API base URL

export default {
  setup() {
    const contracts = ref([]);
    const newContract = ref({
      customer_id: '',
      start_date: '',
      expire_date: '',
      payment: '',
      note: '',
      created_by: ''
    });
    const editingContract = ref(null);

    const fetchContracts = async () => {
      try {
        const response = await axios.get('/contracts');
        contracts.value = response.data;
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };
    const deleteCustomer = async (id) => {
      loading.value = true;
      try {
        await axios.delete(
          `http://localhost:8000/api/contracts/${deleteId.value}`
        );
        deleteModalOpen.value = false;
        fetchCustomers();
        toast.success("Customer deleted successfully!");
      } catch (error) {
        console.error("Error deleting customer:", error);
        toast.error("Error deleting customer!");
      } finally {
        loading.value = false;
      }
    };
    const createContract = async () => {
      try {
        const response = await axios.post('/contracts', newContract.value);
        contracts.value.push(response.data);
        newContract.value = { customer_id: '', start_date: '', expire_date: '', payment: '', note: '', created_by: '' };
      } catch (error) {
        console.error('Error creating contract:', error);
      }
    };

    const editContract = (contract) => {
      editingContract.value = { ...contract };
    };

    const updateContract = async () => {
      try {
        const response = await axios.put(`/contracts/${editingContract.value.id}`, editingContract.value);
        const index = contracts.value.findIndex(c => c.id === response.data.id);
        contracts.value[index] = response.data;
        editingContract.value = null;
      } catch (error) {
        console.error('Error updating contract:', error);
      }
    };

    const deleteContract = async (id) => {
      if (!confirm('Are you sure you want to delete this contract?')) return;
      try {
        await axios.delete(`/contracts/${id}`);
        contracts.value = contracts.value.filter(contract => contract.id !== id);
      } catch (error) {
        console.error('Error deleting contract:', error);
      }
    };

    onMounted(fetchContracts);

    return { contracts, newContract, editingContract, createContract, editContract, updateContract, deleteContract };
  }
};
</script>

