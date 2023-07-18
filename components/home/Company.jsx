import React from 'react'

const Company = () => {
  return (
    <>
     <div
          class="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"
        >
    <div
            class="flex flex-col rounded-xl bg-info/10 py-5 dark:bg-navy-800 lg:flex-row"
          >
            <div class="flex flex-col px-4 sm:px-5 lg:w-48 lg:shrink-0 lg:py-3">
              <h3
                class="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-lg"
              >
                Channels
              </h3>
              <p class="mt-3 grow">
                Channels analytics calculated based on your activity
              </p>
              <div class="mt-3 flex items-center space-x-2">
                <div
                  class="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  3.3%
                </p>
              </div>
            </div>
            <div
              class="scrollbar-sm mt-5 flex space-x-4 overflow-x-auto px-4 sm:px-5 lg:mt-0 lg:pl-0"
            >
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="https://nowrangroy.com/wp-content/uploads/2021/08/logo.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Instagram
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapp721
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +2
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Facebook
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapp721
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +3
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Tik Tok
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapptik
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +1
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Twitter
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapporg
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +1
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Pinterest
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapporg
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +2
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Discord
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapp2
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +1
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Youtube
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapp
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +2
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-36 shrink-0 flex-col items-center">
                <img
                  class="z-10 h-10 w-10"
                  src="images/100x100.png"
                  alt="flag"
                />

                <div
                  class="card -mt-5 w-full rounded-2xl px-3 py-5 text-center"
                >
                  <p
                    class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    Tumblr
                  </p>
                  <a
                    href="#"
                    class="mt-1 font-inter text-xs+ tracking-wide text-slate-400 hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@theapp
                  </a>
                  <div class="mt-6 flex justify-center space-x-1 font-inter">
                    <p
                      class="text-4xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      +1
                    </p>
                    <p
                      class="mt-1 font-medium text-slate-700 dark:text-navy-100"
                    >
                      %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}

export default Company