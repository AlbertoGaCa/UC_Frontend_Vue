import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { APISettings } from '../../config/config';

import axios from 'axios';

export const useArticulosStore = defineStore('articulos', {
    state: () => ({
        articulos: [],
        articulosLike: []
    }),

    getters: {
        getArticulos(state) {
            return state.articulos;
        }
    },

    actions: {
        async fetchArticulos() {
            try {
                let data = await axios.get(APISettings.baseURL + '/articulos');
                this.articulos = data.data;
            } catch(err) {
                console.log(err);
            }
        },
        async fetchArticulosLike(params) {
            const query = new URLSearchParams(params);
            try {
                let { data } = await axios.get(APISettings.baseURL + '/articulos?' + query);
                this.articulosLike = data;
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