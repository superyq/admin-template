<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";

export default {
  name: "bar-echarts",
  data() {
    return {
      options: {
        color: ["#00FFFF", "#F7A109"],
        title: {
          text: "去年和今年版本数对比",
          textStyle: {
            fontSize: 18,
            color: "#ffffff"
          },
          show: true
        },
        legend: {
          data: [
            {
              name: "2019年"
            },
            {
              name: "2020年"
            }
          ],
          top: "15%",
          left: "15%",
          icon: "circle",
          itemHeight: 5,
          itemGap: 25,
          align: "auto",
          textStyle: {
            color: "#5F89F9",
            fontSize: 12,
            padding: -10
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["一季度", "二季度", "三季度", "四季度"],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#5F89F9"
            }
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#5F89F9"
            }
          }
        },
        series: [
          {
            name: "2019年",
            type: "line",
            data: [320, 332, 301, 334],
            itemStyle: {
              normal: {
                barBorderRadius: 200,
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#00FFFF"
                  }
                }
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: "rgba(0,255,255,0.44)",
              barBorderRadius: 200
            }
          },
          {
            name: "2020年",
            type: "line",
            data: [120, 132, 101, 134],
            itemStyle: {
              normal: {
                barBorderRadius: 200,
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#FDB725"
                  }
                }
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: "rgba(251,167,5,0.44)",
              barBorderRadius: 200
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>