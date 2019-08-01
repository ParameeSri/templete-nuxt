<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-toolbar-items>
      <v-btn text>หน้าแรก</v-btn>
      <v-btn text>เกี่ยวกับเรา</v-btn>
      <v-btn text>สูตรลับ</v-btn>
      <v-btn text>สาระ</v-btn>
      <v-btn text>สินค้า</v-btn>
      <v-btn text>ติดต่อ</v-btn>
    </v-toolbar-items>
      <v-spacer />
      <v-img
        :src="require('@/assets/icons/facebook-logo.png')"
        aspect-ratio="1"
        max-height="30"
        max-width="30"
        v-ripple
        @click="goto('qrscan')">
      </v-img>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <v-img
        :src="require('@/assets/icons/twitter-sign.png')"
        aspect-ratio="1"
        max-height="30"
        max-width="30"
        v-ripple
        @click="goto('qrscan')">
      </v-img>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <v-img
        :src="require('@/assets/icons/instagram-logo.png')"
        aspect-ratio="1"
        max-height="30"
        max-width="30"
        v-ripple
        @click="goto('qrscan')">
      </v-img>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <v-img
        :src="require('@/assets/icons/line.png')"
        aspect-ratio="1"
        max-height="30"
        max-width="30"
        v-ripple
        @click="goto('qrscan')">
      </v-img>
    </v-app-bar>
    <v-content>
       <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
