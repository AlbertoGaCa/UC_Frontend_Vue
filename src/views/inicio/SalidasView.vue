<script>
import { onMounted } from "vue";

export default {
  props: {},
  setup(props, context) {
    function openModal(nameId) {
      let modal = new bootstrap.Modal(document.getElementById(nameId), {
        keyboard: false,
      });
      modal.show();
    }

    onMounted(() => {
      openModal("modalEntrada");
    });

    return {
      openModal,
    };
  },
};
</script>

<template>
  <div class="label-menu-title pt-5 pb-3">salidas</div>
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

  <div class="row mt-3">
    <div class="col-11" style="height: 100vh">
      <div class="card">
        <div class="row justify-content-between">
          <div class="col-8" style="height: 70vh">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Articulo</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>BOXER-ESC. TEC T12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>BOXER-ESC. TEC T14</td>
                  <td>6</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>BOXER-ESC. TEC T16</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-2">
            <div
              class="
                d-flex
                flex-column
                bd-highlight
                align-items-center
                mb-3
                h-100
                justify-content-center
              "
            >
              <div class="pt-3 mb-auto p-2 bd-highlight">
                <button type="button" class="btn btn-secondary my-auto">
                  <span class="px-1">código de barras</span>
                </button>
              </div>
              <div class="pt-3 p-2 bd-highlight">
                <div class="label-roboto-400">Total: 20</div>
              </div>
              <div class="pt-3 pb-5 p-2 bd-highlight">
                <button
                  type="button"
                  class="btn btn-success my-auto"
                  @click="openModal('modalEntradaConfirmar')"
                >
                  <span class="px-1">confirmar</span>
                </button>
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
          <div class="label-menu-title-modal pl-4">salidas</div>
          <div class="d-flex flex-column p-4">
            <div class="label-roboto-400">Almacén</div>
            <div class="pt-1">
              <select class="form-select">
                <option selected>Todos</option>
                <option value="2">Tienda</option>
                <option value="3">Bodega</option>
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
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
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
              Los artículos seran eliminados del alamcén ${almacen} ¿Desea
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
</template>

<style scoped>
.modal-content {
  border: 0;
}

.modal-footer {
  border-top: 0;
}
</style>