<template>
  <div>
    <header class="d-flex flex-column">
      <div>
        <router-link to="/">
          <span class="fi-rr-angle-left"></span
        ></router-link>
      </div>
      <div class="header_text">
        <h5>Расписание врачей</h5>
      </div>
    </header>
    <v-container>
      <v-row class="justify-end">
        <v-col class="col-6 col-md-3 pl-0 pr-0 pb-0">
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
                class="mb-0 mr-4 ml-4"
                v-model="date"
                outlined
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker> </v-menu
        ></v-col>
        <v-col class="col-6 col-md-3 pl-0 pb-0">
          <div class="d-flex justify-md-end justify-center">
            <v-text-field
              class=""
              v-model="filtered"
              outlined
              label="Профиль"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>

            <!-- <button v-on:click="findDoctor" class="action_button">Найти</button> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          class="col-12 col-md-6"
          v-for="(doctor, index) in doctors"
          :key="index"
        >
          <div class="d-flex pa-2 doctor_card">
            <div class="flex-grow-1">
              <p>
                {{ doctor.speciality }}
              </p>
              <p >{{ doctor.name.toUpperCase() }}</p>
              <p class="ma-0">
                прием: c {{ doctor.operatingMode.start }} до
                {{ doctor.operatingMode.end }}
                <br />
                адрес: {{ doctor.address }}
                <br />
                телефон: <a :href="'tel:' + doctor.phone">{{ doctor.phone }}</a>
              </p>
            </div>

            <v-img
              contain
              min-width="120"
              max-width="120"
              aspect-ratio="1"
              :src="doctor.picture"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import doctors from "../db/dbase.json";
export default {
  data: function () {
    return {
      doctors: doctors,
      allDoctors: doctors,
      filtered: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
    };
  },
  methods: {
    findDoctor: function () {
      this.filtered == ""
        ? (this.doctors = this.allDoctors)
        : (this.doctors = this.doctors.filter((doctor) =>
            doctor.speciality.includes(this.filtered.toLowerCase())
          ));
    },
  },
  watch: {
    filtered: function () {
      this.findDoctor();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-text-field__details {
  padding: 0;
  width: 0;
  height: 0;
}
.doctor_card {
  padding: 20px;
  border-radius: 16px;

  transition: box-shadow 0.2s ease-in-out;

  box-shadow: (0px 4px 16px rgba(4, 21, 62, 0.16));
}
.v-input__slot {
  margin: 0;
}

.v-text-field__details {
  height: 0;
  margin: 0;
}
</style>