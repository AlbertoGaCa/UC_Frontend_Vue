<script setup>
import { ref, onMounted, computed, defineProps } from "vue";
import { useExistenciaStore } from "../../stores/api/existencias";
import { useAlmacenesStore } from "../../stores/api/almacenes";

const storeExistencia = useExistenciaStore();
const storeAlmacenes = useAlmacenesStore();

// States
const almacenSelect = ref("TODOS");
const toastText = ref("");

const getExistencia = computed(() => {
  return storeExistencia.existencia;
});
const getAlmacenes = computed(() => {
  return storeAlmacenes.almacenes;
});

// Methods
const selectAlmacenChange = () => {
  toastText.value = "Se ha seleccionado el almacen " + almacenSelect.value;
  const toastAlmacen = document.getElementById("almacenSelectToast");
  let toast = new bootstrap.Toast(toastAlmacen);

  const query = { almacen: almacenSelect.value };
  toast.show();
  storeExistencia.fetchExistenciaArticulos(query);
};

const printTable = () => {
  var divToPrint = document.getElementById("printableArea");
  var newWin = window.open("");

  newWin.onload = () => {
    newWin.document.write(`
      <html>
        <head>
            <title>Uniformes Canseco</title>
        </head>
        <style>
          table {
            width: 500px;
            border-collapse: collapse;
          }
          td {
            text-align: left;
          }
          th {
            text-align: left;
          }
          tr {
            border-top: solid dashed black;
            outline: thin solid;
          }
        </style>
      <body>
    `)
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write('</body></html>');
    newWin.print();
  };

  //newWin.close();
};

const downloadFile = () => {
  storeExistencia.getExcelFileExistencia();
}

onMounted(() => {
  storeExistencia.fetchExistenciaArticulos();
  storeAlmacenes.fetchAlmacenes();
});
</script>


<template>
  <div class="label-menu-title pt-5 pb-3">existencias</div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-11">
        <div class="card">
          <div class="row align-items-center">
            <div class="col-4">
              <div class="d-flex flex-column p-4">
                <div class="label-roboto-400">Almacen</div>
                <div class="pt-1">
                  <select
                    v-model="almacenSelect"
                    class="form-select"
                    @change="selectAlmacenChange"
                  >
                    <option value="TODOS">TODOS</option>
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

            <div class="col-1">
              <div class="d-flex flex-column pt-3">
                <div class="pt-1">
                  <button @click="downloadFile" type="button" class="btn btn-success my-auto">
                    <i class="fas fa-file-excel"></i>
                    <span class="px-1">Exportar</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-1">
              <div class="d-flex flex-column pt-3">
                <div class="pt-1">
                  <button
                    @click="printTable"
                    type="button"
                    class="btn btn-secondary"
                  >
                    <i class="fas fa-print"></i>
                    <span class="px-1">Imprimir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-11" style="height: 100vh">
        <div class="card">
          <div class="row">
            <div
              class="col-8 table-scrollable"
              id="printableArea"
              style="height: 70vh"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Articulo</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="articulo in getExistencia"
                    :key="articulo.idArticulo"
                  >
                    <th scope="row">{{ articulo.idArticulo }}</th>
                    <td>{{ articulo.nombreArticulo }}</td>
                    <td>{{ articulo.cantidad }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div
        id="almacenSelectToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">Notificación</strong>
          <small>Hace 1 segundo</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ toastText }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
table thead tr {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}

table thead td {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}

thead {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
}
</style>