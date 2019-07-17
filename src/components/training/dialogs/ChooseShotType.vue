<template lang="pug">
  v-dialog(
    v-model='dialog'
    width='320'
  )
    template(v-slot:activator="{ on }")
      v-btn(
        round
        v-on='on'
        :color='Number.isInteger(shotType) ? "info" : "error"'
      ) {{ shotTypeName }}

    v-list.py-0
      v-subheader.title.font-weight-thin
        | Select Shot Type
        v-spacer
        v-btn(icon flat @click='onClose')
          v-icon.mdi-24px mdi-close
      v-list-tile(
        v-for='scored in enums.shotTypes'
        :key='`st${scored.id}`'
        :class='scored.id === shotType ? "light-grey" : ""'
        @click.stop.prevent='onClick(scored.id)'
      )
        v-list-tile-content
          | {{ scored.text }}
        v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as trainingStore from '~/store/training'

import enums from '~/assets/enums'

const TrainingNS = namespace(trainingStore.name)
const { types } = trainingStore

@Component({})
export default class ChooseShotType extends Vue {
  @TrainingNS.State('shotType') stateShotType
  @TrainingNS.Mutation(types.SET_SHOT_TYPE) mutationSetShotType

  enums: any = enums
  dialog: Boolean = false

  onClick (id: number): void {
    this.shotType = id
    this.dialog = false
  }

  onClose (): void {
    // this.shotType = null
    this.dialog = false
  }

  get shotType (): number | null {
    return this.stateShotType
  }
  set shotType (value: number) {
    this.mutationSetShotType(value)
  }

  get shotTypeName (): string {
    if (this.shotType) {
      const shotTypeObj = this.enums.shotTypes.find(x => x.id === this.shotType)
      if (shotTypeObj) {
        return shotTypeObj.text
      }
    }
    return 'Choose one of Shot Types!'
  }
}
</script>
