<template>
  <div v-if="getDataLoading">
    <Loading />
  </div>

  <div v-else class="p-3 2xl:max-w-[1800px] max-w-[1300px] mt-[100px] mx-auto">
    <h1 class="md:text-3xl text-2xl font-[500] mb-[20px]">
      Welcome , <span class="text-indigo-700">{{ user_data || "User" }}</span>
    </h1>

    <!-- Add Customer Button -->
    <button
      @click="openModal()"
      class="bg-indigo-800 dcursor-pointer hover:bg-indigo-700 duration-[0.7s] active:bg-indigo-900 text-white px-4 py-2 md:text-[15px] text-[10px] rounded mb-4"
    >
      Add Customer
    </button>
    <!-- Alert Info -->
    <div
      v-if="customers == 0"
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
        There are currently no associated customers.You can
        add a new customers by clicking the butto751 725 23 21n above
      </span>
    </div>
    <div v-else class="">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:xl:grid-cols-4 gap-6 p-"
      >
        <div
          v-for="customer in customers"
          :key="customer.id"
          class="bg-white shadow-lg rounded-lg p-5 border border-gray-200"
        >
          <div class="bg-indigo-900 h-[140px] p-4 rounded-lg">
            <h3
              class="text-xl border-b flex gap-2 items-center justify-between pb-2 font-[500] text-white"
            >
              <h1>{{ customer.name }}</h1>
              <!-- Redirect to Contract Page -->

              <p
                class="text-sm cursor-pointer"
                @click="$router.push(`/customer-details/${customer.id}`)"
              >
                Show Details >
              </p>
            </h3>
            <div class="mt-5">
              <p class="text-gray-100 flex items-center gap-2 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M18 9V6M18 6V3M18 6H15M18 6H21M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                      stroke="#ffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                {{ customer.phone }}
              </p>
              <p class="text-gray-100 flex mt-3 items-center gap-2 text-sm">
                <svg
                  viewBox="0 0 8.4666669 8.4666669"
                  id="svg8"
                  class="h-[20px]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  fill="#ffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs id="defs2"></defs>
                    <g id="layer1" transform="translate(0,-288.53332)">
                      <path
                        d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                        id="path929"
                      ></path>
                      <path
                        d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                        id="circle931"
                      ></path>
                    </g>
                  </g>
                </svg>
                {{ customer.address }}
              </p>
            </div>
          </div>

          <div class="mt-4">
            <div class="text-gray-800 flex items-center gap-2 text-md">
              <p class="font-[600]">Start Date :</p>
              {{ customer.start_date }}
            </div>

            <div class="text-gray-800 flex mt-1 gap-2 text-md">
              <p class="font-[600]">Free Trial:</p>
              {{ customer.free_trial }}
            </div>
            <!-- <div class="text-gray-800 grid mt-1 grid-cols-[auto,1fr] text-md">
              <p class="font-[600] whitespace-nowrap">Note:</p>
              <p class="break-words">{{ customer.note }}</p>
            </div> -->
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button
              @click="openModal(customer)"
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
              @click="confirmDelete(customer.id)"
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
            <button
              @click="goToDetails(customer.id)"
              class="bg-gray-300 text-gray-800 px-3 py-1 flex gap-2 items-center rounded-md text-sm hover:bg-gray-400"
            >
              <svg
                class="h-[15px]"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      class="st0"
                      d="M255.366,141.046c-7.4,3.583-14.732,8.548-21.533,15.357c-34.091,34.098-65.081,65.088-65.081,65.088 l0.013,0.02c-0.185,0.186-0.371,0.338-0.557,0.53c-8.824,8.831-9.174,22.909-1.025,32.146c0.323,0.371,0.668,0.736,1.025,1.086 c9.161,9.174,24.036,9.196,33.232,0l35.797-35.797c6.176,2.263,12.248,3.583,18.074,4.243c7.937,0.88,15.392,0.55,22.022-0.385 c16.162-2.29,14.47-1.623,23.844-4.704c9.353-3.068,19.862-9.354,19.862-9.354l6.362,6.355 c0.701,0.681,16.919,16.925,25.192,25.185c1.465,1.471,2.709,2.682,3.542,3.549c0.956,0.997,2.022,1.719,2.682,2.682l41.278,41.279 c11.898-13.35,25.488-33.232,23.81-56.058L320.763,129.14C320.763,129.14,285.062,126.589,255.366,141.046z"
                    ></path>
                    <path
                      class="st0"
                      d="M261.115,394.362c-9.134-9.147-23.961-9.147-33.101,0l-6.794,6.794c9.119-9.132,9.112-23.926-0.021-33.066 c-9.14-9.126-23.947-9.126-33.087,0.007c9.14-9.133,9.14-23.94,0-33.087c-9.133-9.148-23.947-9.133-33.087,0 c9.14-9.133,9.14-23.947,0-33.095c-9.134-9.132-23.947-9.132-33.088,0.014l-20.46,20.453c-9.14,9.147-9.14,23.947,0,33.094 c9.133,9.134,23.941,9.134,33.08,0c-9.14,9.134-9.14,23.947,0,33.087c9.147,9.133,23.954,9.133,33.094,0 c-9.14,9.133-9.14,23.941,0,33.088c9.14,9.133,23.947,9.133,33.088,0l6.802-6.809c-9.119,9.147-9.113,23.94,0.02,33.081 c9.14,9.132,23.947,9.132,33.088,0l20.467-20.468C270.248,418.302,270.248,403.495,261.115,394.362z"
                    ></path>
                    <path
                      class="st0"
                      d="M507.987,178.28L387.543,57.822c-5.351-5.337-14.002-5.337-19.339,0l-38.631,38.63 c-5.337,5.337-5.337,13.989,0,19.333l120.458,120.451c5.33,5.35,13.996,5.35,19.326,0l38.63-38.638 C513.338,192.276,513.338,183.624,507.987,178.28z M473.655,204.992c-5.75,5.736-15.048,5.736-20.777,0 c-5.735-5.743-5.735-15.041,0-20.777c5.729-5.736,15.027-5.736,20.777,0C479.391,189.951,479.384,199.249,473.655,204.992z"
                    ></path>
                    <path
                      class="st0"
                      d="M182.417,99.864l-38.624-38.63c-5.336-5.337-13.995-5.337-19.332,0L4.003,181.691 c-5.337,5.323-5.337,13.989,0,19.319l38.631,38.644c5.33,5.331,14.002,5.331,19.325,0l120.458-120.458 C187.761,113.859,187.761,105.207,182.417,99.864z M59.118,208.403c-5.736,5.729-15.04,5.729-20.777,0 c-5.735-5.742-5.735-15.041,0-20.777c5.736-5.735,15.041-5.735,20.777,0C64.854,193.362,64.854,202.66,59.118,208.403z"
                    ></path>
                    <path
                      class="st0"
                      d="M397.528,312.809l-7.468-7.482l-72.509-72.509l-4.883,2.166l-5.316,1.919l-0.384,0.117 c-0.936,0.296-9.684,2.971-26.932,5.412c-9.12,1.273-18.156,1.431-26.904,0.434c-3.459-0.385-6.898-0.95-10.296-1.692 l-27.757,27.744c-16.678,16.678-43.836,16.678-60.514,0c-0.585-0.591-1.149-1.19-1.671-1.781l-0.179-0.2 c-10.529-11.939-13.204-28.28-8.252-42.461l10.673-16.609l-0.02-0.02l65.081-65.074c2.647-2.641,5.426-5.103,8.314-7.428 c-20.281-3.982-37.296-2.806-37.296-2.806L88.093,235.679c-1.389,18.988,11.651,39.799,20.928,51.952 c16.692-15.963,43.239-15.756,59.641,0.654c6.107,6.1,9.952,13.617,11.574,21.498c7.895,1.637,15.406,5.475,21.513,11.582 c6.107,6.114,9.952,13.631,11.575,21.519c7.888,1.623,15.412,5.46,21.513,11.568c4.078,4.078,7.152,8.783,9.222,13.817 c11.1-0.137,22.242,4.016,30.688,12.455c16.65,16.636,16.643,43.733,0,60.363l-6.809,6.822l3.411,3.412 c9.148,9.147,23.954,9.147,33.095,0c9.14-9.134,9.14-23.947,0-33.088l6.808,6.83c9.147,9.133,23.947,9.133,33.087,0 c9.14-9.147,9.147-23.954,0-33.101c9.147,9.147,23.947,9.147,33.087,0c9.134-9.126,9.154-23.94,0-33.088 c9.154,9.148,23.954,9.148,33.088,0c9.147-9.132,9.147-23.947,0-33.08L397.528,312.809z"
                    ></path>
                  </g>
                </g>
              </svg>
              Contracts
            </button>
            <button
              @click="goToInvoice(customer.id)"
              class="bg-green-500 text-white px-3 py-1 flex items-center gap-2 rounded-md text-sm hover:bg-green-600"
            >
              <svg
                class="h-[21px]"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M74.6,33.6L61.4,20.4c-0.3-0.3-0.6-0.4-1-0.4h0c-0.8,0-1.4,0.6-1.4,1.4V32c0,2.2,1.8,4,4,4h10.6 c0.8,0,1.4-0.6,1.4-1.4v0C75,34.2,74.9,33.9,74.6,33.6z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M73,42H59c-3.3,0-6-2.7-6-6V22c0-1.1-0.9-2-2-2H31c-3.3,0-6,2.7-6,6v48c0,3.3,2.7,6,6,6h38c3.3,0,6-2.7,6-6 V44C75,42.9,74.1,42,73,42z M32,32.6l4.9-0.7c0.1,0,0.3-0.1,0.3-0.2l2.2-4.5c0.2-0.3,0.6-0.3,0.8,0l2.2,4.5 c0.1,0.1,0.2,0.2,0.3,0.2l4.9,0.7c0.3,0.1,0.5,0.5,0.2,0.7l-3.6,3.5c-0.1,0.1-0.1,0.2-0.1,0.4l0.8,4.9c0.1,0.3-0.3,0.6-0.6,0.4 l-4.4-2.3c-0.1-0.1-0.3-0.1-0.4,0l-4.4,2.3c-0.3,0.2-0.7-0.1-0.6-0.4l0.8-4.9c0-0.1,0-0.3-0.1-0.4l-3.6-3.5 C31.5,33.1,31.7,32.7,32,32.6z M63,66c0,1.1-0.9,2-2,2H35c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2V66z M67,54 c0,1.1-0.9,2-2,2H35c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2V54z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Invoice
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="overflow-x-auto">
      <table
        class="w-full border border-gray-300 bg-white rounded-lg overflow-hidden"
      >
        <thead>
          <tr
            class="bg-indigo-900 text-white text-left uppercase text-sm font-semibold"
          >
            <th class="p-4">Name</th>
            <th class="p-4">Phone</th>
            <th class="p-4">Address</th>
            <th class="p-4">start Date</th>
            <th class="p-4">free trial</th>
            <th class="p-4">note</th>

            <th class="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="customer in customers"
            :key="customer.id"
            class="border border-gray-700 bg-gray-100 transition hover:bg-gray-200"
          >
            <td class="p-4 text-gray-700">{{ customer.name }}</td>
            <td class="p-4 text-gray-700">{{ customer.phone }}</td>
            <td class="p-4 text-gray-700">{{ customer.address }}</td>

            <td class="p-4 text-gray-700">{{ customer.start_date }}</td>
            <td class="p-4 text-gray-700">{{ customer.free_trial }}</td>
            <td class="p-4 text-gray-700">{{ customer.note }}</td>

            <td class="p-4 flex justify-center gap-2">
              <div class="flex  w-[160px] ">
                <button
                  @click="openModal(customer)"
                  class="p-2 rounded-full group transition-all duration-500 flex item-center"
                >
                  <svg
                    class="cursor-pointer"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-indigo-500"
                      d="M9.53414 8.15675L8.96459 7.59496L8.96459 7.59496L9.53414 8.15675ZM13.8911 3.73968L13.3215 3.17789V3.17789L13.8911 3.73968ZM16.3154 3.75892L15.7367 4.31126L15.7367 4.31127L16.3154 3.75892ZM16.38 3.82658L16.9587 3.27423L16.9587 3.27423L16.38 3.82658ZM16.3401 6.13595L15.7803 5.56438L16.3401 6.13595ZM11.9186 10.4658L12.4784 11.0374L11.9186 10.4658ZM11.1223 10.9017L10.9404 10.1226V10.1226L11.1223 10.9017ZM9.07259 10.9951L8.52556 11.5788L8.52556 11.5788L9.07259 10.9951ZM9.09713 8.9664L9.87963 9.1328V9.1328L9.09713 8.9664ZM9.05721 10.9803L8.49542 11.5498H8.49542L9.05721 10.9803ZM17.1679 4.99458L16.368 4.98075V4.98075L17.1679 4.99458ZM15.1107 2.8693L15.1171 2.06932L15.1107 2.8693ZM9.22851 8.51246L8.52589 8.12992L8.52452 8.13247L9.22851 8.51246ZM9.22567 8.51772L8.52168 8.13773L8.5203 8.1403L9.22567 8.51772ZM11.5684 10.7654L11.9531 11.4668L11.9536 11.4666L11.5684 10.7654ZM11.5669 10.7662L11.9507 11.4681L11.9516 11.4676L11.5669 10.7662ZM11.3235 3.30005C11.7654 3.30005 12.1235 2.94188 12.1235 2.50005C12.1235 2.05822 11.7654 1.70005 11.3235 1.70005V3.30005ZM18.3 9.55887C18.3 9.11705 17.9418 8.75887 17.5 8.75887C17.0582 8.75887 16.7 9.11705 16.7 9.55887H18.3ZM3.47631 16.5237L4.042 15.9581H4.042L3.47631 16.5237ZM16.5237 16.5237L15.958 15.9581L15.958 15.9581L16.5237 16.5237ZM10.1037 8.71855L14.4606 4.30148L13.3215 3.17789L8.96459 7.59496L10.1037 8.71855ZM15.7367 4.31127L15.8013 4.37893L16.9587 3.27423L16.8941 3.20657L15.7367 4.31127ZM15.7803 5.56438L11.3589 9.89426L12.4784 11.0374L16.8998 6.70753L15.7803 5.56438ZM10.9404 10.1226C10.3417 10.2624 9.97854 10.3452 9.72166 10.3675C9.47476 10.3888 9.53559 10.3326 9.61962 10.4113L8.52556 11.5788C8.9387 11.966 9.45086 11.9969 9.85978 11.9615C10.2587 11.9269 10.7558 11.8088 11.3042 11.6807L10.9404 10.1226ZM8.31462 8.8C8.19986 9.33969 8.09269 9.83345 8.0681 10.2293C8.04264 10.6393 8.08994 11.1499 8.49542 11.5498L9.619 10.4107C9.70348 10.494 9.65043 10.5635 9.66503 10.3285C9.6805 10.0795 9.75378 9.72461 9.87963 9.1328L8.31462 8.8ZM9.61962 10.4113C9.61941 10.4111 9.6192 10.4109 9.619 10.4107L8.49542 11.5498C8.50534 11.5596 8.51539 11.5693 8.52556 11.5788L9.61962 10.4113ZM15.8013 4.37892C16.0813 4.67236 16.2351 4.83583 16.3279 4.96331C16.4073 5.07234 16.3667 5.05597 16.368 4.98075L17.9678 5.00841C17.9749 4.59682 17.805 4.27366 17.6213 4.02139C17.451 3.78756 17.2078 3.53522 16.9587 3.27423L15.8013 4.37892ZM16.8998 6.70753C17.1578 6.45486 17.4095 6.21077 17.5876 5.98281C17.7798 5.73698 17.9607 5.41987 17.9678 5.00841L16.368 4.98075C16.3693 4.90565 16.4103 4.8909 16.327 4.99749C16.2297 5.12196 16.0703 5.28038 15.7803 5.56438L16.8998 6.70753ZM14.4606 4.30148C14.7639 3.99402 14.9352 3.82285 15.0703 3.71873C15.1866 3.62905 15.1757 3.66984 15.1044 3.66927L15.1171 2.06932C14.6874 2.06591 14.3538 2.25081 14.0935 2.45151C13.8518 2.63775 13.5925 2.9032 13.3215 3.17789L14.4606 4.30148ZM16.8941 3.20657C16.6279 2.92765 16.373 2.65804 16.1345 2.46792C15.8774 2.26298 15.5468 2.07273 15.1171 2.06932L15.1044 3.66927C15.033 3.66871 15.0226 3.62768 15.1372 3.71904C15.2704 3.82522 15.4387 3.999 15.7367 4.31126L16.8941 3.20657ZM8.96459 7.59496C8.82923 7.73218 8.64795 7.90575 8.5259 8.12993L9.93113 8.895C9.92075 8.91406 9.91465 8.91711 9.93926 8.88927C9.97002 8.85445 10.0145 8.80893 10.1037 8.71854L8.96459 7.59496ZM9.87963 9.1328C9.9059 9.00925 9.91925 8.94785 9.93124 8.90366C9.94073 8.86868 9.94137 8.87585 9.93104 8.89515L8.5203 8.1403C8.39951 8.36605 8.35444 8.61274 8.31462 8.8L9.87963 9.1328ZM8.52452 8.13247L8.52168 8.13773L9.92967 8.89772L9.9325 8.89246L8.52452 8.13247ZM11.3589 9.89426C11.27 9.98132 11.2252 10.0248 11.1909 10.055C11.1635 10.0791 11.1658 10.0738 11.1832 10.0642L11.9536 11.4666C12.1727 11.3462 12.3427 11.1703 12.4784 11.0374L11.3589 9.89426ZM11.3042 11.6807C11.4912 11.6371 11.7319 11.5878 11.9507 11.4681L11.1831 10.0643C11.2007 10.0547 11.206 10.0557 11.1697 10.0663C11.1248 10.0793 11.0628 10.0941 10.9404 10.1226L11.3042 11.6807ZM11.1837 10.064L11.1822 10.0648L11.9516 11.4676L11.9531 11.4668L11.1837 10.064ZM16.399 6.10097L13.8984 3.60094L12.7672 4.73243L15.2677 7.23246L16.399 6.10097ZM10.8333 16.7001H9.16667V18.3001H10.8333V16.7001ZM3.3 10.8334V9.16672H1.7V10.8334H3.3ZM9.16667 3.30005H11.3235V1.70005H9.16667V3.30005ZM16.7 9.55887V10.8334H18.3V9.55887H16.7ZM9.16667 16.7001C7.5727 16.7001 6.45771 16.6984 5.61569 16.5851C4.79669 16.475 4.35674 16.2728 4.042 15.9581L2.91063 17.0894C3.5722 17.751 4.40607 18.0369 5.4025 18.1709C6.37591 18.3018 7.61793 18.3001 9.16667 18.3001V16.7001ZM1.7 10.8334C1.7 12.3821 1.6983 13.6241 1.82917 14.5976C1.96314 15.594 2.24905 16.4279 2.91063 17.0894L4.042 15.9581C3.72726 15.6433 3.52502 15.2034 3.41491 14.3844C3.3017 13.5423 3.3 12.4273 3.3 10.8334H1.7ZM10.8333 18.3001C12.3821 18.3001 13.6241 18.3018 14.5975 18.1709C15.5939 18.0369 16.4278 17.751 17.0894 17.0894L15.958 15.9581C15.6433 16.2728 15.2033 16.475 14.3843 16.5851C13.5423 16.6984 12.4273 16.7001 10.8333 16.7001V18.3001ZM16.7 10.8334C16.7 12.4274 16.6983 13.5423 16.5851 14.3844C16.475 15.2034 16.2727 15.6433 15.958 15.9581L17.0894 17.0894C17.7509 16.4279 18.0369 15.594 18.1708 14.5976C18.3017 13.6241 18.3 12.3821 18.3 10.8334H16.7ZM3.3 9.16672C3.3 7.57275 3.3017 6.45776 3.41491 5.61574C3.52502 4.79674 3.72726 4.35679 4.042 4.04205L2.91063 2.91068C2.24905 3.57225 1.96314 4.40612 1.82917 5.40255C1.6983 6.37596 1.7 7.61798 1.7 9.16672H3.3ZM9.16667 1.70005C7.61793 1.70005 6.37591 1.69835 5.4025 1.82922C4.40607 1.96319 3.5722 2.24911 2.91063 2.91068L4.042 4.04205C4.35674 3.72731 4.79669 3.52507 5.61569 3.41496C6.45771 3.30175 7.5727 3.30005 9.16667 3.30005V1.70005Z"
                      fill="#818CF8"
                    ></path>
                  </svg>
                </button>
                <button
                  @click="confirmDelete(customer.id)"
                  class="p-2 cursor-pointer rounded-full group transition-all duration-500 flex item-center"
                >
                  <svg
                    class=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-red-600"
                      d="M4.00031 5.49999V4.69999H3.20031V5.49999H4.00031ZM16.0003 5.49999H16.8003V4.69999H16.0003V5.49999ZM17.5003 5.49999L17.5003 6.29999C17.9421 6.29999 18.3003 5.94183 18.3003 5.5C18.3003 5.05817 17.9421 4.7 17.5003 4.69999L17.5003 5.49999ZM9.30029 9.24997C9.30029 8.80814 8.94212 8.44997 8.50029 8.44997C8.05847 8.44997 7.70029 8.80814 7.70029 9.24997H9.30029ZM7.70029 13.75C7.70029 14.1918 8.05847 14.55 8.50029 14.55C8.94212 14.55 9.30029 14.1918 9.30029 13.75H7.70029ZM12.3004 9.24997C12.3004 8.80814 11.9422 8.44997 11.5004 8.44997C11.0585 8.44997 10.7004 8.80814 10.7004 9.24997H12.3004ZM10.7004 13.75C10.7004 14.1918 11.0585 14.55 11.5004 14.55C11.9422 14.55 12.3004 14.1918 12.3004 13.75H10.7004ZM4.00031 6.29999H16.0003V4.69999H4.00031V6.29999ZM15.2003 5.49999V12.5H16.8003V5.49999H15.2003ZM11.0003 16.7H9.00031V18.3H11.0003V16.7ZM4.80031 12.5V5.49999H3.20031V12.5H4.80031ZM9.00031 16.7C7.79918 16.7 6.97882 16.6983 6.36373 16.6156C5.77165 16.536 5.49093 16.3948 5.29823 16.2021L4.16686 17.3334C4.70639 17.873 5.38104 18.0979 6.15053 18.2013C6.89702 18.3017 7.84442 18.3 9.00031 18.3V16.7ZM3.20031 12.5C3.20031 13.6559 3.19861 14.6033 3.29897 15.3498C3.40243 16.1193 3.62733 16.7939 4.16686 17.3334L5.29823 16.2021C5.10553 16.0094 4.96431 15.7286 4.88471 15.1366C4.80201 14.5215 4.80031 13.7011 4.80031 12.5H3.20031ZM15.2003 12.5C15.2003 13.7011 15.1986 14.5215 15.1159 15.1366C15.0363 15.7286 14.8951 16.0094 14.7024 16.2021L15.8338 17.3334C16.3733 16.7939 16.5982 16.1193 16.7016 15.3498C16.802 14.6033 16.8003 13.6559 16.8003 12.5H15.2003ZM11.0003 18.3C12.1562 18.3 13.1036 18.3017 13.8501 18.2013C14.6196 18.0979 15.2942 17.873 15.8338 17.3334L14.7024 16.2021C14.5097 16.3948 14.229 16.536 13.6369 16.6156C13.0218 16.6983 12.2014 16.7 11.0003 16.7V18.3ZM2.50031 4.69999C2.22572 4.7 2.04405 4.7 1.94475 4.7C1.89511 4.7 1.86604 4.7 1.85624 4.7C1.85471 4.7 1.85206 4.7 1.851 4.7C1.05253 5.50059 1.85233 6.3 1.85256 6.3C1.85273 6.3 1.85297 6.3 1.85327 6.3C1.85385 6.3 1.85472 6.3 1.85587 6.3C1.86047 6.3 1.86972 6.3 1.88345 6.3C1.99328 6.3 2.39045 6.3 2.9906 6.3C4.19091 6.3 6.2032 6.3 8.35279 6.3C10.5024 6.3 12.7893 6.3 14.5387 6.3C15.4135 6.3 16.1539 6.3 16.6756 6.3C16.9364 6.3 17.1426 6.29999 17.2836 6.29999C17.3541 6.29999 17.4083 6.29999 17.4448 6.29999C17.4631 6.29999 17.477 6.29999 17.4863 6.29999C17.4909 6.29999 17.4944 6.29999 17.4968 6.29999C17.498 6.29999 17.4988 6.29999 17.4994 6.29999C17.4997 6.29999 17.4999 6.29999 17.5001 6.29999C17.5002 6.29999 17.5003 6.29999 17.5003 5.49999C17.5003 4.69999 17.5002 4.69999 17.5001 4.69999C17.4999 4.69999 17.4997 4.69999 17.4994 4.69999C17.4988 4.69999 17.498 4.69999 17.4968 4.69999C17.4944 4.69999 17.4909 4.69999 17.4863 4.69999C17.477 4.69999 17.4631 4.69999 17.4448 4.69999C17.4083 4.69999 17.3541 4.69999 17.2836 4.69999C17.1426 4.7 16.9364 4.7 16.6756 4.7C16.1539 4.7 15.4135 4.7 14.5387 4.7C12.7893 4.7 10.5024 4.7 8.35279 4.7C6.2032 4.7 4.19091 4.7 2.9906 4.7C2.39044 4.7 1.99329 4.7 1.88347 4.7C1.86974 4.7 1.86051 4.7 1.85594 4.7C1.8548 4.7 1.85396 4.7 1.85342 4.7C1.85315 4.7 1.85298 4.7 1.85288 4.7C1.85284 4.7 2.65253 5.49941 1.85408 6.3C1.85314 6.3 1.85296 6.3 1.85632 6.3C1.86608 6.3 1.89511 6.3 1.94477 6.3C2.04406 6.3 2.22573 6.3 2.50031 6.29999L2.50031 4.69999ZM7.05028 5.49994V4.16661H5.45028V5.49994H7.05028ZM7.91695 3.29994H12.0836V1.69994H7.91695V3.29994ZM12.9503 4.16661V5.49994H14.5503V4.16661H12.9503ZM12.0836 3.29994C12.5623 3.29994 12.9503 3.68796 12.9503 4.16661H14.5503C14.5503 2.8043 13.4459 1.69994 12.0836 1.69994V3.29994ZM7.05028 4.16661C7.05028 3.68796 7.4383 3.29994 7.91695 3.29994V1.69994C6.55465 1.69994 5.45028 2.8043 5.45028 4.16661H7.05028ZM2.50031 6.29999C4.70481 6.29998 6.40335 6.29998 8.1253 6.29997C9.84725 6.29996 11.5458 6.29995 13.7503 6.29994L13.7503 4.69994C11.5458 4.69995 9.84724 4.69996 8.12529 4.69997C6.40335 4.69998 4.7048 4.69998 2.50031 4.69999L2.50031 6.29999ZM13.7503 6.29994L17.5003 6.29999L17.5003 4.69999L13.7503 4.69994L13.7503 6.29994ZM7.70029 9.24997V13.75H9.30029V9.24997H7.70029ZM10.7004 9.24997V13.75H12.3004V9.24997H10.7004Z"
                      fill="#F87171"
                    ></path>
                  </svg>
                </button>

                <button
                  @click="goToDetails(customer.id)"
                  class="p-2 cursor-pointer rounded-full group transition-all duration-500 flex item-center"
                >
                  <img
                    class="h-[17px] mt-[2px]"
                    src="/src/assets/detail-document-fact-info-paper-svgrepo-com.svg"
                    alt=""
                  />
                </button>
                <button
                  @click="goToInvoice(customer.id)"
                  class="p-2 cursor-pointer rounded-full group transition-all duration-500 flex item-center"
                >
                  <img
                    class="h-[21px] mt-[-1px]"
                    src="/src/assets/invoice-instead-line-svgrepo-com.svg"
                    alt=""
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

      <!-- Pagination Controls -->
      <div class="flex justify-between items-center mt-4">
        <button
          @click="fetchCustomers(pagination.current_page - 1)"
          :disabled="pagination.current_page === 1"
          class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
        >
          Previous
        </button>

        <span
          >Page {{ pagination.current_page }} of
          {{ pagination.last_page }}</span
        >

        <button
          @click="fetchCustomers(pagination.current_page + 1)"
          :disabled="pagination.current_page >= pagination.last_page"
          class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:bg-indigo-900 disabled:bg-indigo-900/20 disabled:text-black"
        >
          Next
        </button>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black/50 overflow-y-auto flex items-center justify-center"
      @click.self="closeModal"
    >
      <div
        class="bg-white p-6 mt-[100px] rounded-2xl shadow-xl max-w-md w-full transform scale-95 border border-gray-200"
      >
        <div class="flex justify-between items-center border-b pb-3 mb-3">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ form.id ? "Edit" : "Add" }} Customer
          </h2>
          <button
            @click.prevent="closeModal"
            class="text-gray-400 hover:text-gray-700 transition"
          >
            ✖
          </button>
        </div>

        <form class="space-y-4">
          <div class="flex gap-3">
            <!-- Name Input -->
            <div>
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                placeholder="Enter name"
                class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
                required
              />
            </div>

            <!-- Phone Input -->
            <div>
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Phone</label
              >
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Enter phone number"
                class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
                required
              />
            </div>
          </div>

          <div class="flex w-full gap-3">
            <!-- Address Input -->
            <div class="flex-1">
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Address</label
              >
              <input
                v-model="form.address"
                type="text"
                placeholder="Enter address"
                class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
                required
              />
            </div>
            <!-- Start Date Input -->
            <div class="flex-1">
              <label class="block text-gray-600 text-sm font-medium mb-1"
                >Start Date</label
              >
              <input
                v-model="form.start_date"
                type="date"
                placeholder="Enter date"
                class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-600 text-sm font-medium mb-1"
              >Free Trial</label
            >
            <select
              v-model="form.free_trial"
              type="text"
              placeholder="Select Please"
              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
              required
            >

          <option value="Yes">Yes</option>
          <option value="No">No</option>

          
          </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm font-medium mb-1"
              >Note</label
            >
            <textarea
              v-model="form.note"
              type="text"
              placeholder="Enter name"
              class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
              required
            ></textarea>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-end space-x-3 mt-4">
            <button
              @click.prevent="closeModal"
              class="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              @click.prevent="saveCustomer"
              class="px-5 py-2.5 flex items-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition"
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
              <span v-if="loading">Processing</span>
              <span v-else>Save</span>
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
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent flex justify-center items-center hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
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
              Are you sure you want to delete this customer?
            </h3>
            <button
              @click="deleteCustomer"
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
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/userStore";
import { useCustomersStore } from "../../store/customersStore";
import Loading from "../../components/Loading.vue";

export default {
  setup() {
    const router = useRouter();
    const toast = useToast();
    const userStore = useUserStore();
    const customersStore = useCustomersStore();
    
    const isModalOpen = ref(false);
    const deleteModalOpen = ref(false);
    
    const goToDetails = (id) => router.push(`/Contracts/${id}`);
    const goToInvoice = (id) => router.push(`/invoices/${id}`);
    
    // Computed properties from stores
    const customers = computed(() => customersStore.customers);
    const pagination = computed(() => customersStore.pagination);
    const loading = computed(() => customersStore.isLoading);
    const getDataLoading = computed(() => customersStore.getDataLoading);
    const form = computed(() => customersStore.form);
    const user_data = computed(() => userStore.user?.name || "User");
    
    const openModal = (customer = null) => {
      customersStore.setFormData(customer);
      isModalOpen.value = true;
    };
    
    const closeModal = () => {
      isModalOpen.value = false;
    };
    
    const saveCustomer = async () => {
      const success = await customersStore.saveCustomer();
      if (success) {
        closeModal();
      }
    };
    
    const confirmDelete = (id) => {
      customersStore.setDeleteId(id);
      deleteModalOpen.value = true;
    };
    
    const deleteCustomer = async () => {
      const success = await customersStore.deleteCustomer();
      if (success) {
        deleteModalOpen.value = false;
      }
    };
    
    const fetchCustomers = (page = 1) => {
      customersStore.fetchCustomers(page);
    };
    
    onMounted(() => {
      fetchCustomers();
      customersStore.getTokenFromUrl();
    });
    
    return {
      customers,
      pagination,
      loading,
      getDataLoading,
      form,
      user_data,
      
      isModalOpen,
      deleteModalOpen,
      
      // Methods
      fetchCustomers,
      openModal,
      closeModal,
      saveCustomer,
      confirmDelete,
      deleteCustomer,
      goToDetails,
      goToInvoice,
      
      // Additional user data
      userName: computed(() => userStore.user?.name)
    };
  },
  components: {
    Loading,
  },
};
</script>
