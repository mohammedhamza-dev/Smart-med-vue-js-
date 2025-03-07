<template>

  <Loading v-if="getDataLoading"/>
                                                <section  v-if="customer"  class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div class="w-full flex-col justify-start items-start lg:gap-5 gap-5 inline-flex">
              <h2 class="w-full bg-indigo-900 text-white rounded-xl p-4 md:text-3xl text-2xl font-bold font-manrope leading-normal   border-gray-200">
                  
                  {{ customer?.name }}</h2>
                  <div class="w-full bg-gray-100 p-8 rounded-lg flex-col justify-start items-start gap-9 flex">
             
                    <div class="w-full justify-start items-start gap-2.5 inline-flex">
                        <ol class="w-full overflow-hidden flex flex-col gap-1.5">
                            <li
                                class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-600 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                <a 
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M8.92958 11.9106C8.92958 11.9106 8.93233 11.9093 8.93699 11.9086C8.93177 11.9106 8.92958 11.9106 8.92958 11.9106Z"
                                            fill="#4F46E5" />
                                        <path
                                            d="M8.95662 11.9086C8.96128 11.9093 8.96403 11.9106 8.96403 11.9106C8.96403 11.9106 8.96184 11.9106 8.95662 11.9086Z"
                                            fill="#4F46E5" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.94001 0.199707H11.0597C12.8945 0.19969 14.353 0.199676 15.4955 0.353289C16.6735 0.511662 17.6348 0.846394 18.394 1.6056C19.1532 2.3648 19.4879 3.32606 19.6463 4.50402C19.7999 5.64658 19.7999 7.10502 19.7999 8.93985V11.0596C19.7999 12.8944 19.7999 14.3528 19.6463 15.4954C19.4879 16.6734 19.1532 17.6346 18.394 18.3938C17.6348 19.153 16.6735 19.4878 15.4955 19.6461C14.353 19.7997 12.8945 19.7997 11.0597 19.7997H8.93999C7.10516 19.7997 5.64672 19.7997 4.50417 19.6461C3.3262 19.4878 2.36494 19.153 1.60574 18.3938C0.846539 17.6346 0.511807 16.6734 0.353434 15.4954C0.199821 14.3528 0.199835 12.8944 0.199852 11.0596V8.93986C0.199835 7.10503 0.199821 5.64658 0.353434 4.50402C0.511807 3.32606 0.846539 2.3648 1.60574 1.6056C2.36494 0.846394 3.3262 0.511662 4.50417 0.353289C5.64672 0.199676 7.10518 0.19969 8.94001 0.199707ZM15.236 7.96437C15.5484 7.65195 15.5484 7.14542 15.236 6.833C14.9236 6.52058 14.4171 6.52058 14.1046 6.833L9.79534 11.1423C9.44601 11.4916 9.23972 11.6955 9.07398 11.822C9.00748 11.8727 8.96734 11.8952 8.94681 11.9045C8.92628 11.8952 8.88613 11.8727 8.81964 11.822C8.65389 11.6955 8.44761 11.4916 8.09828 11.1423L6.56559 9.60962C6.25317 9.2972 5.74664 9.2972 5.43422 9.60962C5.1218 9.92204 5.1218 10.4286 5.43422 10.741L7.00002 12.3068C7.3047 12.6116 7.58742 12.8944 7.84911 13.094C8.13871 13.315 8.49446 13.508 8.94681 13.508C9.39916 13.508 9.7549 13.315 10.0445 13.094C10.3062 12.8944 10.5889 12.6116 10.8936 12.3068L15.236 7.96437Z"
                                            fill="#4F46E5" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Create bY</h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                                          {{ customer?.user.name }}</h6>
                                    </ul>
                                </div>
                               
                            </li>

                            <li
                                class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                <a 
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                            stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Phone</h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                                          {{ customer?.phone }}</h6>
                                    </ul>
                                </div>
                                
                            </li>

                            <li
                                class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                <a 
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                            stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Address</h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">    {{ customer?.address }}</h6>
                                    </ul>
                                </div>
                                
                            </li>
                            <li
                                class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                <a
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                            stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Start Date
                                    </h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ customer?.start_date }}</h6>
                                    </ul>
                                </div>
                              
                            </li>
                     
                            <li
                                class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                <a
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                            stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Free Trial
                                    </h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ customer?.free_trial  }}</h6>
                                    </ul>
                                </div>
                              
                            </li>
                            <li class="w-full relative h-24">
                                <a
                                    class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                            stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>
                                <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                    <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Note</h4>
                                    <ul>
                                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ customer?.note }}</h6>
                                    </ul>
                                </div>
                                
                            </li>
                        </ol>
                    </div>
                    
                </div>
                <div class="w-full justify-center items-center gap-5 flex sm:flex-row flex-col">
    <!-- Back Button (Go back to previous page) -->
    <button
        @click="$router.back()"
        class="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
        <span class="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
            Back 
        </span>
    </button>
    
    <!-- Redirect to Contract Page -->
    <button
        @click="$router.push(`/contracts/${customer.id}`)"
        class="md:w-fit w-full px-5 py-2.5 bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-900  transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
        <span class="px-2 py-px text-white text-base font-semibold leading-relaxed">
Show Contracts        </span>
    </button>
</div>

            </div>
        </div>
        
    </section>
    <Error v-else/>                              
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Loading from "../components/Loading.vue";
import Error from "./error.vue";
import { useUserStore } from "../store/userStore";
import { useCustomerDetailStore } from "../store/customerDetailStore";

export default {
  setup() {
    const route = useRoute();
    const userStore = useUserStore();
    const customerDetailStore = useCustomerDetailStore();
    
    customerDetailStore.setCustomerId(route.params.customer_id);
    
    onMounted(() => {
      customerDetailStore.fetchCustomer();
    });

    return {

        customerId: computed(() => customerDetailStore.customerId),
      customer: computed(() => customerDetailStore.customer),
      getDataLoading: computed(() => customerDetailStore.getDataLoading),
      

      user: computed(() => userStore.user),
    };
  },
  components: {
    Loading,
    Error
  },
};
</script>
