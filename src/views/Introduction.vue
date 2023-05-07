<template>
  <v-card elevation="0" class="mt-16 pt-5 pb-5">
    <div class="text-center ma-3 text-h3 font-weight-bold">
      Topluluklar için
      <span class="colorful-text">Bridge</span>
    </div>
    <v-card-text>
      Bridge, bir topluluktaki kullanıcılar ile o topluluğun sahipleri arasındaki ilişkiyi en üst
      seviyeye çıkarmayı hedefleyen bir araçtır. Kendi topluluğunuzu güçlendirmek için hemen bir
      hesap oluşturabilirsiniz.
    </v-card-text>

    <div class="navbar mt-10">
      <v-btn
        class="text-body-1 font-weight-bold text-white"
        color="#1f7786"
        elevation="0"
        rounded="xl"
        :to="this.$RouteName.LOGIN.path"
        :replace="true"
      >
        Giriş Yap
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {}
</script>
