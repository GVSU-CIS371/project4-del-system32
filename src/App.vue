<template>
  <div>
    <Beverage
      :name="name"
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <!--  Added <p> for text box  -->
    <p>Name: <input type="text" v-model="name" /></p>
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`rtemp${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`rcreamer${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`rsyrup${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`rbase${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
      <!--  Added <li><button> to save beverage selection  -->
      <li>
        <button @click="makeBeverage(name)">MAKE BEVERAGE</button>
      </li>
      <!-- <li 
        v-for="item in bevStore.items"
        :key="'bev-${idx}'"
        :item="item"
        > -->
        <li>
          <template v-for="item in bevStore.items" :key="'bev-${idx}'" :item="item">
            <label>
              <input
                type="radio"
                name="Make Beverage"
                v-model="name"
              />
              {{ item.name }}
            </label>
          </template>
        <!-- {{ item.name }} -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");

// Added code
const name = ref("Default");

import { useBevStore } from './stores/BevStore';
// import { Props } from "./components/Beverage.vue";

const bevStore = useBevStore();
// const makeBeverage = (bev: Props) => {
//   bevStore.$patch((state) => {
//     state.items.push(bev);
//     })
// }

// test code with deafult select
const makeBeverage = (name: string) => {
  bevStore.$patch((state) => {
    state.items.push({
      name: name,
      isIced: true,
      creamer: "Milk",
      syrup: "Vanilla",
      beverage: "test" });
    })
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
