<template>
  <v-container>
    <v-row class="justify-center">
      <v-col
        v-for="(item, index) in menuButtons"
        :key="index"
        class="col-12 col-sm-6"
        ><div :style="item.background" class="main_button">
          <h6>{{ item.header }}</h6>
          <p class="pt-2">{{ item.text }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      menuButtons: [
        {
          header: "Мониторинг здоровья",
          text: "фиксируй показатели, заноси результаты исследований",
          background:
            " background:linear-gradient(34.29deg, #e4edfb 0%, #f6f9fe 100%)",
        },
        {
          header: "Врачи",
          text: "расписание, контакты",
          background:
            " background:linear-gradient(34.29deg, #FBECDD 0%, #FEFAF6 100%)",
        },
        {
          header: "Мед. учреждения",
          text: "телефоны, время работы",
          background:
            " background:linear-gradient(34.29deg, #E3F3D8 0%, #F6FCF3 100%)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_button {
  aspect-ratio: 2.5/1;
  padding: 20px;
  border-radius: 16px;
}
</style>