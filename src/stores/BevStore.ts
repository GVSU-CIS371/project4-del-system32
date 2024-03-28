import { defineStore } from 'pinia';
import { Props } from '../components/Beverage.vue'

export const useBevStore = defineStore('bevStore', {
    state: () => {
        return { items: [] as Props[] };
    },
    // actions, getters, etc.
})