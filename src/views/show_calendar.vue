<template>
  <div class="w-full min-h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="tabs">
        <div>
          <a
            :class="{
              'tab tab-lifted': tab !== 0,
              'tab tab-lifted tab-active': tab === 0,
            }"
            @click="currentTab(0)"
            >ปฏิทินทั้งหมด</a
          >
        </div>
        <div v-for="type in typeData">
          <a
            :class="{
              'tab tab-lifted': tab !== type.type_id,
              'tab tab-lifted tab-active': tab === type.type_id,
            }"
            @click="currentTab(type.type_id)"
            >{{ type.type_name }}</a
          >
        </div>
      </div>
    </div>

    <!-- Card Container Start -->

    <div class="flex flex-wrap justify-center p-6" v-if="tab === 0">
      <div v-for="item in data">
        <div
          v-if="item.cal_is_active === 1"
          class="group m-4 relative flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <img
            src="https://bookplus.co.th/wp-content/uploads/2022/11/Poster-Calendars-Templates-04.jpg"
            class="transition-all duration-300 group-hover:opacity-90"
          />
          <div class="flex flex-col gap-4 p-4">
            <h2 class="text-2xl font-semibold">{{ item.cal_type }}</h2>
            <p class="text-base">{{ item.cal_price }} บาท</p>
            <button
              class="w-[120px] rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div v-else>
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
              src="https://bookplus.co.th/wp-content/uploads/2022/11/Poster-Calendars-Templates-04.jpg"
              class="grayscale transition-all duration-300 group-hover:opacity-90"
            />
            <div class="flex flex-col gap-4 p-4">
              <h2 class="text-2xl font-semibold">{{ item.cal_type }}</h2>
              <p class="text-base">{{ item.cal_price }} บาท</p>
              <button
                class="w-[120px] rounded-md bg-gray-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-gray-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="item in typeData">
      <div v-if="tab === item.type_id">
        Tab {{ item.type_id }} Content show Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. {{ item.type_name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tab = ref(0);
    const currentTab = (tabNumber) => (tab.value = tabNumber);

    const data = ref({});
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/all_cal")
        .then((res) => {
          data.value = res.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    const typeData = ref({});
    const fetchType = async () => {
      await axios
        .get("http://localhost:3000/cal_type")
        .then((res) => {
          typeData.value = res.data.data;
          console.log(typeData.value);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    onMounted(() => {
      fetchData();
      fetchType();
    });

    return {
      tab,
      currentTab,
      fetchData,
      data,
      typeData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
