import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { APISettings } from '../../config/config';

import axios from 'axios';

export const useExistenciaStore = defineStore('existencia', {
    state: () => ({
        existencia: [],
        existenciaArticulo: {}
    }),

    getters: {
        getExistenciaArticulos(state) {
            return state.existencia;
        }
    },

    actions: {
        async fetchExistenciaArticulos(params) {
            const query = new URLSearchParams(params);
            try {
                let { data } = await axios.get(APISettings.baseURL + '/existencias?' + query);
                this.existencia = data;
            } catch(err) {
                console.log(err);
            }
        },
        async fetchExistenciaArticulo(articulo, almacen) {
            const params = {
                articulo,
                almacen
            };
            const query = new URLSearchParams(params);
            try {
                let { data } = await axios.get(APISettings.baseURL + '/existenciaArticulo?' + query);
                this.existenciaArticulo = data;
            } catch(err) {
                console.log(err);
            }
        },
        async getExcelFileExistencia(params) {
            const query = new URLSearchParams(params);
            try {
                let response = await axios({
                    url: APISettings.baseURL + '/excelFileExistencias?' + query,
                    method: 'GET',
                    responseType: 'blob'
                });
                const href = URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', response.headers['content-disposition']);
                document.body.appendChild(link);
                link.click();
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