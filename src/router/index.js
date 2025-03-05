import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/Customers.vue';
import Invoices from '../views/Invoices-details.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Customer_details from '../views/Customer-details.vue';
import InvoiceList from '../views/InvoiceList.vue';
import invoice_details from '../views/Invoices-details.vue';
import Home from '../views/home.vue';
import Contracts from '../views/contracts.vue';
import ContractDetails from '../views/contract-details.vue';

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
