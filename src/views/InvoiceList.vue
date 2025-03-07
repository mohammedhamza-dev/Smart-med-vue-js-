<template>
  <div v-if="getDataLoading">
    <Loading />
  </div>


 <div class="" v-else>  <div v-if="customerId_error">
     <Error/>
    </div>

    
  <div v-else class="p-4 2xl:max-w-[1800px] max-w-[1300px] mt-[100px] mx-auto">
    <h1 class="md:text-3xl ml-4 text-2xl font-semibold mb-[20px]">
      Invoices for Customer #{{ customerId }}
    </h1>

    <!-- Add Invoice Button -->
    <button
      @click="openModal()"
      class="bg-indigo-800 ml-4 dcursor-pointer hover:bg-indigo-700 duration-[0.7s] active:bg-indigo-900 text-white px-4 py-2 md:text-[15px] text-[13px] rounded mb-"
      >
      Add Invoice
    </button>
    <!-- Alert Info -->
    <div
      v-if="invoices == 0"
      class="bg-blue-200 px-[40px] py-[40px] mx-2 my-4 rounded-md md:text-lg text-[13px] flex items-center mx-auto"
    >
      <svg
        viewBox="0 0 24 24"
        class="text-blue-600 min-w-5 min-h-5 w-5 h-5 sm:min-w-5 sm:min-h-5 sm:w-5 sm:h-5 mr-3"
      >
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
        ></path>
      </svg>
      <span class="text-blue-800">
        There are currently no invoices associated with this customer. You can
        add a new invoice by clicking the button above
      </span>
    </div>
    <div v-else class="">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:xl:grid-cols-4 gap-y-0 p-"
        >
        
          <section     v-for="(invoices,index) in invoices"
          :key="invoices.id" class="flex flex-col justify-center antialiased text-gray-600  p-4">
    <div class="h-full">
        <!-- Card -->
        <div class="max-w-2xl mx-auto bg-indigo-800 shadow-lg rounded-lg">
            <div class="px-6 py-5">
                <div class="flex items-start">
                    <!-- Icon -->
                    <svg class="fill-current flex-shrink-0 mr-5" width="30" height="30" viewBox="0 0 30 30">
                        <path class="text-indigo-300" d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z" />
                        <path class="text-indigo-200" d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z" />
                        <path class="text-indigo-500" d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z" />
                    </svg>
                    <!-- Card content -->
                    <div class="flex-grow truncate">
                        <!-- Card header -->
                        <div class="w-full sm:flex justify-between items-center mb-3">
                            <!-- Title -->
                            <h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0"> Invoice</h2>
                          
                        </div>
                        <!-- Card body -->
                        <div class="flex items-end justify-between whitespace-normal">
                            <!-- Paragraph -->
                          <div class="flex flex-col">
                            <p class="text-gray-100 text-sm"><span class="text-white font-bold"> Customer Name  : </span>{{ invoices.customer.name }}</p>
                            


                            <p class="text-gray-100 text-sm"><span class="text-white font-bold">Created By : </span>{{ invoices.creator.name }}</p>



                            <p class="text-gray-100 text-sm"><span class="text-white font-bold"> Invoice Date  : </span>{{ invoices.invoice_date }}</p>


                            <p class="text-gray-100 text-sm"><span class="text-white font-bold"> Done  : </span>{{ invoices.done?"Yes Done":"No Undone" }}</p>




                          </div>
                            <!-- More link -->
                            <a         @click="$router.push(`/invoices-details/${invoices.id}`)"
                            class="flex-shrink-0 flex items-center justify-center text-indigo-600 cursor-pointer w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2" >
                                <span class="block font-bold"><span class="sr-only">Read more</span> -></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4 flex flex-wrap gap-3">
            <button
              @click="openModal(invoices)"
              class="bg-indigo-800 flex gap-2 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
            >
              <svg
                class="h-[15px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <g id="Complete">
                    <g id="edit">
                      <g>
                        <path
                          d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                          fill="none"
                          stroke="#ffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <polygon
                          fill="none"
                          points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                          stroke="#ffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Edit
            </button>
            <button
              @click="confirmDelete(invoices.id)"
              class="bg-red-500 flex gap-1 items-center text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
            >
              <svg
                viewBox="0 -0.5 21 21"
                version="1.1"
                class="h-[15px]"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#FF0000 "
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>delete [#1487]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke-width="0.00021000000000000004"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-179.000000, -360.000000)"
                      fill="#ffff"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                          id="delete-[#1487]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              Delete
            </button>
          </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="deleteModalOpen"
      id="popup-modal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/10"
    >
      <div class="relative p-4 w-full max-w-md">
        <div class="relative bg-white rounded-lg shadow-lg">
          <!-- Close Button -->
          <button
            @click="deleteModalOpen = false"
            type="button"
            class="absolute flex justify-center items-center top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>

          <!-- Modal Content -->
          <div class="p-4 md:p-5 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete this Invoice?
            </h3>
            <button
              @click="deleteInvoice"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
            >
              <svg
                v-if="loading"
                class="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
              </svg>
              <p v-else="loading">Yes, delete</p>

              <span v-if="loading">Processing</span>
            </button>
            <button
              @click="deleteModalOpen = false"
              type="button"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
</section>
        </div>
  
        <!-- Pagination Controls -->
        <div class="flex justify-between items-center mt-4">
          <button
            @click="fetchInvoices(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
            >
            Previous
          </button>
          <span class="text-gray-700">
            Page {{ currentPage }} of {{ lastPage }}
          </span>
          <button
            @click="fetchInvoices(currentPage + 1)"
            :disabled="currentPage === lastPage"
            class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
            >
            Next
          </button>
        </div>
      </div>

    <!-- Add/Edit Invoice Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black/50 px-4 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
        <div class="flex justify-between items-center border-b pb-3 mb-3">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ form.id ? "Edit" : "Add" }} Invoice
          </h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-700">
            ✖
          </button>
        </div>
        <form @submit.prevent="saveInvoice">
          <div class="space-y-4">
            <div>
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Invoice Date</label
              >
              <input
                v-model="form.invoice_date"
                type="date"
                required
                class="w-full p-3 border border-gray-300 rounded-xl"
              />
            </div>
            <div>
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Done</label
              >
              <select
                v-model="form.done"
                class="w-full p-3 border border-gray-300 rounded-xl"
              >
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end space-x-3 mt-4">
            <button
              @click.prevent="closeModal"
              class="px-5 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 flex items-center text-white bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              <svg
                v-if="loading"
                class="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
              </svg>
              {{ loading ? "Processing..." : "Save" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div></div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
import { useUserStore } from "../store/userStore";
import { useInvoiceStore } from "../store/invoiceStore";
import Error from "./error.vue";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userStore = useUserStore();
    const invoiceStore = useInvoiceStore();
    
    invoiceStore.setCustomerId(route.params.customer_id);
    
    const goToInvoiceDetails = (invoiceId) => {
      router.push(`/invoices-details/${invoiceId}`);
    };

    onMounted(() => {
      invoiceStore.fetchInvoices();
    });

    return {
      customerId: computed(() => invoiceStore.customerId),
      invoices: computed(() => invoiceStore.invoices),
      loading: computed(() => invoiceStore.loading),
      getDataLoading: computed(() => invoiceStore.getDataLoading),
      isModalOpen: computed(() => invoiceStore.isModalOpen),
      deleteModalOpen: computed(() => invoiceStore.deleteModalOpen),
      deleteId: computed(() => invoiceStore.deleteId),
      form: computed(() => invoiceStore.form),
      currentPage: computed(() => invoiceStore.currentPage),
      lastPage: computed(() => invoiceStore.lastPage),
      customerId_error: computed(() => invoiceStore.customerId_error),
      

      fetchInvoices: invoiceStore.fetchInvoices,
      openModal: invoiceStore.openModal,
      closeModal: invoiceStore.closeModal,
      saveInvoice: invoiceStore.saveInvoice,
      confirmDelete: invoiceStore.confirmDelete,
      deleteInvoice: invoiceStore.deleteInvoice,
      
      goToInvoiceDetails,
      
      // User store for reference if needed
      user: computed(() => userStore.user),
    };
  },
  components: { Loading, Error },
};
</script>
