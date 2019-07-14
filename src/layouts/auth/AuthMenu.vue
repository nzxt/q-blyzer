<template lang='pug'>
  div
    .column.flex-center
      q-icon.q-mt-lg(color='warning' name='mdi-account-circle-outline' size='5rem')

    q-list.q-my-lg(no-border link inset-delimiter)
      q-item(v-if='this.$auth.check()' clickable @click='$router.push("/account")')
        q-item-section(avatar)
          q-icon(name='mdi-account-edit' size='28px' @click.stop='$auth.refresh()')
        q-item-section
          q-item-label {{ $t('auth.my_account') }}

      q-item.text-secondary(v-if='!this.$auth.check()' clickable @click='$router.push("/login")')
        q-item-section(avatar)
          q-icon(name='mdi-login-variant' size='28px')
        q-item-section
          q-item-label {{ $t('auth.login.login') }}

      q-item.text-secondary(v-if='!this.$auth.check()' clickable @click='$router.push("/register")')
        q-item-section(avatar)
          q-icon(name='mdi-account-plus-outline' size='28px')
        q-item-section
          q-item-label {{ $t('auth.register.register') }}

      q-item(v-if='this.$auth.check()' clickable @click='$router.push("/logout")')
        q-item-section(avatar)
          q-icon(name='mdi-logout-variant' size='28px')
        q-item-section
          q-item-label {{ $t('auth.logout.logout') }}

    //- <hr>

    //- <q-list
    //-   v-if="this.$auth.check('Administrator')"
    //-   no-border
    //-   link
    //-   inset-delimiter
    //- >
    //-   <q-item-label header>
    //-     {{ $t('auth.administrator.title') }}
    //-   </q-item-label>
    //-   <q-item
    //-     clickable
    //-     @click="$router.push('/admin/home')"
    //-   >
    //-     <q-item-section avatar>
    //-       <q-icon name="mdi-home" />
    //-     </q-item-section>
    //-     <q-item-section>
    //-       <q-item-label>{{ $t('auth.home') }}</q-item-label>
    //-     </q-item-section>
    //-   </q-item>
    //- </q-list>

    //- <br>

    //- <q-list
    //-   v-if="this.$auth.check('Administrator')"
    //-   no-border
    //-   link
    //-   inset-delimiter
    //- >
    //-   <q-item-label header>
    //-     {{ $t('auth.superuser.title') }}
    //-   </q-item-label>
    //-   <q-item
    //-     clickable
    //-     @click="$router.push('/superuser/users')"
    //-   >
    //-     <q-item-section avatar>
    //-       <q-icon name="mdi-settings-outline" />
    //-     </q-item-section>
    //-     <q-item-section>
    //-       <q-item-label>{{ $t('auth.superuser.users.users') }}</q-item-label>
    //-     </q-item-section>
    //-   </q-item>
    //- </q-list>

    //- <br>
</template>

<script>
export default {
  name: 'AuthMenu',
  timers: {
    refreshTokens: {
      time: 300000,
      autostart: true,
      repeat: true,
      immediate: true
    }
  },
  methods: {
    refreshTokens () {
      this.$auth.refresh()
    }
  }
}
</script>
