<template lang="pug">
  //- q-card(v-if='items.length')
  //-   q-card-section
  q-breadcrumbs(v-if='items.length')
    template(v-slot:separator)
      q-icon(
        size="1em"
        name="mdi-chevron-right"
        color="primary"
      )
    //- q-breadcrumbs-el(icon='mdi-home' to='/')
    q-breadcrumbs-el(
      style='font-size: 1.3em'
      v-for='item in items'
      :key='item.label'
      :label='item.label'
      :icon='item.icon'
      :to='item.to'
    )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

type TBreadcrumb = {
  label: string
  icon: string
  to: string
}

@Component({})
export default class Breadcrumbs extends Vue {
  @Prop({ default: () => ([]) })
  readonly items!: TBreadcrumb[]
}
</script>

<style lang="stylus" scoped>

</style>
