<template>
  <v-app>
    <v-img :src="require('@/assets/img/bg_index.png')">
      <v-container fluid grid-list-xl>
        <v-layout justify-space-between>
          <v-flex xs12 md2 class="pa-5">
            <v-img :src="require('@/assets/img/logo.png')"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-card
              style="opacity:0.4; filter:alpha(opacity='70'); MozOpacity:0.7;  KhtmlOpacity:0.7;   background-color:black;"
              class="mx-auto"
              max-width="550"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <!-- <div class="overline mb-4">OVERLINE</div> -->
                  <v-list-item-title class="headline mb-3">เพื่อสุขภาพ...เพื่อรักนิรันดร์<br>Level up your life, Level up your love.</v-list-item-title>
                  <!-- <v-list-item-subtitle>เพื่อสุขภาพ...เพื่อรักนิรันดร์<br>Level up your life, Level up your love.</v-list-item-subtitle> -->
                </v-list-item-content>
                <v-list-item-avatar
                  tile
                  size="90"
                ></v-list-item-avatar>
              </v-list-item>
              <v-card-actions>
                การใช้ชีวิตของคนเราในปัจจุบันมักประสบกับ<br>
                ภาวะเร่งรีบ แช่งขัน และตึงเครียดตลอดเวลา<br>
                จึงไม่ใช่เรื่องง่ายที่เราจะดูแลสุขภาพตัวเอง<br>
                ครอบครัว และการงานไปพร้อมกัน
                <v-img width="130" style="opacity:none;" :src="require('@/assets/img/PIC-01.png')"/>
              </v-card-actions>
            </v-card>
          </v-flex>  
        </v-layout>     
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

