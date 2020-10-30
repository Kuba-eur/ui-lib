<template>
  <q-page padding>
     <div class="q-pa-md q-gutter-sm">
       {{ model }}
    <e-badge v-model="model"/>
  </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      model: '2019/02/01'
    }
  }
}
</script>
<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
