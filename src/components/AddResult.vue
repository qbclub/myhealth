<template>
  <v-container>
    <v-row class="justify-end">
      <v-col class="col-12 col-md-6">
        <div class="d-flex">
          <input type="text" placeholder="внести результат" class="mr-4" />

          <button type="submit" class="action_button">Cохранить</button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  border-radius: 8px;
  height: 40px;
  width: 272px;

  color: #04153e;
  border: 0.3px solid black;
  text-align: center;
}
</style>