<template>
    <div>
        <ul>
            <li v-for="(list, index) in lists" :key="index">
                <input type="checkbox" :checked="list.status === 'done'"
                    @change="changeStatus(index, $event)"
                >{{list.name}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from '../modules/Todo'
@Component({
    props: {
        lists: Array
    }
})
export default class TodoList extends Vue{
    changeStatus(index: number, e: Event): void {
        let { checked }: { checked: boolean } = <HTMLInputElement>e.target
        this.$emit('updateChecked', index, { status: checked ? 'done' : 'todo'})
    }
}
</script>
<style lang="scss" scoped>
    ul, li {
        list-style: none;
    }
</style>