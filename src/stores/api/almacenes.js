import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { APISettings } from '../../config/config';

import axios from 'axios';

export const useAlmacenesStore = defineStore('almacenes', {
    state: () => ({
        almacenes: [],
    }),

    getters: {
        getAlmacenes(state) {
            return state.almacenes;
        }
    },

    actions: {
        async fetchAlmacenes(params) {
            const query = new URLSearchParams(params);
            try {
                let { data } = await axios.get(APISettings.baseURL + '/almacenes');
                this.almacenes = data;
            } catch(err) {
                console.log(err);
            }
        }
    }
})

/*
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/