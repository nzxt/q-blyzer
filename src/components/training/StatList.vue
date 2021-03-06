<template lang="pug">
  #stat-list
    q-table.sticky-header-table(
      flat
      :data="data"
      :columns="columns"
      selection='multiple'
      :selected.sync='selected'
      :pagination.sync="pagination"
      :rows-per-page-options="rowsPerPageOptions"
      row-key="id"
      binary-state-sort
    )
      //- dense
      //- :selected-rows-label='(numberOfRows) => `${numberOfRows} selected`'
      template(v-slot:body="props")
        q-tr(:props='props')
          q-td(auto-width)
            q-checkbox(dense v-model='props.selected')

          q-td(key='shotType' :props='props')
            q-badge(color='info')
              | {{ props.row.shotTypeAbbr }}
          q-td(key='distance' :props='props') {{ props.row.distance }}m
          q-td(key='avgRating' :props='props')
            //- q-badge(square color='secondary') {{ props.row.avgRating.toFixed(1) }}
            | {{ props.row.avgRating.toFixed(1) }}
            q-linear-progress.full-width(
              rounded
              color="positive"
              :value="props.row.avgRating * 0.2"
            )
          q-td(key='count' :props='props')
            q-avatar(color='grey-4' size='20px') {{ props.row.count }}

      template(v-slot:bottom='props')
        q-select(
          dense
          label="per page"
          transition-show="jump-up"
          transition-hide="jump-up"
          borderless
          :value="pagination.rowsPerPage"
          :options="rowsPerPageOptions"
          style="width: 6em"
          @input='pagination.rowsPerPage = $event'
        )
        q-space
        q-pagination(
          :value="pagination.page"
          :max="Math.trunc(pagination.rowsNumber / pagination.rowsPerPage)"
          :max-pages='$q.screen.lt.sm ? 5 : 7'
          :direction-links="true"
          @input='pagination.page = $event'
        )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class StatList extends Vue {
  @Prop({ default: () => [] })
  readonly data!: Array<any>

  selected: Array<any> = []
  rowsPerPageOptions: number[] = [15, 25, 50]

  pagination: any = {
    sortBy: 'shotType',
    descending: false,
    page: 1,
    rowsPerPage: 15,
    rowsNumber: this.data.length
  }

  columns: Array<any> = [
    {
      name: 'shotType',
      label: 'Type',
      align: 'center',
      field: row => row.shotType,
      // format: val => `${val}`,
      sortable: true
    },
    {
      name: 'distance',
      label: 'Dist',
      align: 'left',
      field: row => row.distance,
      // format: val => `${val}m`,
      sortable: true
    },
    {
      name: 'avgRating',
      label: 'Rate',
      align: 'center',
      field: row => row.avgRating,
      // format: val => `${val.toFixed(1)}`,
      sortable: true
    },
    {
      name: 'count',
      label: 'Balls',
      align: 'center',
      field: row => row.count,
      // format: val => `${val}`,
      sortable: true
    }
  ]
}
</script>

<style lang="stylus" scoped>
  #stat-list
    >>> .sticky-header-table
      /* max height is important */
      .q-table__middle
        max-height calc(100vh - 256px)

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
