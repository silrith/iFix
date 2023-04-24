<template>
  <footer class="footer">
    <div class="social-media">
      <font-awesome-icon
        :icon="['fab', 'facebook']"
        style="color: #005eff; padding: 1px"
      />
      <font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        style="color: #005eff; background-color: transparent"
      />
    </div>
    <div class="dropdown">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      language: localStorage.getItem("language"),
      search: null,
    };
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75px; /* footer yüksekliği */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 1;
}

.footer svg {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

.social-media > svg {
  margin-right: 20px;
  font-size: 15px;
}

.instagram {
  display: inline-block;
  border-radius: 5px;
  padding: 0px 1px 0px 1px;
  text-align: center;
  color: #fff;
  background: #d6249f;
  background: radial-gradient(
    circle at 40% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
