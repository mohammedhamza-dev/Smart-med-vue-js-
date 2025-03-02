<template>
    <div>
      <h1>الفواتير الخاصة بالعميل</h1>
      <ul>
        <li v-for="invoice in invoices" :key="invoice.id">
          {{ invoice.invoice_date }} - {{ invoice.done ? 'مدفوعة' : 'غير مدفوعة' }}
          <button @click="deleteInvoice(invoice.id)">❌</button>
        </li>
      </ul>
  
      <h2>إضافة فاتورة جديدة</h2>
      <input v-model="newInvoice.invoice_date" type="date">
      <button @click="addInvoice">إضافة فاتورة</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  export default {
    data() {
      return {
        invoices: [],
        newInvoice: { invoice_date: '', done: false, created_by: 1 },
        customerId: useRoute().params.id
      };
    },
    methods: {
      fetchInvoices() {
        axios.get(`http://127.0.0.1:8000/api/invoices?customer_id=${this.customerId}`)
          .then(response => { this.invoices = response.data; });
      },
      addInvoice() {
        this.newInvoice.customer_id = this.customerId;
        axios.post('http://127.0.0.1:8000/api/invoices', this.newInvoice)
          .then(() => {
            this.fetchInvoices();
            this.newInvoice = { invoice_date: '', done: false, created_by: 1 };
          });
      },
      deleteInvoice(id) {
        axios.delete(`http://127.0.0.1:8000/api/invoices/${id}`)
          .then(() => this.fetchInvoices());
      }
    },
    mounted() {
      this.fetchInvoices();
    }
  };
  </script>
  