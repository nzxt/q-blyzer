<template lang="pug">
  #statistics
    q-tabs(
      v-model="tab"
      align="justify"
      narrow-indicator
      inline-label
      class="bg-blue-5 text-white shadow-2"
    )
      q-tab(name="list" icon='mdi-format-list-numbered' label="List")
      q-tab(name="chart" icon='mdi-chart-donut-variant' label="Chart")

    q-tab-panels.text-center(
      v-model='tab'
      transition-prev='scale'
      transition-next='scale'
    )
      //- animated
      q-tab-panel.q-pa-none(name='list')
        StatList(:data='data')

      q-tab-panel.q-pa-none(name='chart')
        StatPie(:data='data')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import { AsyncComputed } from '~/utils/decorators'

// import GlobalMixin from '~/mixins/global'
// import enums from '~/assets/enums'

@Component({
  components: {
    StatList: () => import('./StatList.vue'),
    StatPie: () => import('./StatPie.vue')
    // StatBar: () => import('./StatBar.vue')
  }
  // mixins: [GlobalMixin]
})
export default class TrainingStatistics extends Vue {
  @Prop({ default: () => [] })
  data!: Array<any>

  // enums: any = enums

  tab: string = 'list'

  // @AsyncComputed({ default: [] })
  // statistics (): Array<any> {
  //   const id = this.trainingId
  //   if (!this.guidRegex.test(id)) return []

  //   return this.$api.ApiTrainingByIdGet({ id })
  //     .then(({ data }) => {
  //       data.map((x) => {
  //         x.shotTypeName = this.getShotTypeName(x.shotType)
  //         x.shotTypeAbbr = this.getShotTypeAbbr(x.shotType)
  //         x.shotDistanceName = this.getShotDistanceName(x.distance)
  //       })
  //       return data
  //     })
  // }

  // getShotTypeName (value: number): string {
  //   if (!Number.isInteger(value)) return
  //   return this.enums.shotTypes.find(x => x.id === value).text
  // }

  // getShotTypeAbbr (value: number): string {
  //   if (!Number.isInteger(value)) return
  //   return this.enums.shotTypes.find(x => x.id === value).abbr
  // }

  // getShotDistanceName (value: number): string {
  //   if (!Number.isInteger(value)) return
  //   return this.enums.throwDistances.find(x => x.id === value).text
  // }
}
</script>
