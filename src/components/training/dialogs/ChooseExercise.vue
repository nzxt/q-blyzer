<template lang="pug">
  q-dialog(
      :value='dialog'
      @before-hide='$emit("before-hide")'
    )
      q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width: 360px"')
        q-card-section
          .text-h6 Choose training options..

        q-card-section
          Court(ref='court')

  //-     v-card-actions
  //-       v-btn.secondary(icon large @click='onCancel')
  //-         v-icon.mdi-24px mdi-reply
  //-         //- | {{ $t('forms.back') }}

  //-       v-spacer
  //-       ChooseShotTypeDialog(ref='shotType')
  //-       v-spacer

  //-       v-btn.warning(icon large @click='onSubmit' :loading='loading' :disabled='!isValid')
  //-         //- | {{ $t('forms.start') }}
  //-         v-icon.mdi-24px mdi-arrow-right-drop-circle-outline
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

// import GlobalMixins from '~/mixins/global'
// import ValidateRules from '~/mixins/validate'

// import enums from '~/assets/enums'

const TrainingNS = namespace('training')

@Component({
  components: {
    Court: () => import('src/components/Court.vue')
    // ChooseShotTypeDialog: () => import('~/components/dialogs/ChooseShotType.vue')
  }
  // mixins: [GlobalMixins, ValidateRules]
})
export default class TrainingExercise extends Vue {
  @Prop({ default: false })
  readonly dialog!: Boolean

  // enums: any = enums

  loading: Boolean = false

  // @TrainingNS.State('training') stateTraining
  @TrainingNS.State('shotBox') stateShotBox
  @TrainingNS.State('shotType') stateShotType
  @TrainingNS.State('shotDistance') stateShotDistance

  // @TrainingNS.Mutation(types.SET_SHOT_BOX) mutationSetShotBox
  // @TrainingNS.Mutation(types.SET_SHOT_TYPE) mutationSetShotType
  // @TrainingNS.Mutation(types.SET_SHOT_DISTANCE) mutationSetShotDistance

  // created () {
  //   this.$bus.$on('ShowChooseExerciseDialog', this.show)
  // }

  // deforeDestroy () {
  //   this.$bus.$off('ShowChooseExerciseDialog')
  // }

  // show () {
  //   this.dialog = true
  // }

  // @Watch('dialog')
  // onChangeShow (value: Boolean) {
  //   if (!value) return
  //   this.$nextTick((this.$refs.court as any).fitStageIntoParentContainer)
  // }

  // onSubmit (): void {
  //   this.$emit('exerciseSelected')
  //   this.dialog = false
  // }

  // onCancel (): void {
  //   // this.$emit('changeComponent', 'Results')
  //   this.dialog = false
  // }

  // get isValid (): Boolean {
  //   return Number.isInteger(this.stateShotBox) && Number.isInteger(this.stateShotType) && (typeof this.stateShotDistance === 'number')
  // }

  // get throwDistances (): string[] {
  //   const labels = this.enums.throwDistances.reduce((acc, item) => {
  //     acc.push(item.text)
  //     return acc
  //   }, [])
  //   return labels
  // }

  // get shotDistanceName () {
  //   if (!Number.isInteger(this.shotDistance)) return
  //   return this.throwDistances[this.shotDistance]
  // }

  // get shotDistance (): number | null {
  //   return this.stateShotDistance
  // }

  // set shotDistance (value: number) {
  //   this.mutationSetShotDistance(value)
  // }
}
</script>
