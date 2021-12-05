<template>
  <div >
    <v-container>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import router from "./router/index";
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
  //  router.push({ path: "/hello" });
  },
};
</script>
<style lang="scss" scoped>

.container{
  padding: 0;
  overflow: hidden;

  
}
</style>
