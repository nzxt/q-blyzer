<template lang="pug">
  q-input(
    mask="date"
    :value="date"
    :label="label"
    :rules="['date']"
    @input='$emit("change:date", $event)'
  )
    template(v-slot:append)
      q-icon.cursor-pointer(name='mdi-calendar' class="cursor-pointer")
        q-popup-proxy(
          ref='qDateProxy'
          transition-show='flip-up'
          transition-hide='flip-down'
        )
          q-date(
            minimal
            mask="YYYY/MM/DD"
            :value="date"
            @input='$emit("change:date", $event); $refs.qDateProxy.hide()'
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class PickDate extends Vue {
  @Prop({ default: null })
  readonly date!: string

  @Prop({ default: '' })
  readonly label!: string
}
</script>
