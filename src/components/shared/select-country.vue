<template lang="pug">
  q-select(
    label="Country"
    :value="country"
    input-debounce="0"
    :use-input='!country'
    emit-value
    options-dense
    option-value='id'
    option-label='name'
    :options="options"
    @filter="filterFn"
    @input='$emit("change:country", $event)'
  )
    template(v-slot:option='scope')
      q-item.q-py-none.q-px-md(
        dense
        :class='scope.focused ? "bg-grey-4" : ""'
        v-bind='scope.itemProps'
        v-on='scope.itemEvents'
      )
        q-item-section(avatar)
          span.text-body2 {{ scope.opt.alpha3 }}
        q-item-section
          span.text-body2 {{ scope.opt.name }}
        q-item-section(avatar)
          q-avatar(size='24px')
            flag(:iso='scope.opt.alpha2', style='font-size:24px;border-radius:50%')

    template(v-slot:append)
      q-icon(name='mdi-close' v-if='country' @click='$emit("change:country", null)')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ICountry } from 'src/models/country'

const Dictionaries = namespace('dictionaries')

@Component({})
export default class SelectCountry extends Vue {
  @Prop({ default: '' })
  readonly countryId!: string
  @Dictionaries.State('countries') countries

  filter: string = ''

  get options () {
    const needle = this.filter
    if (!needle) return this.countries
    return this.countries.filter(x => x.alpha3.toLowerCase().indexOf(needle) > -1 || x.name.toLowerCase().indexOf(needle) > -1)
  }

  get country (): ICountry {
    return this.countries.find(x => x.id === this.countryId)
  }

  filterFn (val, update, abort) {
    // if (val.length < 1) {
    //   abort()
    //   return
    // }
    update(() => {
      const needle = val.toLowerCase()
      this.filter = needle
    })
  }
}
</script>
