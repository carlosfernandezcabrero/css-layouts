<template>
  <div class="container container--flex">
    <div class="row row--medium">
      <div class="menu">
        <a href="#" class="menu__brand">
          <img src="../assets/img/mi-logo.png" alt="logo" class="menu__img">
        </a>
        <ul v-if="displayMenu" class="menu__elements--left">
          <li class="menu__link"><a href="#" class="menu__a">Link 1</a></li>
          <li class="menu__link"><a href="#" class="menu__a">Link 2</a></li>
        </ul>
        <div class="menu__actions">
          <button v-if="!displayMenu" class="button button--menu" role="button" v-on:click="changeStatusMenu">
            Show Menu
          </button>
          <button v-if="displayMenu" class="button button--menu" role="button" v-on:click="changeStatusMenu">
            Hide Menu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      displayMenu: true
    }
  },
  methods: {
    changeStatusMenu() {
      this.displayMenu = !this.displayMenu;
    }
  }
}
</script>

<style scoped>
@import '../assets/css/styles.css';

.menu {
  border-bottom: gray solid 1px;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}

.menu__brand {
  display: flex;
  justify-content: center;
}

.menu__img {
  width: min(100%, 5rem);
}

.menu__elements--left {
  display: flex;
  column-gap: 2rem;
  row-gap: 1rem;
  flex-grow: 1;
}

.menu__link {
  list-style: none;
}

.menu__a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #2c3e50;
}

.menu__a:hover {
  color: #e76f51;
  font-weight: bold;
}

.button {
  background-color: #2a9d8f;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-inline: 25%;
  border: none;
  border-radius: 2px;
}

.button:hover {
  cursor: pointer;
}

.menu__actions {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

@media only screen and (min-width: 769px) {
  .button--menu {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
    grid-row-gap: 1rem;
  }

  .menu__elements--left {
    display: block;
    order: 3;
  }

  .menu__link:hover a {
    color: #2c3e50;
    border-bottom: #2a9d8f solid 2px;
    padding-inline: 1rem;
    font-weight: normal;
  }

  .menu__link {
    margin-top: 8px;
  }
}
</style>