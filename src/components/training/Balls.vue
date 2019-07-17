<template lang="pug">
  #balls
    q-card(flat)
      q-card-section.text-center
        .text-h6 Hi, Balls!
        //- TopPanel
        //- v-card-text
          v-select(
            v-model='shotType'
            :items="enums.shotTypes"
            item-text='text'
            item-value='id'
            hide-selected
            hide-details
            open-on-clear
            box
            label="Shot type"
          )

        //- v-card-title.justify-center(v-if='!stateBalls.length')
        //-   div.headline.grey--text.text--lighten-1
        //-     | Let's throw balls!
        //- v-card-text(v-else style='max-height:50vh;overflow-y:auto;')
        //-   v-avatar(
        //-     style='margin:5px 2px;'
        //-     :size='24'
        //-     color='primary'
        //-     v-for='ball in stateBalls'
        //-     :key='ball.id'
        //-   )
        //-     span.white--text.body-2.font-weight-thin {{ ball.rating }}

        //- v-spacer
        //- v-card-text.pb-0.text-xs-center
        //-   span.title.grey--text.font-weight-thin Rate Shot {{ `#${shotIndex}` }}
        //-   v-rating(
        //-     v-model='shotRating'
        //-     @click.native='onRateShot'
        //-     color='orange'
        //-     large
        //-   )

        //- v-card-actions
        //-   v-btn.secondary(icon large @click='onCancel' :disabled='stateBalls.length < 1')
        //-     v-icon.mdi-24px mdi-reply
        //-     //- | {{ $t('forms.back') }}
        //-   v-spacer
        //-   v-btn.warning(icon large type='submit' :loading='isLoading' :disabled='!stateBalls.length')
        //-     //- | {{ $t('forms.finish') }}
        //-     v-icon.mdi-24px mdi-flag-checkered
    ChooseExercise(
      :dialog='dialogChooseExercise'
      @before-hide='dialogChooseExercise = false'
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

@Component({
  components: {
    ChooseExercise: () => import('src/components/training/dialogs/ChooseExercise.vue')
  }
})
export default class TrainingBalls extends Vue {
  dialogChooseExercise: Boolean = false

  // shotRating: number = null

  // @TrainingNS.State('training') stateTraining
  // @TrainingNS.State('player') statePlayer
  // @TrainingNS.State('balls') stateBalls
  @TrainingNS.State('shotBox') shotBox
  @TrainingNS.State('shotType') shotType
  @TrainingNS.State('shotDistance') shotDistance

  // @TrainingNS.Mutation(types.ADD_BALL) mutationAddBall
  // @TrainingNS.Mutation(types.DELETE_BALL_BY_INDEX) mutationDeleteBallByIndex
  // @TrainingNS.Mutation(types.SET_SHOT_TYPE) mutationSetShotType

  mounted () {
    if (!this.shotType || !this.shotDistance || !this.shotBox) {
      this.dialogChooseExercise = true
    }
  }

  // async onRateShot (): Promise<any> {
  //   if (this.isLoading) return
  //   this.isLoading = true
  //   await this.createBall(this.prepareBall())

  //   setTimeout(() => {
  //     this.isLoading = false
  //     this.shotRating = null
  //   }, 680)
  // }

  // async onCancel () {
  //   const lastBallIndex = this.stateBalls.length - 1
  //   await this.deleteBall(this.stateBalls[lastBallIndex].id)
  //   this.mutationDeleteBallByIndex(lastBallIndex)
  //   // this.$emit('changeComponent', 'Results')
  // }

  // onSubmit (): void {
  //   this.$emit('changeComponent', 'Results')
  // }

  // async createBall (item: IBall): Promise<any> {
  //   await this.$api.ApiBallPost({ item })
  //     .then(({ data }) => {
  //       item.id = data
  //       this.mutationAddBall(item)
  //       // this.$noty.success('<span class="subheading">Ball successfully created!</span>')
  //     })
  //     .catch((err) => {
  //       console.warn(err)
  //       this.$noty.error('Ball creation failed :(')
  //     })
  // }

  // prepareBall (): IBall {
  //   const playerId = '58d7216a-db42-4bea-86f7-aa1c16f5187e' // Artem Kolinko
  //   // const playerId = this.statePlayer.id
  //   const ball: IBall = new Ball(this.shotIndex, playerId)

  //   ball.rating = this.shotRating
  //   ball.shotType = this.stateShotType
  //   ball.distance = Math.round(this.stateShotDistance)
  //   ball.trainingId = this.stateTraining.id

  //   return ball
  // }

  // async deleteBall (id: string) {
  //   await this.$api.ApiBallByIdDelete({ id })
  //     .then(() => {
  //       this.$noty.info('Ball deleted sucessfully!')
  //     })
  //     .catch((err) => {
  //       console.warn(err)
  //       this.$noty.error('Ball deletion failed!')
  //     })
  // }

  // get shotIndex (): number {
  //   return this.stateBalls.length + 1
  // }
}
</script>
