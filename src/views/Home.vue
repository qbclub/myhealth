<template>
  <v-app class="home" >
   
    <v-main> <router-view></router-view> </v-main>

    <v-footer padless color="white">
      <v-col class="text-center d-flex justify-space-around">
        <div class="d-flex flex-column">
          <span class="fi fi-rr-home"></span>
          <span class="icon_text">Главная</span>
        </div>
        <div class="d-flex flex-column">
          <span class="fi fi-rr-edit"></span>
          <span class="icon_text">Мед.карта</span>
        </div>
        <div class="d-flex flex-column">
          <span class="fi fi-rr-chart-histogram"></span>
          <span class="icon_text">Отчеты</span>
        </div>
        <div class="d-flex flex-column">
          <span class="fi fi-rr-user"></span>
          <span class="icon_text">Профиль</span>
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>

.home{
  overflow: hidden;
}

.v-footer {
  bottom: 0;
  left: 0;
  height: 56px;
  position: sticky;
  filter: drop-shadow(0px 4px 16px rgba(4, 21, 62, 0.16));
  .fi {
    font-size: 20px;
    opacity: 0.48;
  }
  .icon_text {
    line-height: 1;
    font-size: 10px;
    opacity: 0.48;
  }
}
</style>
