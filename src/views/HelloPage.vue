<template>
  <div class="hello">
    <h1 class="">
      дневник <br />
      моего <br />здоровья
    </h1>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  mounted() {
    window.setTimeout(() => {
      router.push({ path: "/" });
    }, 3500);
  },
};
</script>

<style lang="scss" scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    text-align: center;
    opacity: 0;
    animation-duration: 3.5s;
    animation-name: scaleInOut;
  }
}
@keyframes scaleInOut {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  20% {
    opacity: 1;
    transform: scale(1.5);
  }
  70% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
  }
}
</style>