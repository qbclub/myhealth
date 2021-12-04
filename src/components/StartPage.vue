<template>
  <div>
    <header class="d-flex flex-column">
      <div>
        <span class="fi-rr-angle-left"></span>
      </div>
      <div class="header_text">
        <h5>Главная</h5>
      </div>
    </header>
    <v-container>
      <v-row class="justify-center">
        <v-col
          v-for="(item, index) in menuButtons"
          :key="index"
          class="col-12 col-sm-6"
        >
          <router-link :to="item.path">
            <div :style="item.background" class="main_button">
              <h6>{{ item.header }}</h6>
              <p class="pt-2">{{ item.text }}</p>
            </div>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menuButtons: [
        {
          header: "Мониторинг здоровья",
          text: "фиксируй результаты наблюдений",
          background:
            " background:linear-gradient(34.29deg, #e4edfb 0%, #f6f9fe 100%)",
          path: "/monitoring",
        },
             {
          header: "Исследовния",
          text: "сохраняй анализы и исследования",
          background:
            " background:linear-gradient(34.29deg, #E3F3D8 0%, #F6FCF3 100%)",
          path: "/",
        },
        {
          header: "Врачи",
          text: "расписание, контакты",
          background:
            " background:linear-gradient(34.29deg, #FBECDD 0%, #FEFAF6 100%)",
          path: "/",
        },
   
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  z-index: 3;
  div {
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 8px;

    span {
      font-size: 20px;
    }
  }
  .header_text {
    padding-left: 24px;
  }
}
.main_button {
  aspect-ratio: 2.5/1;
  padding: 20px;
  border-radius: 16px;
  box-shadow:none;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
     box-shadow :(0px 4px 16px rgba(4, 21, 62, 0.16));
  }
}
</style>