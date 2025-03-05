<template class="">
  <div v-if="getDataLoading" class="">
    <Loading />
  </div>

  <div v-else class="">
    <div v-if="customerId_error">
  <Error/>
    </div>
    <div v-else>
      <div class="p-4 2xl:max-w-[1800px] max-w-[1300px] mt-[100px] mx-auto">
        <h1 class="md:text-3xl ml-4 text-2xl font-semibold mb-[20px]">
          Contracts for Customer #{{ customerId }}
        </h1>

        <div>
          <!-- Add Contract Button -->
          <button
            @click="openModal()"
            class="bg-indigo-800 ml-4 dcursor-pointer hover:bg-indigo-700 duration-[0.7s] active:bg-indigo-900 text-white px-4 py-2 md:text-[15px] text-[13px] rounded mb-"
          >
            Add Contract
          </button>
          <!-- Alert Info -->
          <divi
            v-if="contracts == 0"
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
              There are currently no Contract associated with this customer. You
              can add a new Contract by clicking the button above
            </span>
          </divi>
        <div v-else class="">
            <div  class="">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:xl:grid-cols-4 gap-y-0 p-"
            >
              <section
                v-for="(contract, index) in contracts"
                :key="contract.id"
                class="flex flex-col justify-center antialiased text-gray-600 p-4"
              >
                <div class="h-full">
                  <!-- Card -->
                  <div
                    class="max-w-2xl mx-auto bg-indigo-800 shadow-lg rounded-lg"
                  >
                    <div class="px-6 py-5">
                      <div class="flex items-start">
                        <!-- Icon -->
                        <svg
                          class="fill-current flex-shrink-0 mr-5"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <path
                            class="text-indigo-300"
                            d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                          />
                          <path
                            class="text-indigo-200"
                            d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                          />
                          <path
                            class="text-indigo-500"
                            d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                          />
                        </svg>
                        <!-- Card content -->
                        <div class="flex-grow truncate">
                          <!-- Card header -->
                          <div
                            class="w-full sm:flex justify-between items-center mb-3"
                          >
                            <!-- Title -->
                            <h2
                              class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0"
                            >
                              {{ contract.creator.name }}
                            </h2>
                          </div>
                          <!-- Card body -->
                          <div
                            class="flex items-end justify-between whitespace-normal"
                          >
                            <!-- Paragraph -->
                            <div class="flex flex-col">
                              <p class="text-white text-md">
                                Start Date : {{ contract.start_date }}
                              </p>
                              <p class="text-white text-md mt-1">
                                Expire Date : {{ contract.expire_date }}
                              </p>
                            </div>
                            <!-- More link -->
                            <a
                              @click="
                                $router.push(
                                  `/contracts-details/${contract.id}`
                                )
                              "
                              class="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                            >
                              <span class="block font-bold"
                                ><span class="sr-only">Read more</span> -></span
                              >
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex flex-wrap gap-3">
                  <button
                    @click="openModal(contract)"
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
                    @click="confirmDelete(contract.id)"
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
                <!-- Add/Edit Modal -->
                <div
                  v-if="isModalOpen"
                  class="fixed inset-0 bg-black/0 px-4 max-h-screen overflow-y-auto py-[40px] flex items-center justify-center"
                >
                  <div
                    class="bg-white p-6 mt-[150px] rounded-2xl shadow-xl max-w-md w-full"
                  >
                    <div
                      class="flex justify-between items-center border-b pb-3 mb-3"
                    >
                      <h2 class="text-xl font-semibold text-gray-800">
                        {{ form.id ? "Edit" : "Add" }} Contract
                      </h2>
                      <button
                        @click="closeModal"
                        class="text-gray-400 hover:text-gray-700 transition"
                      >
                        ✖
                      </button>
                    </div>

                    <form @submit.prevent="saveContract">
                      <div class="space-y-4">
                        <div class="flex w-full gap-3">
                          <div class="flex-1">
                            <label
                              class="block text-gray-600 text-sm font-medium mb-1"
                              >Start Date</label
                            >
                            <input
                              v-model="form.start_date"
                              type="date"
                              required
                              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div class="flex-1">
                            <label
                              class="block text-gray-600 text-sm font-medium mb-1"
                              >Expire Date</label
                            >
                            <input
                              v-model="form.expire_date"
                              type="date"
                              required
                              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            class="block text-gray-600 text-sm font-medium mb-1"
                            >Payment</label
                          >
                          <input
                            v-model="form.payment"
                            type="number"
                            required
                            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label
                            class="block text-gray-600 text-sm font-medium mb-1"
                            >Note</label
                          >
                          <textarea
                            v-model="form.note"
                            placeholder="Enter note"
                            class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                          ></textarea>
                        </div>
                      </div>

                      <div class="flex justify-end space-x-3 mt-4">
                        <button
                          @click.prevent="closeModal"
                          class="px-5 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="px-5 py-2 text-white flex items-center bg-indigo-800 rounded-xl hover:bg-indigo-700 active:bg-indigo-900 transition"
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
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke-opacity="0.25"
                            ></circle>
                            <path
                              d="M12 2a10 10 0 0 1 10 10"
                              stroke-opacity="0.75"
                            ></path>
                          </svg>
                          {{ loading ? "Processing..." : "Save" }}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Delete Confirmation Modal -->
                <div
                  v-if="deleteModalOpen"
                  id="popup-modal"
                  class="fixed inset-0 z-50 flex items-center justify-center bg-black/0"
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
                          Are you sure you want to delete this contract?
                        </h3>
                        <button
                          @click="deleteContracts"
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
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke-opacity="0.25"
                            ></circle>
                            <path
                              d="M12 2a10 10 0 0 1 10 10"
                              stroke-opacity="0.75"
                            ></path>
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
          </div>

          <!-- Pagination Controls -->
          <div class="flex justify-between items-center mt-4">
            <button
              @click="fetchContracts(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
              >
              Previous
            </button>
            <span class="text-gray-700">
              Page {{ currentPage }} of {{ lastPage }}
            </span>
            <button
              @click="fetchContracts(currentPage + 1)"
              :disabled="currentPage === lastPage"
              class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
              >
              Next
            </button>
          </div>
        </div>
        </div>

        <!-- Add/Edit Modal -->
        <div
          v-if="isModalOpen"
          class="fixed inset-0 bg-black/50 px-4 max-h-screen overflow-y-auto py-[40px] flex items-center justify-center"
        >
          <div
            class="bg-white p-6 mt-[150px] rounded-2xl shadow-xl max-w-md w-full"
          >
            <div class="flex justify-between items-center border-b pb-3 mb-3">
              <h2 class="text-xl font-semibold text-gray-800">
                {{ form.id ? "Edit" : "Add" }} Contract
              </h2>
              <button
                @click="closeModal"
                class="text-gray-400 hover:text-gray-700 transition"
              >
                ✖
              </button>
            </div>

            <form @submit.prevent="saveContract">
              <div class="space-y-4">
                <div class="flex w-full gap-3">
                  <div class="flex-1">
                    <label class="block text-gray-600 text-sm font-medium mb-1"
                      >Start Date</label
                    >
                    <input
                      v-model="form.start_date"
                      type="date"
                      required
                      class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div class="flex-1">
                    <label class="block text-gray-600 text-sm font-medium mb-1"
                      >Expire Date</label
                    >
                    <input
                      v-model="form.expire_date"
                      type="date"
                      required
                      class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-gray-600 text-sm font-medium mb-1"
                    >Payment</label
                  >
                  <input
                    v-model="form.payment"
                    type="number"
                    required
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-gray-600 text-sm font-medium mb-1"
                    >Note</label
                  >
                  <textarea
                    v-model="form.note"
                    placeholder="Enter note"
                    class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              <div class="flex justify-end space-x-3 mt-4">
                <button
                  @click.prevent="closeModal"
                  class="px-5 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="px-5 py-2 text-white flex items-center bg-indigo-800 rounded-xl hover:bg-indigo-700 active:bg-indigo-900 transition"
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke-opacity="0.25"
                    ></circle>
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke-opacity="0.75"
                    ></path>
                  </svg>
                  {{ loading ? "Processing..." : "Save" }}
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Delete Confirmation Modal -->
        <div
          v-if="deleteModalOpen"
          id="popup-modal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
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
                  Are you sure you want to delete this contract?
                </h3>
                <button
                  @click="deleteContracts"
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke-opacity="0.25"
                    ></circle>
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke-opacity="0.75"
                    ></path>
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Loading from "../components/Loading.vue";
import VueCookies from "vue-cookies"; // Import vue-cookies
import { useToast } from "vue-toastification";
import { useUserStore } from "../store/userStore";
import Error from "./error.vue";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = API_URL;

export default {
  setup() {
    const route = useRoute();
    const customerId = ref(route.params.customer_id);
    const customerId_error = ref(false);

    const contracts = ref([]);
    const loading = ref(false);
    const isModalOpen = ref(false);
    const currentPage = ref(1);
    const lastPage = ref(1);
    const userId = ref(null);
    const userName = ref(null);
    const token = VueCookies.get("jwt");
    const getDataLoading = ref(true);
    const deleteModalOpen = ref(false);
    const deleteId = ref(null);
    const toast = useToast();
    // Get User Store (Pinia)
    const userStore = useUserStore();
    const user = userStore.user;

    const fetchContracts = async (page = 1) => {
      getDataLoading.value = true;

      try {
        await userStore.fetchUser(); // Fetch user first
        if (userStore.user) {
          form.value.created_by = userStore.user.id; // Set created_by
        }
        const response = await axios.get(
          `/customers/${customerId.value}/contracts?page=${page}`
        );
        contracts.value = response.data.data;
        currentPage.value = response.data.current_page;
        lastPage.value = response.data.last_page;
      } catch (error) {
        console.error("Error fetching contracts:", error);
        customerId_error.value = true;
      } finally {
        getDataLoading.value = false;
      }
    };

    const form = ref({
      customer_id: customerId.value,
      start_date: "",
      expire_date: "",
      payment: "",
      note: "",
      created_by: "",
    });

    const confirmDelete = (id) => {
      deleteId.value = id;
      deleteModalOpen.value = true;
    };

    const openModal = (contract = null) => {
      if (contract) {
        form.value = { ...contract };
      } else {
        form.value = {
          customer_id: customerId.value,
          start_date: "",
          expire_date: "",
          payment: "",
          note: "",
          created_by: userStore.user?.id, // Auto-set user ID
        };
      }
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const saveContract = async () => {
      loading.value = true;
      try {
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
        } else {
          if (form.value.id) {
            await axios.put(`/contracts/${form.value.id}`, form.value);
            toast.success("contracts updated successfully!");
          } else {
            await axios.post("/contracts", form.value);
            toast.success("contracts added successfully!");
          }
          fetchContracts(currentPage.value);
          closeModal();
        }
      } catch (error) {
        toast.error("Error!");
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      fetchContracts();
    });
    const deleteContracts = async () => {
      loading.value = true;
      try {
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
        }

        console.log("Deleting contract ID:", deleteId.value);

        // Remove from local state
        contracts.value = contracts.value.filter(
          (contract) => contract.id !== deleteId.value
        );

        await axios.delete(`${API_URL}/contracts/${deleteId.value}`);

        deleteModalOpen.value = false;

        // Ensure the list is updated from API
        await fetchContracts(currentPage.value);

        toast.success("Contract deleted successfully!");
      } catch (error) {
        toast.error("Error deleting contract!");
      } finally {
        loading.value = false;
      }
    };

    return {
      customerId,
      contracts,
      loading,
      isModalOpen,
      form,
      openModal,
      closeModal,
      saveContract,
      fetchContracts,
      currentPage,
      lastPage,
      getDataLoading,
      deleteModalOpen,
      confirmDelete,
      deleteContracts,
      customerId_error,
      
    };
  },
  components: {
    Loading,Error
  },
};
</script>
