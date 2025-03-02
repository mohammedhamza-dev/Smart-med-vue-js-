import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/Customers.vue';
import Contracts from '../views/Contracts.vue';
import Invoices from '../views/Invoices.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Customer_details from '../views/Customer-details.vue';

const routes = [
    { path: '/', component: Customers },
    { path: '/contracts', component: Contracts },
    { path: '/invoices', component: Invoices },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/Customer-details/:customer_id', // Dynamic route with customer_id
        name: 'CustomerDetails',
        component: Customer_details,
        props: true // Pass the route param as a prop to the component
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
