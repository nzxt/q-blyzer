<template lang="pug">
  q-page.flex.justify-center(padding)
    q-card
      q-card-section
        Breadcrumbs(:items='breadcrumbs')
      q-card-section.q-pa-none
        component#component(:is="component")
    dialog-initialize-training(:dialog='dialogInitialize' @before-hide='dialogInitialize = false')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { date } from 'quasar'
import { isPlainObject, isEmptyObject } from 'src/utils/helpers'

const TrainingNS = namespace('training')

@Component({
  components: {
    DialogInitializeTraining: () => import('src/components/training/dialogs/InitializeTraining.vue'),
    Breadcrumbs: () => import('src/components/shared/breadcrumbs.vue'),
    Results: () => import('src/components/training/Results.vue')
    // Balls: () => import('src/components/training/Balls.vue')
  }
})
export default class TrainingPage extends Vue {
  @TrainingNS.State('component') component
  @TrainingNS.State('training') training
  @TrainingNS.Mutation('SET_COMPONENT') setComponent
  @TrainingNS.Action('resetTraining') resetTraining

  dialogInitialize: Boolean = false

  created () {
    this.setComponent('Results')

    const { training } = this
    if (!isPlainObject(training) || isEmptyObject(training)) {
      this.dialogInitialize = true
    }
  }

  beforeDestroy () {
    this.resetTraining()
  }

  get breadcrumbs () {
    const { training } = this
    if (!training) return
    return [{
      label: 'Trainings',
      icon: 'mdi-triforce',
      to: 'trainings'
    }, {
      label: date.formatDate(training.dateTimeStamp, 'YYYY/MM/DD HH:mm')
      // icon: 'mdi-triforce'
    }]
  }
}
</script>

<style lang="stylus">
  #component
    width 100%
    min-width 312px
    max-width 460px
</style>
