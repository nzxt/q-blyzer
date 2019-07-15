<template lang="pug">
  q-dialog(
    persistent
    :value='dialog'
    @before-hide='$emit("before-hide")'
  )
    q-card(:style='$q.screen.lt.sm ? "width: 100vw" : "min-width: 360px"')
      q-card-section
        .text-h6 Create new training..

      q-card-section.row.q-gutter-xl
        pick-date.col(label='Date' :date.sync='dateStamp' @change:date='dateStamp = $event')
        pick-time.col(label='Time' :time.sync='timeStamp' @change:time='timeStamp = $event')

      q-card-section
        select-player(:playerId.sync='playerId' @change:player='setPlayerId($event)')

      q-card-actions.row
        q-btn.col-4(flat exact to='trainings')
          q-icon(left name='mdi-backburger')
          | Back
        q-space
        q-btn.col-7(color='primary' @click='onSubmit' :loading='loading')
          | Go!
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { date } from 'quasar'
import { ITraining, Training } from 'src/models/training'

import { isGuid } from 'src/utils/helpers'

const TrainingNS = namespace('training')
const AccountNS = namespace('account')

@Component({
  components: {
    PickDate: () => import('src/components/shared/pick-date.vue'),
    PickTime: () => import('src/components/shared/pick-time.vue'),
    SelectPlayer: () => import('src/components/shared/select-player.vue')
  }
})
export default class DialogInitializeTraining extends Vue {
  @Prop({ default: false })
  readonly dialog!: Boolean

  @AccountNS.State('appUser') appUser
  @TrainingNS.State('playerId') playerId
  @TrainingNS.Mutation('SET_PLAYER_ID') setPlayerId
  @TrainingNS.Action('createTraining') createTraining

  loading: Boolean = false

  dateStamp: Date = date.formatDate(new Date(), 'YYYY/MM/DD')
  timeStamp: Date = date.formatDate(new Date(), 'HH:mm')

  mounted () {
    this.setPlayerId(this.appUser.playerId)
  }

  async onSubmit () {
    this.loading = true

    const item: ITraining = new Training(
      this.dateTimeStamp,
      this.$auth.user().id
    )

    await this.createTraining(item)

    this.loading = false
    this.$emit('before-hide')
  }

  get dateTimeStamp (): Date {
    return date.extractDate(`${this.dateStamp} ${this.timeStamp}`, 'YYYY/MM/DD HH:mm')
  }
}
</script>
