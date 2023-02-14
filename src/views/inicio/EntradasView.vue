<script setup>
import { computed, onMounted, ref } from "vue";
import { useAlmacenesStore } from "../../stores/api/almacenes";

import SeleccionArticulo from "../../components/SeleccionArticulo.vue";

// Stores
const storeAlmacenes = useAlmacenesStore();

// States
const almacenSelect = ref("");
const getAlmacenes = computed(() => {
  return storeAlmacenes.almacenes;
});
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

const selectAlmacenValue = (almacen) => {
  almacenSelect.value = almacen;
};

onMounted(() => {
  storeAlmacenes.fetchAlmacenes();
  openModal("modalEntrada");
});
</script>

<template>
  <div class="label-menu-title pt-5 pb-3">entradas</div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-11">
        <div class="card">
          <div class="row align-items-center">
            <div class="col-4">
              <div class="d-flex flex-column pt-4 ps-4 pb-4">
                <div class="label-roboto-400">Codigo</div>
                <div class="pt-1">
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="col-1">
              <div class="label-roboto-400">Cant.</div>
              <div class="pt-1">
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-1">
              <div class="d-flex flex-column pt-3">
                <div class="pt-3 mt-1">
                  <button
                    type="button"
                    class="btn btn-warning my-auto"
                    style="color: white"
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="row">
                <div class="col-6">
                  <div class="d-flex flex-column pt-4 ps-4 pb-4">
                    <div class="label-roboto-400">Destino</div>
                    <div class="pt-1">
                      <input
                        class="form-control"
                        type="text"
                        value="Bodega"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalEntrada"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="label-menu-title-modal pl-4">entradas</div>
          <div class="d-flex flex-column p-4">
            <div class="label-roboto-400">Almacen</div>
            <div class="pt-1">
              <select class="form-select">
                <option
                  v-for="almacen in getAlmacenes"
                  :key="almacen.idAlmacen"
                  :value="almacen.nombreAlmacen"
                >
                  {{ almacen.nombreAlmacen }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="selectAlmacenValue"
          >
            elegir
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalEntradaConfirmar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="label-menu-title-modal pl-4">Uniformes</div>
          <div class="d-flex flex-column p-4">
            <div class="label-roboto-400">
              Los artículos seran agregados al alamcén ${almacen} ¿Desea
              continuar?
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            cancelar
          </button>
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
  <SeleccionArticulo />
</template>

<style scoped>
.modal-content {
  border: 0;
}

.modal-footer {
  border-top: 0;
}
</style>