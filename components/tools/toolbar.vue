<template>
<div>
  <v-app-bar 
   :color="'black'"
     fixed
     app
  >
    <v-toolbar-items>
        <v-btn fab class="hidden-md-and-up"  @click="toggleDrawer">
          <v-img
            :src="require('@/assets/icons/menu.png')"
            aspect-ratio="2"
            max-height="25"
            max-width="25"
            v-ripple>
          </v-img>
        </v-btn>
        <v-btn text
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, item)"
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    <!-- <v-container
      mx-auto
      py-0
    > -->
        <v-spacer></v-spacer>
        <v-btn fab :color="'black'">
          <v-img
            :src="require('@/assets/icons/facebook-logo.png')"
            aspect-ratio="1"
            max-height="30"
            max-width="30"
            v-ripple>
          </v-img>
        </v-btn>
        <v-btn fab :color="'black'">
          <v-img
            :src="require('@/assets/icons/twitter.png')"
            aspect-ratio="1"
            max-height="30"
            max-width="30"
            v-ripple>
          </v-img>
        </v-btn>
        <v-btn fab :color="'black'"> 
          <v-img
            :src="require('@/assets/icons/instagram.png')"
            aspect-ratio="1"
            max-height="30"
            max-width="30"
            v-ripple>
          </v-img>
        </v-btn>
        <v-btn fab :color="'black'" > 
          <v-img
            :src="require('@/assets/icons/line.png')"
            aspect-ratio="1"
            max-height="30"
            max-width="30"
            v-ripple>
          </v-img>
         </v-btn>
    <!-- </v-container> -->
  </v-app-bar>
  </div>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['links'])
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        console.log('item')
        // e.stopPropagation()

        // if (item.to || !item.href) return

        // this.$vuetify.goTo(item.href)
      }
    }
  }
</script>
