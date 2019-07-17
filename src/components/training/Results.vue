<template lang="pug">
  q-card(flat)
    q-card-section.row.q-pt-none
      .text-h6 Shots
      q-space
      q-btn(color='warning' size='sm' rounded @click='')
        q-icon(left name='mdi-plus')
        | Add shots
    //- ChooseExercise(@exerciseSelected='onExerciseSelected')

    q-card-section.q-pa-none(v-if='trainingDetails.length')
      Statistics(:data='trainingDetails')

    //- q-card-actions.row.self-end
      q-btn.col-4(flat @click='onClickBack')
        q-icon(left name='mdi-backburger')
        | Back

    //- q-btn.fixed-bottom.q-ma-lg(round float size='lg' @click='onClickBack')
    //-   q-icon(name='mdi-backburger')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

@Component({
  components: {
    // ChooseExercise: () => import('~/components/dialogs/ChooseExercise.vue'),
    Statistics: () => import('./Statistics.vue')
  }
})
export default class TrainingResults extends Vue {
  @TrainingNS.State('training') training
  @TrainingNS.State('details') trainingDetails
  @TrainingNS.Action('resetTraining') resetTraining

  // onExerciseSelected (): void {
  //   this.mutationClearBalls()
  //   this.$emit('changeComponent', 'Balls')
  // }

  onClickBack (): void {
    this.resetTraining()
    this.$router.push('trainings')
  }
}
</script>
