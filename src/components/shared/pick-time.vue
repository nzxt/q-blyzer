<template lang="pug">
  q-input(
    mask="time"
    hide-bottom-space
    :value="time"
    :label="label"
    :rules="['time']"
    @input='$emit("change:time", $event)'
  )
    template(v-slot:append)
      q-icon.cursor-pointer(name='mdi-clock-outline' class="cursor-pointer")
        q-popup-proxy(
          ref='qDateProxy'
          transition-show='flip-up'
          transition-hide='flip-down'
        )
          q-time(
            minimal
            format24h
            mask="HH:mm"
            :value="time"
            @input='$emit("change:time", $event); $refs.qDateProxy.hide()'
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class PickTime extends Vue {
  @Prop({ default: null })
  readonly time!: string

  @Prop({ default: '' })
  readonly label!: string
}
</script>
