<template lang="pug">
  q-input(
    mask="date"
    :value="date"
    label="Date of Birth"
    @input='$emit("change:dateOfBirth", $event)'
  )
    template(v-slot:append)
      q-icon.cursor-pointer(name='mdi-calendar')
        q-popup-proxy(
          ref='qDateProxy'
          transition-show='flip-up'
          transition-hide='flip-down'
        )
          q-date(
            minimal
            mask="YYYY/MM/DD"
            :value="date"
            @input='$emit("change:dateOfBirth", $event); $refs.qDateProxy.hide()'
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { date } from 'quasar'

@Component({})
export default class InputDateOfBirth extends Vue {
  @Prop({ default: null })
  readonly date!: string
}
</script>
