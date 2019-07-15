<template lang="pug">
  q-select(
    label="Athlete"
    :value="player"
    input-debounce="0"
    :use-input='!player'
    emit-value
    options-dense
    option-value='id'
    option-label='fullName'
    :options="options"
    @filter="filterFn"
    @input='$emit("change:player", $event)'
  )
    //- :use-input='!player'
    template(v-slot:option='scope')
      q-item.q-py-none.q-px-md(
        dense
        v-bind='scope.itemProps'
        v-on='scope.itemEvents'
      )
        q-item-section
          span.text-body2 {{ scope.opt.fullName }}
        q-item-section(avatar)
          q-avatar(size='24px')
            flag(:iso='countryById(scope.opt.countryId).alpha2', style='font-size:24px;border-radius:50%')

    template(v-slot:selected-item='scope')
      q-avatar(size='18px')
        flag(:iso='countryById(player.countryId).alpha2', style='font-size:18px;border-radius:50%')
      span.q-ml-sm {{ scope.opt.fullName }}

    template(v-slot:append)
      q-icon(name='mdi-close' v-if='player' @click='$emit("change:player", null)')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import MixinCountry from 'src/mixins/country'
import { IPlayer } from 'src/models/player'
// import { ICountry } from 'src/models/country'

const Dictionaries = namespace('dictionaries')

@Component({
  mixins: [MixinCountry]
})
export default class SelectPlayer extends Vue {
  @Prop({ default: '' })
  readonly playerId!: string

  @Dictionaries.State('players') players
  @Dictionaries.State('countries') countries

  filter: string = ''

  get options () {
    const needle = this.filter
    if (!needle) return this.players
    return this.players.filter(x => x.fullName.toLowerCase().indexOf(needle) > -1)
  }

  get player (): IPlayer {
    return this.players.find(x => x.id === this.playerId)
  }

  filterFn (val, update, abort) {
    if (val.length < 2) {
      abort()
      return
    }

    update(() => {
      const needle = val.toLowerCase()
      this.filter = needle
    })
  }
}
</script>
