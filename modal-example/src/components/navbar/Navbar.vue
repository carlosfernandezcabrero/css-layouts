<template>
  <div class="navbar navbar--center bg--dark">
    <a href="#" class="navbar__brand">
      <img :src="logoPath" alt="logo" class="navbar__logo" />
    </a>
  </div>
</template>

<script>
import image from "../../assets/img/mi-logo.png";

import("../../assets/css/styles.css");
import("../../assets/css/navbar.css");

export default {
  name: "Navbar",
  data: function () {
    return {
      logoPath: image,
    };
  },
};
</script>
