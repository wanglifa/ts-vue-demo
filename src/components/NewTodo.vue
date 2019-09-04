<template>
    <div>
       <input type="text" v-model="text">
       <button @click="onAdd">添加</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class NewTodo extends Vue{
    text: string = ''
    onAdd(): void {
        this.$emit('addTodo', this.text)
        this.text = ''
    }
}
</script>
<style lang="scss" scoped>

</style>