<template>
  <div class="w-full min-h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="tabs">
        <a
          :class="{
            'tab tab-lifted': tab !== 1,
            'tab tab-lifted tab-active': tab === 1,
          }"
          @click="currentTab(1)"
          >Tab 1</a
        >
        <a
          :class="{
            'tab tab-lifted': tab !== 2,
            'tab tab-lifted tab-active': tab === 2,
          }"
          @click="currentTab(2)"
          >Tab 2</a
        >
        <a
          :class="{
            'tab tab-lifted': tab !== 3,
            'tab tab-lifted tab-active': tab === 3,
          }"
          @click="currentTab(3)"
          >Tab 3</a
        >
      </div>
    </div>

    <!-- Card Container Start -->

    <div class="flex flex-wrap justify-center p-6" v-if="tab === 1">
      <div
        class="group m-4 relative flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <img
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          class="transition-all duration-300 group-hover:opacity-90"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-2xl font-semibold">ปฏิทินแบบตั้งโต๊ะ</h2>
          <p class="text-base">$100</p>
          <button
            class="w-[120px] rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        class="group m-4 relative flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <img
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          class="transition-all duration-300 group-hover:opacity-90"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-2xl font-semibold">Card Title</h2>
          <p class="text-base">$100</p>
          <button
            class="w-[120px] rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        class="group m-4 relative flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <img
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          class="transition-all duration-300 group-hover:opacity-90"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-2xl font-semibold">Card Title</h2>
          <p class="text-base">$100</p>
          <button
            class="w-[120px] rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        class="group m-4 relative flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <div class="absolute left-0 top-0 h-16 w-16">
          <div
            class="absolute left-[-34px] top-[32px] z-10 w-[170px] -rotate-45 transform bg-red-600 py-1 text-center font-semibold text-white"
          >
            ยกเลิกการขายแล้ว
          </div>
        </div>
        <img
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          class="grayscale transition-all duration-300 group-hover:opacity-90"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-2xl font-semibold">Card Title</h2>
          <p class="text-base">$100</p>
          <button
            class="w-[120px] rounded-md bg-gray-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-gray-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    <div v-if="tab === 2">
      Tab 2 Content show Lorem ipsum dolor sit amet consectetur, adipisicing
      elit.
    </div>
    <div v-if="tab === 3">
      Tab 3 Content show Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Amet,
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tab = ref(1);
    const currentTab = (tabNumber) => (tab.value = tabNumber);
    
    return {
      tab,
      currentTab,
    };
  },
};
</script>

<style lang="scss" scoped></style>
