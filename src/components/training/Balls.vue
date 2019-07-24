<template lang="pug">
  #balls
    q-card(flat)
      q-card-section.text-center(v-if='shotType && shotDistance')
        .text-h6 {{ getShotTypeName(shotType) }} @ {{ shotDistance }}m

      q-card-section(:style='`height: calc(100vh - ${bottomActionsHeight+175}px)`')
        //- q-avatar(
        //-   size='2.5em'
        //-   v-for='ball in balls'
        //-   :key='ball.id'
        //- )
        q-icon(
          v-for='ball in balls'
          :key='ball.id'
          size='2.7em'
          color='primary'
          :name='shotIcon(ball.rating)'
        )

        //- q-avatar(size='2.5em')
        q-icon.mdi-spin(size='2.7em' color='grey-5' name='mdi-star-circle-outline')

      q-card-actions#bottom-actions.column.q-ma-sm.fixed-bottom
        .row.justify-center
          .text-subtitle1.text-grey-6 Rate Shot {{ `#${shotIndex}` }}
        .row.justify-center
          q-rating.q-pb-xl(
            v-model="shotRating"
            size="4.5em"
            color="warning"
            icon="mdi-star-outline"
            @input='onRateShot'
          )
        .row
          q-btn(rounded stacked @click='onUndo' :disabled='!balls.length')
            q-icon(left name='mdi-reply')
            .q-mr-md {{ $t('undo') }}

          q-space

          q-btn(rounded color='warning' :loading='loading' :disabled='!balls.length' @click='onFinish')
            .q-ml-md {{ $t('forms.finish') }}
            q-icon(right name='mdi-flag-checkered')

    ChooseExercise(
      :dialog='dialogChooseExercise'
      @before-hide='dialogChooseExercise = false'
    )

    q-resize-observer(@resize="onResize")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { IBall, Ball } from 'src/models/ball'
import { getShotTypeName, getShotDistanceName } from 'src/utils/enums-helper'

const TrainingNS = namespace('training')

@Component({
  components: {
    ChooseExercise: () => import('src/components/training/dialogs/ChooseExercise.vue')
  }
})
export default class TrainingBalls extends Vue {
  dialogChooseExercise: Boolean = false
  bottomActionsHeight: number = 0

  loading: Boolean = false
  shotRating: number = 0

  @TrainingNS.State('training') training
  @TrainingNS.State('playerId') playerId
  @TrainingNS.State('balls') balls
  @TrainingNS.State('shotBox') shotBox
  @TrainingNS.State('shotType') shotType
  @TrainingNS.State('shotDistance') shotDistance

  @TrainingNS.Action('createBall') createBall
  @TrainingNS.Action('deleteBallById') deleteBallById

  @TrainingNS.Mutation('SET_COMPONENT') setComponent
  @TrainingNS.Mutation('SET_BALLS') setBalls
  @TrainingNS.Mutation('SET_SHOT_BOX') setShotBox
  @TrainingNS.Mutation('SET_SHOT_TYPE') setShotType
  @TrainingNS.Mutation('SET_SHOT_DISTANCE') setShotDistance

  getShotTypeName: Function = getShotTypeName
  getShotDistanceName: Function = getShotDistanceName

  mounted () {
    if (!this.training || !this.training.id) {
      this.$q.notify({
        color: 'negative',
        icon: 'mdi-alert-octagon-outline',
        message: 'There are no training :( Returning...'
      })
      this.setComponent('Results')
    }
    if (!this.shotType || !this.shotDistance || !this.shotBox) {
      this.dialogChooseExercise = true
    }
  }

  async onRateShot (rate: number): Promise<any> {
    if (this.loading) return
    this.loading = true
    await this.createBall(this.prepareBall())

    setTimeout(() => {
      this.loading = false
      this.shotRating = 0
    }, 380)
  }

  onUndo () {
    const lastBallIndex = this.balls.length - 1
    this.deleteBallById(this.balls[lastBallIndex].id)
  }

  onFinish (): void {
    this.setBalls([])
    this.setShotBox(null)
    this.setShotType(null)
    this.setShotDistance(null)
    this.setComponent('Results')
  }

  prepareBall (): IBall {
    const playerId = this.playerId ||
      this.$store.state.account.appUser.playerId ||
      '58d7216a-db42-4bea-86f7-aa1c16f5187e'
    const ball: IBall = new Ball(this.shotIndex, playerId)

    ball.rating = this.shotRating
    ball.shotType = this.shotType
    ball.distance = Math.round(this.shotDistance)
    ball.trainingId = this.training.id

    return ball
  }

  shotIcon (rate: number): string {
    return `mdi-numeric-${rate}-circle`
  }

  get shotIndex (): number {
    return this.balls.length + 1
  }

  onResize () {
    this.bottomActionsHeight = (document as any).getElementById('bottom-actions').clientHeight
  }
}
</script>

<style lang="stylus" scoped>
  #balls
    max-width 10em
</style>
