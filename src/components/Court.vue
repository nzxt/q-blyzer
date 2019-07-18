<template lang="pug">
  #stage-parent
    v-stage(ref='stage' :config='configStage')
      v-layer(ref='layer')
        // Field
        v-line(
          ref='field'
          :config='configField'
          @click='onClickField'
          @tap='onClickField'
        )

        // Vertical lines
        v-line(
          v-for='(n, i) in 7'
          :key='`vl${i}`'
          :points='[100*i+1, 1, 100*i+1, 1102]'
          stroke='#cecece'
        )

        // Horizontal lines
        v-line(
          v-for='(n, i) in 11'
          :key='`hl${i}`'
          :points='[1, 100 * i + 1, 602, 100 * i + 1]'
          stroke='#cecece'
        )

        // Penalty Box
        v-line(
          stroke='grey'
          strokeWidth='3'
          :points='[285,485, 317,485, 317, 517, 285,517, 285,485]'
        )

        // Box numbers
        v-text(
          v-for='(n, i) in 6'
          :key='`bp${i}`'
          :x='100*i+30'
          y='1020'
          :text='n'
          :config='{...configBoxText, stroke: box === n ? "#3599E8" : "#dedede", fill: box === n ? "#3599E8" : "#efefef"}'
          @click='onClickBox(n)'
          @tap='onClickBox(n)'
        )

        // V-Line
        v-line(ref='vline' :config='configVLine')

        // Ball
        v-circle(ref='ball' :config='configBall')

        // Ball Point
        v-circle(:config='configBallPoint' v-if='box')

        // Box Point
        v-circle(:config='configBoxPoint' v-if='box')

        // Throw distance
        //- v-arrow(ref='arrow' :config='configArrow' v-if='box')
        v-line(ref='arrow' :config='configArrow' v-if='box')

        // Arrow Text
        v-text(:config='configDistanceText' v-if='box')
    q-resize-observer(@resize="onResize")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const TrainingNS = namespace('training')

const stageWidth = 603
const stageHeight = 1103

@Component({})
export default class Court extends Vue {
  @TrainingNS.State('shotBox') shotBox
  @TrainingNS.State('shotDistance') shotDistance

  @TrainingNS.Mutation('SET_SHOT_BOX') setShotBox
  @TrainingNS.Mutation('SET_SHOT_DISTANCE') setShotDistance

  scale: number = 1

  get box (): number {
    return this.shotBox
  }
  set box (id: number) {
    this.setShotBox(id)
  }

  configStage: any = {
    width: stageWidth,
    height: stageHeight
  }

  configRect: any = {
    x: 2,
    y: 2,
    width: 600,
    height: 1000,
    fill: '#efefef'
  }

  configField: any = {
    fill: '#eee',
    stroke: '#aeaeae',
    points: [1, 1, 1, 700, 300, 850, 600, 700, 600, 1],
    closed: true
  }

  configVLine: any = {
    fill: '#eaeaea',
    stroke: '#aeaeae',
    points: [1, 1000, 1, 700, 300, 850, 600, 700, 600, 1000],
    closed: true
  }

  configBall: any = {
    x: 301,
    y: 501,
    radius: 30,
    fill: 'orange',
    stroke: '#fafafa',
    strokeWidth: 5,
    draggable: true,
    dragBoundFunc: (pos) => {
      const scale = (this.$refs.stage as any).getStage().scale()

      const vline = (this.$refs.vline as any).getNode()
      const isIntersects = vline.intersects(pos)

      let x, y

      if (isIntersects) {
        x = (stageWidth / 2) * scale.x
        y = (stageHeight - 275) * scale.y
      } else {
        x = (pos.x < 0)
          ? 0
          : (pos.x > stageWidth * scale.x)
            ? stageWidth * scale.x
            : pos.x
        y = (pos.y < 0)
          ? 0
          : (pos.y > stageHeight - 350 * scale.y)
            ? stageHeight * scale.y
            : pos.y
      }

      this.configBall.x = x / scale.x
      this.configBall.y = y / scale.y

      this.$nextTick(() => {
        this.redrawDistanceText()
      })

      return { x, y }
    }
  }

  get configBallPoint () {
    return {
      x: this.configBall.x,
      y: this.configBall.y,
      fill: '#555',
      stroke: '#eaeaea',
      strokeWidth: 5,
      radius: 10
    }
  }

  get configArrow () {
    return {
      fill: '#eaeaea',
      stroke: '#555',
      strokeWidth: 3,
      dash: [33, 10],
      points: [this.configBoxPoint.x, this.configBoxPoint.y, this.configBall.x, this.configBall.y]
    }
  }

  get configBoxPoint () {
    return {
      x: (this.box - 1) * 100 + 50,
      y: 1000,
      fill: '#555',
      stroke: '#eaeaea',
      strokeWidth: 5,
      radius: 10
    }
  }

  configDistanceText: any = {
    x: 250,
    y: 900,
    text: this.shotDistance ? `${this.shotDistance} m` : null,
    fontSize: 56,
    fill: '#efefef',
    stroke: '#aaa',
    strokeWidth: 2
  }

  configBoxText: any = {
    fontSize: '82',
    // fill: '#dfdfdf',
    strokeWidth: '3'
  }

  onClickBox (n) {
    this.box = n
    this.$nextTick(() => {
      this.redrawDistanceText()
      // this.$noty.info(`You selected box #<strong>${n}</strong>. Distance to target <strong>${this.configDistanceText.text}</strong>.`)
    })
  }

  onClickField () {
    const stage = (this.$refs.stage as any).getStage()
    const scale = (this.$refs.stage as any).getStage().scale()
    const { x, y } = stage.pointerPos
    const ball = (this.$refs.ball as any).getNode()

    this.configBall.x = x / scale.x
    this.configBall.y = y / scale.y
    ball.absolutePosition({ x, y })

    this.$nextTick(() => {
      this.redrawDistanceText()
    })
  }

  onResize () {
    const container = this.$el
    if (!container) return
    // now we need to fit stage into parent
    const containerHeight = (container as any).offsetHeight
    // to do this we need to scale the stage
    const scale = containerHeight / stageHeight
    const stage = (this.$refs.stage as any).getStage()

    stage.width(stageWidth * scale)
    stage.height(stageHeight * scale)
    stage.scale({ x: scale, y: scale })
    stage.draw()
  }

  redrawDistanceText () {
    if (!this.$refs.arrow) return
    const arrow = (this.$refs.arrow as any).getNode()
    const rect = arrow.getClientRect()
    const { width, height } = rect
    const scale = (this.$refs.stage as any).getStage().scale()
    const length = Math.round(Math.sqrt((width / scale.x) ** 2 + (height / scale.y) ** 2))

    const distance = length / 100
    this.setShotDistance(distance)

    Object.assign(this.configDistanceText, {
      text: `${distance} m`
    })
  }
}
</script>

<style lang="stylus" scoped>
  #stage-parent
    height calc(100vh - 136px)
    >>> .konvajs-content
      margin 0 auto
</style>
