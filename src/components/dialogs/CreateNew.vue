<template lang="pug">
  q-dialog(
    :value="dialog"
    transition-show="flip-down"
    transition-hide="flip-up"
    @before-hide='$emit("before-hide")'
  )
    q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width:10em"')
      q-card-section
        .text-h6 Create new..
      q-card-section.row.q-gutter-md
        q-btn.col(stack @click='createNew("match")' disabled)
          q-icon(name='mdi-trophy' size='36px')
          .text-subtitle1.q-pt-xs Match
        q-btn.col(stack @click='createNew("training")')
          q-icon(name='mdi-triforce' size='36px')
          .text-subtitle1.q-pt-xs Training
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

@Component({})
export default class DialogCreateNew extends Vue {
  @TrainingNS.Action('resetTraining') resetTraining

  @Prop({ default: false })
  readonly dialog!: Boolean

  createNew (type: string) {
    switch (type) {
      case 'match': {
        // this.resetMatch()
        // this.$router.push('match')
        break
      }
      case 'training': {
        this.resetTraining()
        this.$router.push('training')
        break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
