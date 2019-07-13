<template lang="pug">
  q-page(class='flex flex-center')
    .column
      .row.q-mb-lg.justify-center
        div.text.text-grey-6
          span.text__first
            span.text__word
              | {{ $t('splash.boccia') }}
            span.text__first-bg
          br
          span.text__second
            span.text__word
              | {{ $t('splash.ukraine') }}
            span.text__second-bg
      .row.justify-center(@click='restart')
        img(alt='Blyzer Logo' src='statics/boccia-jack-ball.jpg' height='260px')

    q-footer.bg-white.text-primary(bordered)
      q-tabs.text-brand(no-caps align='justify' indicator-color='transparent')
        q-route-tab(name='matches' icon='mdi-trophy' label='Your Matches' exact to='matches')
          q-badge(color='red' floating) {{ matchesPagination.rowsNumber }}
        q-route-tab(name='trainings' icon='mdi-triforce' label='Your Trainings' exact to='trainings')
          q-badge(color='red' floating) {{ trainingsPagination.rowsNumber }}
</template>

<style>
</style>

<script lang="ts">
import { TimelineLite } from 'gsap'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Match = namespace('match')
const Training = namespace('training')

@Component({})
export default class ResultsPage extends Vue {
  @Match.State('pagination') matchesPagination
  @Training.State('pagination') trainingsPagination

  tl: any = null

  mounted () {
    this.tl = new TimelineLite({ delay: 1 })

    const firstBg = document.querySelectorAll('.text__first-bg')
    const secBg = document.querySelectorAll('.text__second-bg')
    const word = document.querySelectorAll('.text__word')

    this.tl
      .to(firstBg, 0.2, { scaleX: 1 })
      .to(secBg, 0.2, { scaleX: 1 })
      .to(word, 0.1, { opacity: 1 }, '-=0.1')
      .to(firstBg, 0.2, { scaleX: 0 })
      .to(secBg, 0.2, { scaleX: 0 })
  }

  restart () {
    this.tl.restart()
  }
}
</script>

<style lang="stylus">
.animation
  font-family 'Comforta'
  font-weight 100
  color #a2a2a2

.text
  font-size 12vmin
  line-height 1.205

.text__first, .text__second
  position relative

.text__word
  opacity 0

.text__first-bg, .text__second-bg
  display block
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  z-index 100
  transform-origin left
  transform scaleX(0)

.text__first-bg
  background-color #00B0FF

.text__second-bg
  background-color #FFD600

.text__first
  margin-left 2vmin

.text__second
  margin-left 10vmin
</style>
