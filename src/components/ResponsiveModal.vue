<template lang='pug'>
  q-dialog(
    persistent
    v-model='opened'
    :maximized='$q.screen.lt.md'
  )
    q-layout.bg-white(
      container
      view='Lhh lpR fff'
      style='height: 750px; minWidth: 85vw'
    )
      q-header.bg-primary
        q-toolbar
          q-btn(icon='close' flat round dense @click='close')
            q-toolbar-title
              slot(name='title')

            q-btn(
              v-if='submitButton'
              data-v-step='submit-button'
              :disable='!dirty'
              :loading='submitting'
              color='green'
              @click='save'
            )
              q-icon(left name='save')
                div {{ $t('buttons.' + submitButton) }}

      q-page-container
        q-page.q-pa-md(data-v-step='body')
          slot(name='body')
  //- <q-dialog
  //-   v-model="opened"
  //-   persistent
  //-   :maximized="$q.screen.lt.md"
  //- >
  //-   <q-layout
  //-     view="Lhh lpR fff"
  //-     container
  //-     class="bg-white"
  //-     style="height: 750px; minWidth: 85vw"
  //-   >
  //-     <q-header class="bg-primary">
  //-       <q-toolbar>
  //-         <q-btn
  //-           icon="close"
  //-           flat
  //-           round
  //-           dense
  //-           @click="close"
  //-         />
  //-         <q-toolbar-title>
  //-           <slot name="title" />
  //-         </q-toolbar-title>
  //-         <q-btn
  //-           v-if="submitButton"
  //-           data-v-step="submit-button"
  //-           :disable="!dirty"
  //-           :loading="submitting"
  //-           color="green"
  //-           @click="save"
  //-         >
  //-           <q-icon
  //-             left
  //-             name="save"
  //-           />
  //-           <div>
  //-             {{ $t('buttons.' + submitButton) }}
  //-           </div>
  //-         </q-btn>
  //-       </q-toolbar>
  //-     </q-header>

  //-     <q-page-container>
  //-       <q-page
  //-         data-v-step="body"
  //-         class="q-pa-md"
  //-       >
  //-         <slot name="body" />
  //-       </q-page>
  //-     </q-page-container>
  //-   </q-layout>
  //- </q-dialog>
</template>

<script>
export default {
  name: 'ResponsiveModal',
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    dirty: {
      type: Boolean,
      default: true
    },
    submitting: {
      type: Boolean,
      default: false
    },
    submitButton: {
      type: String,
      default: null
    }
  },
  methods: {
    save () {
      this.$emit('save')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>
