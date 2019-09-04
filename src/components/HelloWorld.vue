<template>
  <div class="hello">
    我的名字是{{name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    name: {
      type: String
    }
  }
})
export default class App extends Vue {
  //data
  msg = 123
  onClick()  {
    console.log('ccc')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
