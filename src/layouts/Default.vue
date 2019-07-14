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

        q-btn(flat dense round aria-label='Add New' size='lg' @click='dialogCreateNew = !dialogCreateNew')
          q-icon(name='mdi-plus')

        q-separator.q-mx-sm(vertical)

        q-btn(flat dense round @click='rightDrawerOpen = !rightDrawerOpen' aria-label='Menu' size='lg')
          q-icon(name='mdi-menu-open')

    q-drawer( v-model='rightDrawerOpen' side='right' behavior='mobile' bordered content-class='bg-grey-0')
      q-list
        auth-menu

      q-list
        q-item-label(header) Navigation Links

        q-item(clickable exact to='/')
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-school' size='36px')
          q-item-section
            q-item-label.text-subtitle1 Dashboard
            q-item-label(caption) Go to Main Page

        q-item(clickable exact to='trainings')
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-github-circle' size='36px')
          q-item-section
            q-item-label.text-subtitle1 All Trainings
            q-item-label(caption) Go to trainings list

        q-item(clickable  exact to='matches')
          q-item-section(avatar)
            q-icon(color='secondary' name='mdi-chat' size='36px')
          q-item-section
            q-item-label.text-subtitle1 All Matches
            q-item-label(caption) Go to mathes list

    q-page-container
      router-view

    create-new(:dialog='dialogCreateNew' @before-hide='dialogCreateNew = false')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AuthMenu: () => import('./auth/AuthMenu.vue'),
    CreateNew: () => import('src/components/dialogs/CreateNew.vue')
  }
})
export default class LayoutDefault extends Vue {
  rightDrawerOpen: Boolean = this.$q.platform.is.desktop
  dialogCreateNew: Boolean = false
}
</script>
