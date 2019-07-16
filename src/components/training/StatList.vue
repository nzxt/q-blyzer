<template lang="pug">
  #stat-list
    q-table.sticky-header-table(
      flat
      dense
      square
      :data="data"
      :columns="columns"
      selection='multiple'
      :selected.sync='selected'
      :pagination.sync="pagination"
      row-key="id"
    )
      //- binary-state-sort
      //- :selected-rows-label='(numberOfRows) => `${numberOfRows} selected`'
      template(v-slot:body="props")
        q-tr(:props='props')
          q-td(auto-width)
            q-checkbox(dense v-model='props.selected')

          q-td(key='shotType' :props='props') {{ props.row.shotType }}
          q-td(key='distance' :props='props') {{ props.row.distance }}m
          q-td(key='avgRating' :props='props')
            //- q-badge(square color='secondary') {{ props.row.avgRating.toFixed(1) }}
            | {{ props.row.avgRating.toFixed(1) }}
            q-linear-progress(
              rounded
              color="accent"
              :value="props.row.avgRating * 0.2"
              style='width:80px'
            )
          q-td(key='count' :props='props')
            q-avatar(color='grey-3' size='24px') {{ props.row.count }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class StatList extends Vue {
  @Prop({ default: () => [] })
  readonly data!: Array<any>

  selected: Array<any> = []

  pagination: any = {
    sortBy: 'shotType',
    descending: false,
    page: 1,
    rowsPerPage: 25,
    rowsNumber: this.data.length
  }

  columns: Array<any> = [
    {
      name: 'shotType',
      label: 'Type',
      align: 'left',
      field: row => row.shotType,
      // format: val => `${val}`,
      sortable: true
    },
    {
      name: 'distance',
      label: 'Distance',
      align: 'left',
      field: row => row.distance,
      // format: val => `${val}m`,
      sortable: true
    },
    {
      name: 'avgRating',
      label: 'Avg Rating',
      align: 'center',
      field: row => row.avgRating,
      // format: val => `${val.toFixed(1)}`,
      sortable: true
    },
    {
      name: 'count',
      label: 'Count',
      align: 'left',
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
        max-height calc(100vh - 280px)

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
