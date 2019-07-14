<template lang="pug">
  q-select(v-model="model" :options="options" label="Standard")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class SelectPlayer extends Vue {
  @Prop({ default: null })
  readonly player!: Date
}
</script>
