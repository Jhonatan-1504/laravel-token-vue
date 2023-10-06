<template>
  <div class="px-4 sm:px-6 lg:px-8 gap-x-4 lg:gap-x-6 bg-white shadow-sm border-b border-gray-200 items-center z-40 flex top-0 sticky h-16 shrink-0">
    <button type="button" class="lg:hidden text-gray-700 p-2.5 -m-2.5">
      <span class="hidden">Open sidebar</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
    </button>
    <div class="bg-gray-900/10 w-px h-6 lg:hidden" aria-hidden="true"></div>
    <div class="lg:gap-x-6 gap-x-4 self-stretch flex-1 flex">
      <form class="flex-1 flex relative" action="#" method="GET">
        <label for="search-field" class="hidden">Search</label>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-gray-400 w-5 h-full inset-y-0 left-0 absolute pointer-events-none"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>
        <input
          id="search-field"
          class="sm:leading-6 text-gray-900 pr-0 pl-8 py-0 w-full h-full block border-0"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
      <div class="lg:gap-x-6 gap-x-4 items-center flex">
        <button type="button" class="text-gray-400 p-2.5 -m-2.5 hover:text-gray-500">
          <span class="hidden">View notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path></svg>
        </button>
        <div class="hidden lg:block bg-gray-900/10 w-px h-6" aria-hidden="true"></div>
        <div class="relative" data-headlessui-state="">
          <button
            class="p-1.5 items-center flex -m-1.5"
            id="headlessui-menu-button-1"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span class="hidden">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full bg-gray-50 "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <span class="hidden lg:flex lg:items-center">
              <span class="text-gray-900 leading-6 font-semibold ml-4 text-sm" aria-hidden="true">Tom Cook</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-gray-400 ml-1"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>