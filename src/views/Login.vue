<template>
  <v-card elevation="0" class="mt-16 pt-5 pb-5">
    <div class="ma-4 text-h4 font-weight-bold">Giriş Yap</div>
    <v-card-text>
      Giriş yapmak için bir hesaba ihtiyacınız yok! <br />
      E-Postanıza gelen doğrulama koduyla giriş yapabiliyorsunuz.
    </v-card-text>

    <v-card-text>
      <v-text-field variant="outlined" label="E-Posta"></v-text-field>
      <v-text-field variant="outlined" label="Kullanıcı Adı"></v-text-field>
    </v-card-text>
    <div class="navbar">
      <v-btn
        class="text-body-1 font-weight-bold text-white"
        elevation="0"
        rounded="xl"
        color="#1f7786"
        variant="flat"
        :to="this.$RouteName.HOME.path"
      >
        Giriş yap
      </v-btn>
    </div>
  </v-card>
</template>
