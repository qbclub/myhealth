<template>
  <div>
    <header class="d-flex flex-column">
      <div>
        <router-link to="/monitoring">
          <span class="fi-rr-angle-left"></span
        ></router-link>
      </div>
      <div class="header_text">
        <h5>{{ name }}</h5>
      </div>
    </header>
    <AddResult/>
    <LineChart :mType="name"> </LineChart>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import AddResult from './AddResult.vue'
export default {
  components: {
    LineChart,
    AddResult
  },
  props: ["name"],
};
</script>

<style>
</style>