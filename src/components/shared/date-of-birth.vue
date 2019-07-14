<template lang="pug">
  q-input(
    mask="date"
    :value="date"
    label="Date of Birth"
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
            :value="date"
            @input='($evt) => { $emit("change::date", $evt); $refs.qDateProxy.hide() }'
          )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class FieldDateOfBirth extends Vue {
  @Prop({ default: null })
  readonly date!: Date
}
</script>
