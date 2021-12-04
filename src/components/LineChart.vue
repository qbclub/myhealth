
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["mType"],
  computed: {
    monitoringResult: function () {
      switch (this.mType) {
        case "Давление":
          return [
            {
              label: "Нижнее",
              backgroundColor: "#E3F3D8",
              data: [110, 100, 100, 110, 120, 125, 120],
            },
            {
              label: "Верхнее",
              backgroundColor: "#e4edfb",
              data: [140, 130, 135, 140, 160, 150, 155],
            },
          ];
        case "Пульс":
          return [
            {
              label: "Ударов в минуту",
              backgroundColor: "#e4edfb",
              data: [70, 75, 70, 60, 80, 75, 80],
            },
          ];
        case "Температура":
          return [
            {
              label: "Градусов С",
              backgroundColor: "#e4edfb",
              data: [36.6, 36.8, 39, 40, 40, 38, 36.6],
            },
          ];
        case "Уровень сахара":
          return [
            {
              label: "ммоль/л",
              backgroundColor: "#E3F3D8",
              data: [4.4, 4.1, 5.9, 6, 6.5, 6.5, 6],
            },
          ];
        case "Сатурация":
          return [
            {
              label: "%",
              backgroundColor: "#E3F3D8",
              data: [98, 96, 95, 92, 91, 93, 95],
            },
          ];
        case "Вес":
          return [
            {
              label: "кг",
              backgroundColor: "#E3F3D8",
              data: [55, 55.5, 56, 57, 57, 56.5, 56],
            },
          ];
        default:
          console.log("Sorry, we are out of " + this.mType + ".");
      }
    },
  },

  mounted() {
    this.renderChart(
      {
        labels: [
          "20 окт",
          "21 окт",
          "22 окт",
          "24 окт",
          "25 окт",
          "26 окт",
          "27 окт",
        ],
        datasets: this.monitoringResult,
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style>
</style>