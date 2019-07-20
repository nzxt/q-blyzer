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

        q-btn(flat dense round aria-label='Chart' size='lg' exact to='/')
          q-icon(name='mdi-chart-arc')

        q-separator.q-mx-sm(vertical)

        q-btn(flat dense round aria-label='Add New' size='lg' @click.stop.prevent='dialogCreateNew = !dialogCreateNew')
          q-icon(name='mdi-plus')

        q-separator.q-mx-sm(vertical)

        q-btn(flat dense round @click.stop.prevent='rightDrawerOpen = !rightDrawerOpen' aria-label='Menu' size='lg')
          q-icon(name='mdi-menu-open')

    q-drawer(v-model='rightDrawerOpen' side='right' behavior='mobile' overlay bordered content-class='bg-grey-0')
      q-list
        auth-menu

      q-list
        q-item-label(header) Navigation Links

        q-item(clickable exact to='/')
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-chart-arc' size='36px')
          q-item-section
            q-item-label.text-subtitle1 Dashboard
            q-item-label(caption) Go to Main Page

        q-item(clickable exact to='matches' disabled)
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-trophy' size='36px')
          q-item-section
            q-item-label.text-subtitle1 All Matches
            q-item-label(caption) Go to mathes list

        q-item(clickable exact to='trainings')
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-triforce' size='36px')
          q-item-section
            q-item-label.text-subtitle1 All Trainings
            q-item-label(caption) Go to trainings list

    q-page-container
      router-view

    dialog-create-new(:dialog='dialogCreateNew' @before-hide='dialogCreateNew = false')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AuthMenu: () => import('./auth/AuthMenu.vue'),
    DialogCreateNew: () => import('src/components/dialogs/create-new.vue')
  }
})
export default class LayoutDefault extends Vue {
  rightDrawerOpen: Boolean = false
  dialogCreateNew: Boolean = false

  mounted () {
    this.rightDrawerOpen = this.$q.platform.is.desktop
  }
}
</script>
