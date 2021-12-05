<template>
  <div>
    <header class="d-flex flex-column">
      <div>
        <router-link to="/">
          <span class="fi-rr-angle-left"></span
        ></router-link>
      </div>
      <div class="header_text">
        <h5>Исследования</h5>
      </div>
    </header>
    <v-container>
      <v-row class="justify-end">
        <v-col class="col-12 col-md-6">
          <div class="d-flex justify-end">
            <button class="action_button" @click="dialog = true">
              Добавить
            </button>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="n in 12"
          :key="n"
          class="d-flex child-flex flex-column"
          cols="3"
          @click="zooming(`https://picsum.photos/500/300?image=${n * 5 + 10}`)"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            :aspect-ratio="1 / 1.3"
            @click="zoomed = !zoomed"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <span id="analysisData">
            <strong>{{ medicalResearch[n].type }}</strong>
            {{ medicalResearch[n].data }}</span
          >
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="zoomed" width="1200">
      <v-img
        :src="zoomedImgUrl"
        :aspect-ratio="1 / 1.3"
        class="grey lighten-2"
        @click="zoomed = !zoomed"
      >
      </v-img>
    </v-dialog>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <h6>Исследование</h6>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" class="pa-2">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="0"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        outlined
                        v-model="date"
                        label="Дата"
                     
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" class="pa-2">
                  <v-select :items="type" label="Тип" outlined></v-select>
                </v-col>
                <v-col cols="12" class="pa-2">
                  <v-text-field label="Место" outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pa-2">
                  <v-file-input
                    v-model="grabImage"
                    label="Фотография"
                    outlined
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col>
                <v-col v-if="image" cols="12" sm="6" class="pa-2">
                  <v-img   :src="image" contain />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <button class="action_button" @click="dialog = false">
              Сохранить
            </button>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      type: ["УЗИ", "Ренген", "Моча", "Кал", "МРТ"],
      zoomed: false,
      dialog: false,
      zoomedImgUrl: "",
      image: null,
      grabImage: null,

      medicalResearch: [
        {},
        { data: "28.10.2020", type: "Узи" },
        { data: "8.01.2021", type: "МРТ" },
        { data: "6.1.2020", type: "Анализ мочи" },
        { data: "15.2.2020", type: "Анализ крови" },
        { data: "23.4.2020", type: "Анализ крови с формулой" },
        { data: "30.7.2020", type: "Анализ кала" },
        { data: "28.11.2020", type: "Ренген" },
        { data: "28.11.2020", type: "Рекомендации" },
        { data: "10.12.2020", type: "Анализ крови" },
        { data: "28.5.2021", type: "Анализ Мочи" },
        { data: "2.7.2021", type: "Анализ кала " },
        { data: "9.10.2021", type: "Узи" },
        { data: "12.11.2021", type: "МРТ" },
      ],
    };
  },
  methods: {
    zooming: function (url) {
      this.zoomedImgUrl = url;
      this.zoomed = true;
    },
  },
  watch: {
    grabImage: function (file) {
      if (!file){
        this.image = null
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result;
      };
    },
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
  aspect-ratio: 2/1;
  padding: 20px;
  border-radius: 16px;
}

#analysisData {
  font-size: clamp(6px, 2.5vw, 16px);
}
.v-image {
  border-radius: 16px;
}
</style>