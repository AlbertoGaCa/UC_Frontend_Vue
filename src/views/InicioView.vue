<script>
export default {
  data() {
    return {
      selectedStyle: ["", "", "", "", "", "", "", ""],
    };
  },
  methods: {
    changeStyleSelected(item) {
      for (let i = 0; i < this.selectedStyle.length; i++) {
        if (i === item) {
          this.selectedStyle[item] = "label-menu-selected";
        } else {
          this.selectedStyle[i] = "";
        }
      }
    },
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
        <div class="col-2 lateral-menu">
          <div class="card">
            <div class="card-body my-auto">
              <div class="d-flex flex-column p-4">
                <div class="p-3 text-center">
                  <div class="title text-break text-justify text-wrap">
                    UNIFORMES CANSECO
                  </div>
                </div>
                <div class="pt-5">
                  <div>
                    <router-link
                      @click="changeStyleSelected(0)"
                      class="label-menu"
                      :class="selectedStyle[0]"
                      to="/inicio/existencias"
                      >existencias</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      @click="changeStyleSelected(1)"
                      class="label-menu"
                      :class="selectedStyle[1]"
                      to="/inicio/entradas"
                      >entradas</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[2]"
                      @click="changeStyleSelected(2)"
                      to="/inicio/salidas"
                      >salidas</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[3]"
                      @click="changeStyleSelected(3)"
                      to="/inicio/existencias"
                      >ventas</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[4]"
                      @click="changeStyleSelected(4)"
                      to="/inicio/existencias"
                      >devoluciones</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[5]"
                      @click="changeStyleSelected(5)"
                      to="/inicio/existencias"
                      >corte</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[6]"
                      @click="changeStyleSelected(6)"
                      to="/inicio/existencias"
                      >catálogo</router-link
                    >
                  </div>
                </div>
                <div class="pt-2">
                  <div>
                    <router-link
                      class="label-menu"
                      :class="selectedStyle[7]"
                      @click="changeStyleSelected(7)"
                      to="/inicio/existencias"
                      >inventario</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <router-view></router-view>
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
  background-color: #0277fa;
  --bs-card-border-color: #0277fa;
  border-radius: 0 10px 10px 0px;
}

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: white;
}

.label-roboto-400 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}

.label-menu {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 26px;
  color: white;
  text-decoration: none;
}

.label-menu-selected {
  font-family: "Montserrat";
  font-weight: 500;
  color: white;
}

.form-control {
  border-radius: 15px;
}
.form-select {
  border-radius: 15px;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 20px;
}

.btn {
  border-radius: 15px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
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