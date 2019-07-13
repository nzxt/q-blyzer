<template lang="pug">
  q-page#trainings-list.flex.justify-center
    q-table.sticky-header-table.q-ma-sm(
      title="Trainings"
      :dense="$q.screen.lt.md"
      :data="trainingsList"
      :columns="columns"
      row-key="id"
      selection="multiple"
      :selected.sync="selected"
      :loading="loading"
      :pagination.sync="pagination"
      @request="onRequest"
      :rows-per-page-options="rowsPerPageOptions"
    )
      template(v-slot:top-right)
        q-btn(
          v-if='!selected.length'
          size='sm'
          rounded
          color="deep-orange"
          :loading="loading"
        )
          q-icon(left name="mdi-plus-circle")
          | Add new

        q-btn(
          v-else
          rounded
          size='sm'
          color="negative"
          icon="mdi-delete-forever"
          :loading="loading"
          :percentage="progress"
          @click="deleteSelected"
        ) Delete ({{ selected.length }})

      template(v-slot:body="props")
        q-tr(:props='props')
          q-td(auto-width)
            q-checkbox(dense v-model='props.selected')

          q-td(key='dateTimeStamp' :props='props') {{ formatDate(props.row.dateTimeStamp, 'DD.MM.YYYY HH:mm') }}
          q-td(key='rate' :props='props') {{ props.row.rate }}
          q-td(key='avgBallRating' :props='props')
            q-badge(square color='secondary') {{ props.row.avgBallRating }}%

      //- template(v-slot:top-selection)
      //-   .text-h6 Trainings
      //-   q-space

      template(v-slot:bottom='props')
        q-select(
          dense
          label="per page"
          transition-show="jump-up"
          transition-hide="jump-up"
          borderless
          v-model="pagination.rowsPerPage"
          :options="rowsPerPageOptions"
          style="width: 85px"
        )
        q-space
        q-pagination(
          :value="pagination.page"
          :max="pagination.rowsNumber / pagination.rowsPerPage"
          :max-pages='$q.screen.lt.md ? 5 : 7'
          :direction-links="true"
          @input='onPageChanged($event)'
        )
          //- :size='$q.screen.lt.md ? "sm" : "md"'

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { date } from 'quasar'

import { ITraining } from '../models/training'
import { IPagination } from '../models/_interfaces'

const Training = namespace('training')

@Component({
  // preFetch ({ store }) {
  //   return store.dispatch('training/fetchList')
  // }
})
export default class PageTrainings extends Vue {
  @Training.State('list') trainingsList
  @Training.State('pagination') trainingsPagination
  @Training.Action('fetchList') trainingsFetchList
  @Training.Action('setPagination') setPagination
  @Training.Action('deleteById') deleteTrainingById

  formatDate: Function = date.formatDate

  loading: Boolean = false
  filter: string = ''
  selected: ITraining[] = []

  rowsPerPageOptions: number[] = [15, 25, 50]

  columns: Array<any> = [
    // {
    //   name: 'id',
    //   align: 'left',
    //   label: 'ID',
    //   field: row => row.id,
    //   format: val => `${val}`,
    //   sortable: true
    // },
    {
      name: 'dateTimeStamp',
      align: 'center',
      label: 'Date/Time',
      field: row => row.dateTimeStamp,
      // format: val => formatDate(val, 'DD.MM.YYYY HH:mm'),
      sortable: true
    },
    {
      name: 'avgBallRating',
      align: 'center',
      label: 'Avg Rating',
      field: row => row.avgBallRating,
      // format: val => `${val}%`,
      sortable: true
    },
    {
      name: 'rate',
      align: 'center',
      label: 'Rate',
      field: row => row.rate,
      // format: val => `${val}%`,
      sortable: true
    }
  ]

  onPageChanged (page: number) {
    this.pagination = { ...this.pagination, page }
  }

  get pagination (): IPagination {
    return this.trainingsPagination
  }
  set pagination (value: IPagination) {
    this.setPagination(value)
  }

  async onRequest (props) {
    this.loading = true
    await this.setPagination(props.pagination)
    this.loading = false
  }

  deleteSelected () {
    this.loading = true
    let promises = this.selected.map(t => {
      return this.deleteTrainingById(t.id)
        .then(() => {
          this.selected = this.selected.filter(x => x.id === t.id)
        })
    })
    Promise.all(promises).then(() => { this.loading = false })
  }

  get progress (): number {
    if (!this.selected.length) return 0
    return 100 / this.selected.length
  }
}
</script>

<style lang="stylus" scoped>
  #trainings-list
    >>> .sticky-header-table
      /* max height is important */
      .q-table__middle
        max-height calc(100vh - 175px)

      .q-table__top,
      .q-table__bottom,
      thead tr:first-child th /* bg color is important for th; just specify one */
        background-color $grey-2

      thead tr:first-child th
        position sticky
        top 0
        opacity 1
        z-index 1
</style>
