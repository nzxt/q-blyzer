<template lang="pug">
  q-dialog(
    :value="dialog"
    transition-show="flip-down"
    transition-hide="flip-up"
    @before-hide='$emit("before-hide")'
  )
    q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width: 360px"')
      q-card-section
        .text-h6 Create new..
      q-card-section.row.q-gutter-md
        q-btn.col(stack @click='$router.push("match")' disabled)
          q-icon(name='mdi-trophy' size='36px')
          .text-subtitle1.q-pt-xs Match
        q-btn.col(stack @click='$router.push("training")')
          q-icon(name='mdi-triforce' size='36px')
          .text-subtitle1.q-pt-xs Training
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class DialogCreateNew extends Vue {
  @Prop({ default: false })
  readonly dialog!: Boolean
}
</script>

<style lang="stylus" scoped>
</style>
