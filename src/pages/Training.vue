<template lang="pug">
  q-page.flex.justify-center(padding)
    q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width:10em"')
      q-card-section
        Breadcrumbs(:items='breadcrumbs')
      q-card-section.q-pa-none
        component#component(
          :is="component"
          @change:component='setComponent($event)'
        )
    dialog-initialize-training(
      :dialog='dialogInitialize'
      @before-hide='dialogInitialize = false'
    )
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { date } from 'quasar'
import { isPlainObject, isEmptyObject } from 'src/utils/helpers'
import { ITraining } from 'src/models/training'

const TrainingNS = namespace('training')

@Component({
  components: {
    DialogInitializeTraining: () => import('src/components/training/dialogs/InitializeTraining.vue'),
    Breadcrumbs: () => import('src/components/shared/breadcrumbs.vue'),
    Results: () => import('src/components/training/Results.vue'),
    Balls: () => import('src/components/training/Balls.vue')
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
    this.isNewTraining(this.training)
  }

  @Watch('training')
  onChangeTraining (value: ITraining | null) {
    this.isNewTraining(value)
  }

  isNewTraining (value: any) {
    if (!isPlainObject(value) || isEmptyObject(value)) {
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
