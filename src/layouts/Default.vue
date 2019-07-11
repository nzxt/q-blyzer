<template lang='pug'>
  q-layout(view='hHr lpr fFr')
    q-header(reveal elevated)
      q-toolbar(class='bg-brand')
        q-toolbar-title(@click='$router.push("/")')
          span.text-h5.text-weight-bolder
            span.text-warning B
            span.gt-sm occialyzer
            span.lt-md lyzer

          span.q-ml-sm.text-caption v{{ $q.version }}

        q-btn(flat dense round aria-label='Chart' size='lg')
          q-icon(name='mdi-chart-arc')

        q-separator.q-mx-sm(vertical)

        q-btn(flat dense round aria-label='Add New' size='lg')
          q-icon(name='mdi-plus')

        q-separator.q-mx-sm(vertical)

        q-btn(flat dense round @click='rightDrawerOpen = !rightDrawerOpen' aria-label='Menu' size='lg')
          q-icon(name='mdi-menu-open')

    q-drawer( v-model='rightDrawerOpen' side='right' behavior='mobile' bordered content-class='bg-grey-0')
      q-list
        q-item-label(header) Navigation Links

        q-item(clickable exact to='/')
          q-item-section(avatar)
            q-icon(name='mdi-school')
          q-item-section
            q-item-label Index Page
            q-item-label(caption) Go to Main Page

        q-item(clickable exact to='trainings')
          q-item-section(avatar)
            q-icon(name='mdi-github-circle')
          q-item-section
            q-item-label All Trainings
            q-item-label(caption) Go to trainings list

        q-item(clickable  exact to='matches')
          q-item-section(avatar)
            q-icon(name='mdi-chat')
          q-item-section
            q-item-label All Matches
            q-item-label(caption) Go to mathes list

    q-page-container
      router-view
</template>

<script lang="ts">
import { openURL } from 'quasar'

import Vue from 'vue'

export default Vue.extend({
  name: 'MyLayout',
  data () {
    return {
      rightDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
})
</script>

<style>
</style>
