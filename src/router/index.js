import { createRouter, createWebHistory } from 'vue-router';

import Customer_details from '../views/Customers/Customer-details.vue';
import invoice_details from '../views/Invoices/Invoices-details.vue';
import Contracts from '../views/Contracts/contracts.vue';
import ContractDetails from '../views/Contracts/contract-details.vue';
import Customers from '../views/Customers/Customers.vue';
import InvoiceList from '../views/Invoices/InvoiceList.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';

const routes = [
    { path: '/Customers', component: Customers },
    { path: '/Contracts/:customer_id', component: Contracts },
    { path: '/contracts-details/:contract_id', component: ContractDetails },

    { path: '/', component: Customers },

    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/invoices/:customer_id', component: InvoiceList, props: true ,},
    { path: '/invoices-details/:invoice_id', component: invoice_details, props: true },
    { 
        path: '/customer-details/:customer_id',
        name: 'CustomerDetails',
        component: Customer_details,
        props: true 
    },
    // ✅ Catch-all route to prevent warnings
    { path: '/:pathMatch(.*)*', redirect: '/' }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
