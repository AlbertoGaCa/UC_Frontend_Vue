<script setup>
import { computed, ref, onMounted, defineProps } from "vue";
import { useArticulosStore } from "../stores/api/articulos";
import { useExistenciaStore } from "../stores/api/existencias";
import { currencyFormatter } from "../utils/formatter";

// Props
const props = defineProps({
  checkExistencia: Boolean,
  modelValue: Object
})

// Emits
const emits = defineEmits(['update:modelValue'])

// Stores
const storeArticulos = useArticulosStore();
const storeExistencia = useExistenciaStore();

// Utils
const formatter = currencyFormatter;

// States
const articuloLike = ref("");
const toastText = ref("");
const getArticulosLike = computed(() => {
  return storeArticulos.articulosLike;
});

// Methods
const openModal = (nameId) => {
  let modal = new bootstrap.Modal(document.getElementById(nameId), {
    keyboard: false,
  });
  modal.show();
};

const closeModal = (nameId) => {
  let modal = new bootstrap.Modal(document.getElementById(nameId), {
    keyboard: false,
  });
  modal.dispose();
};

const chooseArticulo = async (articulo) => {
  console.log(articulo);
  await storeExistencia.fetchExistenciaArticulo(articulo.idArticulo, "TIENDA");

  console.log(storeExistencia.existenciaArticulo.cantidad);
  if (props.checkExistencia) {
    if (storeExistencia.existenciaArticulo.cantidad == 0) {
      toastText.value =
        "No hay existencia del articulo " + articulo.nombre + " en la tienda.";
      const toastExistencia = document.getElementById("existenciaToast");
      let toast = new bootstrap.Toast(toastExistencia);
      toast.show();
      document.getElementById("closeButton").click();
      storeExistencia.existenciaArticulo = {};
      closeModal();
      return;
    }
  }

  emits('update:modelValue', articulo);
  
};

const onPressArticulos = (event) => {
  console.log(articuloLike.value);
  const query = { like: articuloLike.value };
  storeArticulos.fetchArticulosLike(query);
};

onMounted(() => { });

window.addEventListener(
  "keydown",
  (event) => {
    if (event.code == "F10") {
      openModal("modalSeleccionArticulo");
    }
  },
  true
);
</script>

<template>
  <div>
    <div class="modal fade" id="modalSeleccionArticulo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="pt-1">
              <input class="form-control" type="text" v-model="articuloLike" @keyup="onPressArticulos" />
            </div>
            <div class="d-flex flex-column pt-3">
              <div class="col-12 table-scrollable" style="height: 55vh">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Articulo</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="articulo in getArticulosLike" :key="articulo.idArticulo"
                      @dblclick="chooseArticulo(articulo)" class="hover-tr">
                      <th scope="row">{{ articulo.idArticulo }}</th>
                      <td>{{ articulo.nombre }}</td>
                      <td>{{ formatter.format(articulo.precio1) }}</td>
                      <td>{{ articulo.descripcion }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="closeButton" data-bs-dismiss="modal">
              cerrar
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="selectAlmacenValue">
              elegir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div id="existenciaToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Alerta</strong>
          <small>Hace 1 segundo</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">{{ toastText }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hover-tr:hover {
  background-color: rgb(223, 223, 223);
}
</style>