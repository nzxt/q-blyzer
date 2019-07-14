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
      q-card-section
        q-btn.full-width(@click='$router.push("match")' disabled)
          q-icon(left name='mdi-trophy')
          .text-subtitle1.q-pt-xs Match
      q-card-section
        q-btn.full-width(@click='$router.push("training")')
          q-icon(left name='mdi-triforce')
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
