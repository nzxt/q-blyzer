<template lang="pug">
  q-card(flat)
    q-card-section.row.q-pt-none
      .text-h6 Shots
      q-space
      q-btn(
        color='warning'
        size='sm'
        rounded
        @click='$emit("change:component", "Balls")'
      )
        q-icon(left name='mdi-plus-circle')
        | Add shots

    q-card-section.q-pa-none(v-if='trainingDetails.length')
      Statistics(:data='trainingDetails')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

@Component({
  components: {
    Statistics: () => import('./Statistics.vue')
  }
})
export default class TrainingResults extends Vue {
  @TrainingNS.State('training') training
  @TrainingNS.State('details') trainingDetails
  @TrainingNS.Action('resetTraining') resetTraining
  @TrainingNS.Action('fetchById') fetchTrainingDetails

  mounted () {
    if (!this.training) return
    this.fetchTrainingDetails(this.training.id)
  }

  onClickBack (): void {
    this.resetTraining()
    this.$router.push('trainings')
  }
}
</script>
