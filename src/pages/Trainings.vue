<template lang="pug">
  q-page.flex.flex-center
    q-table(
      title="Trainings"
      class="max-width q-ma-sm"
      :dense="$q.screen.lt.md"
      :data="trainingList"
      :columns="columns"
      row-key="id"
      selection="multiple"
      :selected.sync="selected"
      :loading="loading"
      :pagination.sync="pagination"
      :rows-per-page-options="[15, 25, 50]"
    )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

// import ITraining from '../models/training'

const Training = namespace('training')

@Component({
  preFetch ({ store }) {
    return store.dispatch('training/fetchList')
  }
})
export default class PageTrainings extends Vue {
  @Training.State('list') trainingList
  loading: Boolean = true
  selected: Array<any> = []
  pagination: any = {
    sortBy: 'id',
    descending: false,
    page: 1,
    rowsPerPage: 15,
    rowsNumber: 15
  }
  columns: Array<any> = [
    { name: 'id', align: 'left', label: 'ID', field: row => row.id },
    { name: 'dateTimeStamp', align: 'center', label: 'Date/Time', field: row => row.dateTimeStamp }
  ]
}
</script>

<style lang="stylus" scoped>

</style>
