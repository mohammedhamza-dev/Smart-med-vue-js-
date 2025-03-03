import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/Customers.vue';
import Contracts from '../views/Contracts.vue';
import Invoices from '../views/Invoices-details.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Customer_details from '../views/Customer-details.vue';
import InvoiceList from '../views/InvoiceList.vue';
import invoice_details from '../views/Invoices-details.vue';

const routes = [
    { path: '/', component: Customers },
    { path: '/contracts', component: Contracts },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/invoices/:customer_id', component: InvoiceList, props: true },
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
