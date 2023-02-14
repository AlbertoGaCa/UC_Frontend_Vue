
<script>
import router from "../router/index";
export default {
  methods: {
    validateLogin(e) {
      router.push({ name: "inicio" });
    },
  },
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-9"></div>
        <div class="col-3">
          <div class="card">
            <div class="card-body my-auto">
              <div class="d-flex flex-column p-4">
                <div class="p-5 text-center">
                  <div class="title text-break text-justify text-wrap">
                    UNIFORMES CANSECO
                  </div>
                </div>
                <div class="p-1">
                  <div class="label-roboto-400">Usuario</div>
                </div>
                <div class="p-2">
                  <select class="form-select">
                    <option selected>Cajero</option>
                    <option value="1">Veronica</option>
                    <option value="2">Abel</option>
                    <option value="3">Alberto</option>
                  </select>
                </div>
                <div class="pt-4">
                  <div class="label-roboto-400">Contraseña</div>
                </div>
                <div class="p-2">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div class="pt-4 text-center">
                  <button type="button" class="btn btn-primary" @click="validateLogin">
                    <span class="mx-5">entrar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/*
.col-8 {
  background-color: aqua;
}
.col-4 {
  background-color: aqua;
}
*/
.card {
  height: 100vh;
}
.container-fluid {
  background-color: #f7f7f7;
  --bs-gutter-x: 0rem;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
}

option {
  border-radius: 15px;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 20px;
}
input {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 20px;
}
</style>