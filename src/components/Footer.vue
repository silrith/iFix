<template>
  <footer class="footer">
    <div class="social-media">
      <font-awesome-icon
        :icon="['fab', 'facebook']"
        style="color: #005eff; padding: 1px"
      />
      <font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
      <font-awesome-icon :icon="['fab', 'twitter']" style="color: #005eff" />
    </div>
  </footer>
</template>

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
