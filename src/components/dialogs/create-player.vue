<template lang="pug">
  q-dialog(
    :value='dialog'
    @before-hide='$emit("before-hide")'
  )
    //- maximized
    q-card
      q-card-section
        .text-h6 Create new player..
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CreatePlayer extends Vue {
  @Prop({ default: false })
  readonly dialog!: Boolean
}
</script>

<style lang="stylus" scoped>

</style>
