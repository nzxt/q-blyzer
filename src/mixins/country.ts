import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ICountry } from 'src/models/country'
import { isGuid } from 'src/utils/helpers'

const Dictionaries = namespace('dictionaries')

@Component
export default class MixinCountry extends Vue {
  @Dictionaries.State('countries') countries

  countryById (id): ICountry | object {
    if (!isGuid(id)) return {}
    const country = this.countries.find(x => x.id === id)
    return country || {}
  }
}
