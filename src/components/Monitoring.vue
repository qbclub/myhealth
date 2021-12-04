<template>
  <div>
    <header class="d-flex flex-column">
      <div>
        <router-link to="/">
          <span class="fi-rr-angle-left"></span
        ></router-link>
      </div>
      <div class="header_text">
        <h5>Наблюдения</h5>
      </div>
    </header>
    <v-container>
      <v-row class="justify-center">
        <v-col
          v-for="(item, index) in menuButtons"
          :key="index"
          class="col-6 col-md-4"
        >
          <router-link :to='"stat/" + item.header'
            ><div :style="item.background" class="main_button">
              <h6>{{ item.header }}</h6>
              <span :class="item.icon" id="icon"></span>
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
          header: "Давление",
          text: '<span class="fi-rr-angle-left"></span',
          background:
            " background:linear-gradient(34.29deg, #e4edfb 0%, #f6f9fe 100%)",
          icon: "fi-rr-stethoscope",
        },
        {
          header: "Пульс",
          text: "расписание, контакты",
          background:
            " background:linear-gradient(34.29deg, #FBECDD 0%, #FEFAF6 100%)",
          icon: "fi-rr-heart",
        },
        {
          header: "Температура",
          text: "телефоны, время",
          background:
            " background:linear-gradient(34.29deg, #E3F3D8 0%, #F6FCF3 100%)",
          icon: "fi-rr-thermometer-half",
        },
        {
          header: "Уровень сахара",
          text: "фиксируй ",
          background:
            " background:linear-gradient(34.29deg, #e4edfb 0%, #f6f9fe 100%)",
          icon: " fi-rr-cube",
        },
        {
          header: "Сатурация",
          text: "расписание,",
          background:
            " background:linear-gradient(34.29deg, #FBECDD 0%, #FEFAF6 100%)",
          icon: "fi-rr-fingerprint",
        },
        {
          header: "Вес",
          text: "телефоны, время работы",
          background:
            " background:linear-gradient(34.29deg, #E3F3D8 0%, #F6FCF3 100%)",
          icon: "fi-rr-medicine",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.main_button {
  aspect-ratio: 1.5/1;
  padding: 20px;
  border-radius: 16px;
  position: relative;
  #icon {
    font-size: clamp(24px, 8vw, 70px);
    position: absolute;
    bottom: 0;
    right: 10px;
    opacity: 0.7;
  }
  h6 {
    font-size: clamp(16px, 4vw, 24px);
  }
}
</style>