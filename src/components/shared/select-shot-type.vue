<template lang="pug">
  q-select#shot-type(
    dense
    outlined
    autofocus
    hide-bottom-space
    label='Shot Type'
    option-value='id'
    option-label='label'
    v-model='model'
    :options='options'
    :color='model ? "positive" : "negative"'
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { TShotType } from 'src/models/_types'
import { getShotTypes } from 'src/utils/enums-helper'

const TrainingNS = namespace('training')

@Component({})
export default class ChooseShotType extends Vue {
  @TrainingNS.State('shotType') shotType
  @TrainingNS.Mutation('SET_SHOT_TYPE') setShotType

  get options (): Array<TShotType> {
    return getShotTypes()
  }

  get model (): TShotType | null {
    return getShotTypes().find(x => x.id === this.shotType) || null
  }
  set model (value: TShotType | null) {
    this.setShotType(value ? value.id : value)
  }
}
</script>

<style lang="stylus" scoped>
  #shot-type
    >>> .q-select__dialog
      max-height 70vh
</style>
