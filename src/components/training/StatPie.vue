<template lang="pug">
  q-card(flat)
    q-card-section
      apexchart(
        type='pie'
        :options="pieChartOptions"
        :series="pieSeries"
        width='100%'
        height='300px'
      )
</template>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    apexchart: VueApexCharts
  }
})
export default class StatPie extends Vue {
  @Prop({ default: () => [] })
  readonly data!: Array<any>

  chartOptions: any = {
    // responsive: [{
    // breakpoint: 400,
    // options: {
    chart: {
      // width: '100%'
      // height: 500
    },
    legend: {
      // show: false,
      // height: 200,
      position: 'bottom'
    }
    // }
    // }],
  }

  get pieChartOptions (): any {
    if (!this.data) return {}
    const labels = this.data.reduce((acc, item) => {
      acc.push(`${item.shotTypeAbbr}(${item.shotDistanceName})`)
      return acc
    }, [])
    return { labels, ...this.chartOptions }
  }

  get pieSeries (): Array<number> {
    if (!this.data) return []
    const data = this.data.reduce((acc, item) => {
      acc.push(item.count)
      return acc
    }, [])
    return data
  }
}
</script>

<style lang="stylus">
  // .apexcharts-svg
  //   height 600 !important
</style>
