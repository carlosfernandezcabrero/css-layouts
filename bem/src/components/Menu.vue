<template>
  <div class="container container-flex">
    <div class="row row-medium">
      <div class="menu">
        <a href="#" class="menu__brand">
          <img src="../assets/img/mi-logo.png" alt="logo" class="menu__img">
        </a>
        <ul v-if="displayMenu" class="menu__elements__left">
          <li class="menu__link"><a href="#" class="menu__a">Home</a></li>
          <li class="menu__link"><a href="#" class="menu__a">Link 1</a></li>
          <li class="menu__link"><a href="#" class="menu__a">Link 2</a></li>
        </ul>
        <div class="menu__actions">
          <button v-if="!displayMenu" class="button button-menu button-right" role="button" v-on:click="changeStatusMenu">
            Show Menu
          </button>
          <button v-if="displayMenu" class="button button-menu button-right" role="button" v-on:click="changeStatusMenu">
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
}

.menu__brand {
  margin-left: 2rem;
}

.menu__img {
  width: 5rem;
}

.menu__elements__left {
  display: flex;
  gap: 2rem;
  flex-grow: 1;
  margin-left: 4rem;
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

.button-right {
  float: right;
}

@media only screen and (min-width: 769px) {
  .button-menu {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .menu {
    display: grid;
    grid-template-areas: "a b" "c c";
    grid-gap: 0;
  }

  .menu__elements__left {
    display: block;
    margin-left: 0;
    grid-area: c;
  }

  .menu__link:hover a {
    color: #2c3e50;
    border-bottom: #2a9d8f solid 2px;
    padding-inline: 2%;
    font-weight: normal;
  }

  .menu__link:nth-child(1) {
    margin-bottom: 20px;
  }

  .menu__link {
    margin-top: 8px;
  }
}
</style>