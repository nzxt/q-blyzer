<template lang="pug">
  q-page.flex.flex-center
    q-card#profile-card.q-ma-sm(:style='$q.screen.lt.sm ? "width:100vw" : "min-width:360px"')
      q-card-section
        q-item
          q-item-section
            q-item-label
              span.text-h6 {{ fullName }}
            q-item-label(caption) profile for {{ appUser.userName }}

          q-item-section(avatar style='max-width:100px; text-align:-webkit-center')
            q-avatar(size='48px')
              flag(:iso='countryById(appUser.countryId).alpha2', style='font-size:48px;border-radius:50%')
            .text-caption {{ countryById(appUser.countryId).name }}

      q-card-section
        q-input(v-model="appUser.firstName" label="First Name")
        q-input(v-model="appUser.lastName" label="Last Name")
        input-date-of-birth(:date.sync='appUser.dateOfBirth' @change:dateOfBirth='onChangeDateOfBirth')
        select-country(:countryId.sync='appUser.countryId' @change:country='onChangeCountry')
        select-player(:playerId.sync='appUser.playerId' @change:player='onChangePlayer')

      q-card-actions
        q-btn.full-width(color='primary' @click='onSave' :loading='loading') Save
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { AppUser, IAppUser } from 'src/models/app-user'
import { isPlainObject, isEmptyObject } from 'src/utils/helpers'

import MixinCountry from 'src/mixins/country'

const Account = namespace('account')

@Component({
  components: {
    InputDateOfBirth: () => import('src/components/shared/date-of-birth.vue'),
    SelectCountry: () => import('src/components/shared/select-country.vue'),
    SelectPlayer: () => import('src/components/shared/select-player.vue')
  },
  mixins: [MixinCountry]
})
export default class PageAccount extends Vue {
  @Account.State('appUser') stateAppUser
  @Account.Action('update') updateAppUser

  appUser: IAppUser = {
    userName: '',
    firstName: '',
    lastName: '',
    gender: 0,
    dateOfBirth: '',
    countryId: '',
    playerId: ''
  }

  loading: Boolean = false

  created (): void {
    const { stateAppUser } = this
    if (isPlainObject(stateAppUser) && !isEmptyObject(stateAppUser)) {
      this.appUser = { ...stateAppUser }
    }
  }

  async onSave () {
    this.loading = true
    await this.updateAppUser(this.appUser)
    this.loading = false
  }

  onChangeDateOfBirth (evt) {
    this.appUser.dateOfBirth = evt
  }

  onChangeCountry (evt) {
    this.appUser.countryId = evt
  }

  onChangePlayer (evt) {
    this.appUser.playerId = evt
  }

  get fullName (): string {
    const { firstName, lastName } = this.appUser
    return `${firstName} ${lastName}`
  }
}
</script>

<style lang="stylus" scoped>
  #profile-card
    background radial-gradient(circle, #efefef 0%, #cecece 100%)
</style>
