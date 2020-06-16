<template lang='pug'>
  .demo
    .bar-echarts__box
      bar-echarts
    .bar-echarts__box
      line-echarts
</template>
<script>
import barEcharts from '@/components/bar-echarts'
import lineEcharts from '@/components/line-echarts'

export default {
  name: 'demo',
  components: {
    barEcharts,
    lineEcharts
  }
}
</script>
<style lang='scss'>
@import './index.scss'
</style>