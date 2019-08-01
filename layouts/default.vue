<template>
  <v-app>
    <CToolbar/>
    <CDrawer/>
    <v-content>
       <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import CToolbar from '~/components/tools/toolbar.vue'
import CDrawer from '~/components/tools/drawer.vue'
export default {
  components: {
    CToolbar,
    CDrawer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
