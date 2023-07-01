<template>
  <main class="bg-primary h-screen w-full md:w-1/3 flex-col">
    <div class="flex justify-between p-3 md:p-6">
      <button
        class="bg-gray-600 text-text1 py-2 px-4 rounded hover:bg-gray-700 transition-colors"
      >
        Search for places
      </button>
      <button
        class="bg-gray-600 text-text1 rounded-full w-10 h-10 hover:bg-gray-700 transition-colors flex place-content-center"
      >
        <font-awesome-icon
          :icon="['fas', 'location-crosshairs']"
          class="w-5 h-5 self-center"
        />
      </button>
    </div>

    <div class="h-full w-screen overflow-x-hidden">
      <div class="relative w-full">
        <img
          src="/assets/Cloud-background.png"
          alt="Nubes"
          class="opacity-10 scale-150 mt-10"
        />

        <div class="text-5xl absolute top-1/2 left-1/2 -translate-x-1/2">
          Logo
        </div>
      </div>

      <div class="mt-28 flex flex-col text-center text-text2">
        <h1 class="text-8xl mb-14 text-text1">
          40<span class="text-text2 text-5xl">°C</span>
        </h1>
        <h2 class="text-3xl mb-14">Clima</h2>
        <p class="mb-4">Today - Fecha</p>
        <h3>
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            class="mr-2"
          />Lugar
        </h3>
      </div>
    </div>
  </main>
</template>
