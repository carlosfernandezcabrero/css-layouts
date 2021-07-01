<template>
  <Menu></Menu>
  <div class="main" role="main">
    <div class="container container-flex">
      <div class="row row-medium">
        <h3 class="row__title">BEM elements</h3>
        <div class="cards cards-grid">
          <div class="card card-gray">
            <h3 class="card__title">Blocks</h3>
            <pre class="card__text">
            <code class="card__code">
&lt;div class="card">

    ...

&lt;/div>
            </code>
          </pre>
          </div>
          <div class="card card-gray">
            <h3 class="card__title">Elements</h3>
            <pre class="card__text">
            <code class="card__code">
&lt;div class="card">
    &lt;h3 class="card__title">
        Elements
    &lt;/h3>
&lt;/div>
            </code>
          </pre>
          </div>
          <div class="card card-gray">
            <h3 class="card__title">Modifiers</h3>
            <pre class="card__text">
            <code class="card__code">
&lt;div class="row |
            row-medium |
            row-flex">
    &lt;div class="card">
        &lt;h3 class="card__title">
            Elements
        &lt;/h3>
    &lt;/div>
&lt;/div>
            </code>
          </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-flex">
      <div class="row row-medium">
        <h3 class="row__title">Interesting links</h3>
        <div class="card card-flex">
          <div class="card__image__container">
            <img src="./assets/img/handbook.png" alt="handbook" class="card__image">
          </div>
          <div class="card__text">
            <ul class="card__links">
              <li class="card__link">
                <a href="#" class="card__a">https://9elements.com/bem-cheat-sheet/</a>
              </li>
              <li class="card__link">
                <a href="#" class="card__a">https://youtu.be/bvnzyXGkNY4</a>
              </li>
              <li class="card__link">
                <a href="#" class="card__a">https://en.bem.info/methodology/quick-start/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: whitesmoke;
}

.card-gray {
  background-color: lightgray;
}

.card__image__container {
  width: min(100%, 10rem);
}

.card__text {
  flex-grow: 1;
}

.card__image {
  width: 100%;
}

.card__links {
  padding-left: 0;
}

.card__link {
  list-style: none;
  margin-bottom: 5px;
}

.card__a {
  word-break: break-all;
}
</style>
