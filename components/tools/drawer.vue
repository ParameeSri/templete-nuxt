<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :href="link.href"
          @click="onClick($event, link)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'CoreDrawer',
    data () {
      return {
        item: 1
      }
    },
    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      }
    }
  }
</script>
