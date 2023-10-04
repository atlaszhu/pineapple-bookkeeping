import * as echarts from "echarts";
import { defineComponent, onMounted, ref } from "vue";
export const PieChart = defineComponent({
  setup() {
    const refPieChart = ref<HTMLDivElement>();
    onMounted(() => {
      if (!refPieChart.value) return;
      const option = {
        grid: [{ left: 0, right: 0, top: 0, bottom: 0 }],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      echarts.init(refPieChart.value).setOption(option);
    });

    return () => <div ref={refPieChart}></div>;
  },
});
