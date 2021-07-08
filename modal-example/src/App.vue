<template>
  <header class="container container--fluid m-0">
    <navbar></navbar>
  </header>
  <div role="main" class="container container--medium">
    <button
      type="button"
      role="button"
      class="btn bg--success animate__animated animate__backInDown"
      v-on:click="showModal()"
    >
      Press me to show modal
    </button>
  </div>
  <footer class="container container--fluid m-0 footer bg--dark">
    <p class="footer__text text--center">Design by Carlos Fernandez Cabrero</p>
  </footer>

  <div id="modal" class="modal">
    <div class="modal__content animate__animated animate__backInDown">
      <span class="modal__close" v-on:click="hideModal()">&times;</span>
      <h2 class="modal__tittle text--center">Users logged now</h2>
      <div class="scroll-content">
        <table class="table">
          <thead class="table__header">
            <tr class="table__row">
              <th class="table-header__item text--left">ID</th>
              <th class="table-header__item text--left">Name</th>
              <th class="table-header__item text--left">Last Names</th>
              <th class="table-header__item text--left">Email</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__row">
              <td class="table-body__item">20</td>
              <td class="table-body__item">Carlos</td>
              <td class="table-body__item">Jimenez Gonzalez</td>
              <td class="table-body__item">carlos@gmail.com</td>
            </tr>
            <tr class="table__row">
              <td class="table-body__item">21</td>
              <td class="table-body__item">Arancha</td>
              <td class="table-body__item">Benitez Laurejo</td>
              <td class="table-body__item">arancha@gmail.com</td>
            </tr>
            <tr class="table__row">
              <td class="table-body__item">22</td>
              <td class="table-body__item">Eugenio</td>
              <td class="table-body__item">Sanchez Fernandez</td>
              <td class="table-body__item">eugenio@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    showModal() {
      document.getElementById("modal").style.display = "block";
    },
    hideModal() {
      document.getElementById("modal").style.display = "none";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
