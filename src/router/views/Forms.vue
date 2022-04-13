<template>
  <v-row class="pa-0 ma-0">
    <v-col class="col-lg-4 col-sm-6 col-xs-12">
      <FormSignIn />
    </v-col>
    <v-col class="col-lg-4 col-sm-6 col-xs-12">
      <FormConfirmPwd />
    </v-col>
    <v-col class="col-lg-4 col-sm-6 col-xs-12">
      <FormMyInfo />
    </v-col>
  </v-row>
</template>

<script>
import FormSignIn from '@/components/FormSignIn'
import FormConfirmPwd from '@/components/FormConfirmPwd'
import FormMyInfo from '@/components/FormMyInfo'
export default {
  name: 'Forms',
  components: {
    FormSignIn,
    FormConfirmPwd,
    FormMyInfo,
  },
}
</script>

<style lang="scss" scoped></style>
