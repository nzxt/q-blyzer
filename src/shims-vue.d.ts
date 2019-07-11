import Vue, { ComponentOptions } from 'vue'

declare module '*.vue' {
  // import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: any; // $axios
    // $apollo: any;
    // $firebase: any;
 }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // This adds the `auth` property to the existing `vue/types/options/ComponentOptions` type
    // auth?: Boolean | string | string[];
    // timers?: any;
    // apollo?: any;
  }
}
