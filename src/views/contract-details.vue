<template>

    <Loading v-if="getDataLoading"/>
                                                  <section  v-if="contract"  class="py-24 relative">
          <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div class="w-full flex-col justify-start items-start lg:gap-5 gap-5 inline-flex">
                  <h2 class="w-full bg-indigo-900 text-white rounded-xl p-4 md:text-3xl text-2xl font-bold font-manrope leading-normal   border-gray-200">
                    
                    Contract #{{ contract?.id }}</h2>

                <div class="w-full bg-gray-100 p-8 rounded-lg flex-col justify-start items-start gap-9 flex">
               
                      <div class="w-full justify-start items-start gap-2.5 inline-flex">
                          <ol class="w-full overflow-hidden flex flex-col gap-1.5">
                            <li
                                  class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-600 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                  <a href="https://pagedone.io/"
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
                                      <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Created By</h4>
                                      <ul>
                                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                                            {{ contract?.creator.name }}</h6>
                                      </ul>
                                  </div>
                                  
                              </li>
                              <li
                                  class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                  <a href="https://pagedone.io/"
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
                                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ contract?.start_date }}</h6>
                                      </ul>
                                  </div>
                                
                              </li>
                              <li
                                  class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                  <a href="https://pagedone.io/"
                                      class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none">
                                          <path
                                              d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                              stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                      </svg>
                                  </a>
                                  <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                      <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Expire Date</h4>
                                      <ul>
                                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">    {{ contract?.expire_date }}</h6>
                                      </ul>
                                  </div>
                                  
                              </li>
                              <li
                                  class="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                                  <a href="https://pagedone.io/"
                                      class="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                          fill="none">
                                          <path
                                              d="M16.6704 9.39887L12.3611 13.7082C11.6945 14.3749 11.3611 14.7082 10.9469 14.7082C10.5327 14.7082 10.1994 14.3749 9.53269 13.7082L8 12.1755M11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21Z"
                                              stroke="#C7D2FE" stroke-width="1.6" stroke-linecap="round" />
                                      </svg>
                                  </a>
                                  <div class="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                                      <h4 class="text-lg text-gray-900 font-semibold leading-relaxed">Payment
                                      </h4>
                                      <ul>
                                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ contract?.payment }}</h6>
                                      </ul>
                                  </div>
                                
                              </li>
                              
                              <li class="w-full relative h-24">
                                  <a href="https://pagedone.io/"
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
                                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ contract?.note }}</h6>
                                      </ul>
                                  </div>
                                  
                              </li>
                          </ol>
                      </div>
                      
                  </div>
                  <button
          @click="$router.back()"
          class="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
          <span class="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
              Back 
          </span>
      </button>
  
              </div>
          </div>
          
      </section>
      <div v-else class="w-full mt-[80px] flex justify-center items-center">
        <section class="">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             
              <div class="w-full  flex-col justify-start items-center lg:gap-16 gap-10 inline-flex   pb-12">
                <div class="border px-[100px] border-indigo-300 h-[550px] rounded-lg w-full">
                  <div class="p-8 flex justify-between items-center border-b border-indigo-100">
                    <div class="block">
                      <svg width="204" height="18" viewBox="0 0 204 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.78677" cy="8.78677" r="8.78677" transform="matrix(1 0 0 -1 0 17.6912)" fill="#E0E7FF"/>
                        <circle cx="8.78677" cy="8.78677" r="8.78677" transform="matrix(1 0 0 -1 28.1177 17.6912)" fill="#A5B4FC"/>
                        <circle cx="8.78677" cy="8.78677" r="8.78677" transform="matrix(1 0 0 -1 56.2353 17.6912)" fill="#E0E7FF"/>
                        <path d="M91.3824 8.9044C91.3824 13.7572 95.3164 17.6912 100.169 17.6912H195.066C199.919 17.6912 203.853 13.7572 203.853 8.9044C203.853 4.0516 199.919 0.117632 195.066 0.117632H100.169C95.3163 0.117632 91.3824 4.0516 91.3824 8.9044Z" fill="#E0E7FF"/>
                        </svg>                      
                    </div>
                    <div class="block">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.78677" cy="8.78677" r="8.78677" transform="matrix(1 0 0 -1 0 17.6912)" fill="#E0E7FF"/>
                        </svg>                      
                    </div>
                  </div>
                  <div class="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
                    <svg width="314" height="171" viewBox="0 0 314 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M131.408 134.14L131.407 134.139C124.251 129.827 118.724 123.793 114.83 116.051L114.829 116.049C110.981 108.307 109.065 99.3201 109.065 89.1025C109.065 78.885 110.981 69.8983 114.829 62.156L114.83 62.1539C118.724 54.4117 124.251 48.3783 131.407 44.0663L131.408 44.0655C138.616 39.75 147.163 37.6025 157.029 37.6025C166.894 37.6025 175.419 39.7498 182.582 44.0659C189.784 48.3778 195.311 54.4115 199.16 62.1549C203.054 69.8975 204.993 78.8846 204.993 89.1025C204.993 99.3208 203.054 108.308 199.16 116.051C199.16 116.051 199.159 116.051 199.159 116.051L198.713 115.827C194.905 123.488 189.442 129.449 182.325 133.711L131.408 134.14ZM131.408 134.14C138.616 138.455 147.163 140.603 157.029 140.603C166.894 140.603 175.419 138.455 182.582 134.139L131.408 134.14ZM43.4542 138.063V138.563H43.9542H62.7222H63.2222V138.063V123.331H71.4262H71.9262V122.831V105.559V105.059H71.4262H63.2222V81.0785V80.5785H62.7222H43.9542H43.4542V81.0785V105.059H23.3911L53.9264 40.3559L54.2631 39.6425H53.4742H32.2582H31.9413L31.8061 39.9291L0.934056 105.345L0.88623 105.446V105.559V122.831V123.331H1.38623H43.4542V138.063ZM181.318 106.729L181.317 106.732C179.31 111.726 176.288 115.563 172.254 118.267C168.232 120.963 163.171 122.284 157.036 122.195C150.898 122.105 145.83 120.695 141.803 117.995C137.767 115.29 134.722 111.495 132.671 106.591C130.661 101.678 129.649 95.853 129.649 89.1025C129.649 82.3519 130.661 76.4793 132.672 71.4739C134.724 66.4795 137.769 62.6418 141.803 59.9379C145.825 57.2419 150.887 55.9209 157.021 56.0105C163.16 56.1001 168.227 57.5104 172.254 60.2099C176.29 62.9151 179.312 66.709 181.318 71.6119L181.319 71.6154C183.374 76.5274 184.409 82.3523 184.409 89.1025C184.409 95.8524 183.374 101.724 181.318 106.729ZM284.642 138.063V138.563H285.142H303.91H304.41V138.063V123.331H312.614H313.114V122.831V105.559V105.059H312.614H304.41V81.0785V80.5785H303.91H285.142H284.642V81.0785V105.059H264.579L295.114 40.3559L295.451 39.6425H294.662H273.446H273.129L272.994 39.9291L242.122 105.345L242.074 105.446V105.559V122.831V123.331H242.574H284.642V138.063Z" fill="#EEF2FF" stroke="#4F46E5"/>
                      <path d="M176.88 0.632498L176.88 0.632384L176.869 0.630954C176.264 0.549581 175.654 0.5 175.04 0.5H109.399C102.772 0.5 97.4004 5.84455 97.4004 12.4473V142.715C97.4004 149.318 102.772 154.662 109.399 154.662H204.009C210.652 154.662 216.007 149.317 216.007 142.715V38.9309C216.007 38.0244 215.908 37.1334 215.709 36.2586L215.709 36.2584C215.178 33.9309 213.935 31.7686 212.127 30.1333C212.127 30.1331 212.126 30.1329 212.126 30.1327L183.129 3.65203C183.129 3.6519 183.128 3.65177 183.128 3.65164C181.372 2.03526 179.201 0.995552 176.88 0.632498Z" fill="white" stroke="#E5E7EB"/>
                      <ellipse cx="160.123" cy="81" rx="28.0342" ry="28.0342" fill="#EEF2FF"/>
                      <path d="M179.3 61.3061L179.3 61.3058C168.559 50.5808 151.17 50.5804 140.444 61.3061C129.703 72.0316 129.703 89.4361 140.444 100.162C151.17 110.903 168.559 110.903 179.3 100.162C190.026 89.4364 190.026 72.0317 179.3 61.3061ZM185.924 54.6832C200.31 69.0695 200.31 92.3985 185.924 106.785C171.522 121.171 148.208 121.171 133.806 106.785C119.419 92.3987 119.419 69.0693 133.806 54.683C148.208 40.2965 171.522 40.2966 185.924 54.6832Z" stroke="#E5E7EB"/>
                      <path d="M190.843 119.267L182.077 110.492C184.949 108.267 187.537 105.651 189.625 102.955L198.39 111.729L190.843 119.267Z" stroke="#E5E7EB"/>
                      <path d="M219.183 125.781L219.183 125.78L203.374 109.988C203.374 109.987 203.374 109.987 203.373 109.986C202.057 108.653 199.91 108.657 198.582 109.985L198.931 110.335L198.582 109.985L189.108 119.459C187.792 120.775 187.796 122.918 189.105 124.247L189.108 124.249L204.919 140.06C208.85 143.992 215.252 143.992 219.183 140.06C223.13 136.113 223.13 129.728 219.183 125.781Z" fill="#A5B4FC" stroke="#818CF8"/>
                      <path d="M163.246 87.2285C162.6 87.2285 162.064 86.6926 162.064 86.0305C162.064 83.3821 158.06 83.3821 158.06 86.0305C158.06 86.6926 157.524 87.2285 156.862 87.2285C156.215 87.2285 155.679 86.6926 155.679 86.0305C155.679 80.2294 164.444 80.2451 164.444 86.0305C164.444 86.6926 163.908 87.2285 163.246 87.2285Z" fill="#4F46E5"/>
                      <path d="M173.414 77.0926H168.464C167.802 77.0926 167.266 76.5567 167.266 75.8946C167.266 75.2483 167.802 74.7123 168.464 74.7123H173.414C174.076 74.7123 174.612 75.2483 174.612 75.8946C174.612 76.5567 174.076 77.0926 173.414 77.0926Z" fill="#4F46E5"/>
                      <path d="M151.66 77.0925H146.71C146.048 77.0925 145.512 76.5565 145.512 75.8945C145.512 75.2481 146.048 74.7122 146.71 74.7122H151.66C152.306 74.7122 152.842 75.2481 152.842 75.8945C152.842 76.5565 152.306 77.0925 151.66 77.0925Z" fill="#4F46E5"/>
                      <path d="M118.413 22.8803C118.413 22.1251 119.025 21.5128 119.781 21.5128H158.071C158.827 21.5128 159.439 22.1251 159.439 22.8803C159.439 23.6356 158.827 24.2479 158.071 24.2479H119.781C119.025 24.2479 118.413 23.6356 118.413 22.8803Z" fill="#4F46E5"/>
                      <path d="M118.413 136.385C118.413 134.874 119.638 133.65 121.148 133.65H170.379C171.89 133.65 173.114 134.874 173.114 136.385C173.114 137.895 171.89 139.12 170.379 139.12H121.148C119.638 139.12 118.413 137.895 118.413 136.385Z" fill="#A5B4FC"/>
                      <path d="M118.413 31.0854C118.413 30.3302 119.025 29.7179 119.781 29.7179H130.721C131.476 29.7179 132.088 30.3302 132.088 31.0854C132.088 31.8407 131.476 32.4529 130.721 32.4529H119.781C119.025 32.4529 118.413 31.8407 118.413 31.0854Z" fill="#4F46E5"/>
                      <circle cx="136.191" cy="31.0854" r="1.36752" fill="#4F46E5"/>
                      <circle cx="141.661" cy="31.0854" r="1.36752" fill="#4F46E5"/>
                      <circle cx="147.131" cy="31.0854" r="1.36752" fill="#4F46E5"/>
                      </svg>
                      <div class="block text-center mt-5">
                        <h5 class="md:text-xl text-lg leading-8 text-gray-900 font-medium mb-1.5"><span class="text-indigo-600 font-semibold ">Oops!</span> It seems like you've taken a wrong turn</h5>
                        <p class="text-sm text-gray-500">We're working to bring it back.</p>
                      </div>
                  </div>
                </div>
              </div>
           
          </div>
      </section>
                                                    </div>                                 
  </template>
  
  <script>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import Loading from "../components/Loading.vue";
  import { useToast } from "vue-toastification";
  
  export default {
    setup() {
      const route = useRoute();
      const contract_id = ref(route.params.contract_id);
      const contract = ref(null);
      const getDataLoading = ref(true);
      const toast = useToast();
      
      const fetchContract = async () => {
        getDataLoading.value = true;
        try {
          const response = await axios.get(`/contracts/${contract_id.value}`);
          contract.value = response.data;
        } catch (error) {
          console.error("Error fetching contract:", error);
        } finally {
          getDataLoading.value = false;
        }
      };
      
   
      onMounted(fetchContract);
      
      return {
        contract_id,
        contract,
        getDataLoading,
      };
    },
    components: {
      Loading,
    },
  };
  </script>
  