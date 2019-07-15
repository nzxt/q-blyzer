<template lang="pug">
  q-page.flex.flex-center
    component#component(:is="component")
    dialog-initialize-training(:dialog='dialogInitialize' @before-hide='dialogInitialize = false')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { isPlainObject, isEmptyObject } from 'src/utils/helpers'

const Training = namespace('training')

@Component({
  components: {
    DialogInitializeTraining: () => import('src/components/training/dialogs/InitializeTraining.vue')
    // Results: () => import('src/components/training/Results.vue'),
    // Balls: () => import('src/components/training/Balls.vue')
  }
})
export default class TrainingPage extends Vue {
  @Training.State('component') component
  @Training.State('training') training
  @Training.Mutation('SET_COMPONENT') setComponent
  @Training.Mutation('CLEAR_STATE') clearState

  dialogInitialize: Boolean = false

  created () {
    this.setComponent('Results')

    const { training } = this
    if (!isPlainObject(training) || isEmptyObject(training)) {
      this.dialogInitialize = true
    }
  }

  beforeDestroy () {
    this.clearState()
  }
}
</script>

<style lang="stylus">
  #component
    width 100%
    min-width 312px
    max-width 460px
</style>
