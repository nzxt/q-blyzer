<template lang="pug">
  q-page.flex.flex-center
    q-card#profile-card.q-ma-sm
      q-card-section
        q-item
          q-item-section.items-center(avatar)
            q-avatar(size='48px')
              flag(iso='ua', style='font-size:48px;border-radius:50%')
            | Ukraine

          q-item-section
            q-item-label
              span.text-h6 {{ fullName }}
            q-item-label(caption) aka {{ appUser.userName }}

      q-card-section
        q-input(v-model="appUser.firstName" label="First Name")
        q-input(v-model="appUser.lastName" label="Last Name")
        date-of-birth(:date.sync='appUser.dateOfBirth' @change::date='onChangeDateOfBirth')
        q-select(
          label="Country"
          emit-value
          options-dense
          option-value='id'
          option-label='fullName'
          :options='countries'
        )
        q-select(
          label="Player"
          emit-value
          options-dense
          option-value='id'
          option-label='name'
          :options='players'
        )

      q-card-actions
        q-btn.full-width(color='primary') Save
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { AppUser, IAppUser } from 'src/models/app-user'
import { isPlainObject, isEmptyObject } from 'src/utils/helpers'

const Account = namespace('account')
const Dictionaries = namespace('dictionaries')

@Component({
  components: {
    dateOfBirth: () => import('src/components/shared/date-of-birth.vue')
  }
})
export default class PageAccount extends Vue {
  @Account.State('appUser') stateAppUser
  @Account.Action('update') updateAppUser
  @Dictionaries.State('players') players
  @Dictionaries.State('countries') countries

  appUser: IAppUser = {
    userName: '',
    firstName: '',
    lastName: '',
    gender: 0,
    dateOfBirth: new Date(),
    countryId: '',
    playerId: ''
  }

  mounted (): void {
    const { stateAppUser } = this
    if (isPlainObject(stateAppUser) && !isEmptyObject(stateAppUser)) {
      this.appUser = { ...stateAppUser }
    }
  }

  onChangeDateOfBirth (evt) {
    this.appUser.dateOfBirth = evt
  }

  get fullName (): string {
    const { firstName, lastName } = this.appUser
    return `${firstName} ${lastName}`
  }
}
</script>

<style lang="stylus" scoped>
  #profile-card
    min-width 312px
    background radial-gradient(circle, #efefef 0%, #cecece 100%)
</style>
