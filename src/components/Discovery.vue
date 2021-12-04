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
      <v-row>
        <v-col>
          <h6>Сохранить</h6>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col class="col-12 col-md-6">
          <div class="d-flex flex-column align-center">
            <input type="text" label="date">
            <input type="text" label="date">

            
            <button type="submit" class="action_button">Cохранить</button>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
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
  aspect-ratio: 2/1;
  padding: 20px;
  border-radius: 16px;
}
form {
  width: 100%;
}
</style>