<template>
  <main class="bg-primary h-screen w-screen md:w-1/3 flex-col overflow-hidden">
    <div class="flex justify-between p-3 md:p-6">
      <button
        class="bg-gray-600 text-text1 py-2 px-4 rounded hover:bg-gray-700 transition-colors"
      >
        Search for places
      </button>
      <button
        class="bg-gray-600 text-text1 rounded-full w-10 h-10 hover:bg-gray-700 transition-colors"
      >
        O
      </button>
    </div>

    <!-- <div
      class="bg-[url('/assets/Cloud-background.png')] w-full h-full bg-no-repeat bg-cover bg-center"
    ></div> -->
    <div>
      <div class="w-full h-fit">
        <img
          src="/assets/Cloud-background.png"
          alt="cloud background"
          class="w-full h-full"
        />
      </div>
    </div>
  </main>
</template>
