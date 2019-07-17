<template lang="pug">
  #choose-exercise
    q-dialog(
      maximized
      persistent
      no-esc-dismiss
      :value='dialog'
      @before-hide='$emit("before-hide")'
      transition-show='rotate'
      transition-hide='rotate'
    )
      q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width: 360px"')
        q-card-section
          .text-h6 Choose training options..

        q-card-section.q-py-none
          Court

        q-card-actions.row.q-py-md.q-gutter-sm
          q-btn.col-3(flat @click='onCancel')
            q-icon(left name='mdi-arrow-left-drop-circle-outline')
            | {{ $t('forms.back') }}
          SelectShotType.col
          q-btn.col-3(color='warning' @click='onSubmit' :disabled='!isValid')
            | {{ $t('forms.start') }}
            q-icon(right name='mdi-arrow-right-drop-circle-outline')
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

@Component({
  components: {
    Court: () => import('src/components/Court.vue'),
    SelectShotType: () => import('src/components/shared/select-shot-type.vue')
  }
})
export default class TrainingExercise extends Vue {
  @Prop({ default: false })
  readonly dialog!: Boolean

  @TrainingNS.State('shotBox') shotBox
  @TrainingNS.State('shotType') shotType
  @TrainingNS.State('shotDistance') shotDistance

  @TrainingNS.Mutation('SET_COMPONENT') setComponent

  onSubmit (): void {
    this.$emit('before-hide')
  }

  onCancel (): void {
    this.$emit('before-hide')
    this.setComponent('Results')
  }

  get isValid (): Boolean {
    return Number.isInteger(this.shotBox) &&
      Number.isInteger(this.shotType) &&
      (typeof this.shotDistance === 'number')
  }
}
</script>
