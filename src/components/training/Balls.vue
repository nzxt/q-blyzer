<template lang="pug">
  #balls
    q-card(flat)
      q-card-section.text-center(v-if='shotType && shotDistance')
        .text-h6 {{ getShotTypeName(shotType) }} @ {{ shotDistance.toFixed(1) }}m

      q-card-section(style='height: calc(100vh - 465px)')
        q-avatar(
          size='30px'
          v-for='ball in balls'
          :key='ball.id'
        )
          q-icon(size='30px' color='primary' :name='shotIcon(ball.rating)')

        q-icon.mdi-spin(size='30px' color='grey-5' name='mdi-star-circle-outline')

      q-card-actions.column.q-ma-sm.fixed-bottom.bg-white
        .row.justify-center
          .text-subtitle1.text-grey-6 Rate Shot {{ `#${shotIndex}` }}
        .row.justify-center
          q-rating.q-pb-md(
            v-model="shotRating"
            size="3.5em"
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
    }, 680)
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
}
</script>

<style lang="stylus" scoped>
  #balls
    max-width 360px
</style>
