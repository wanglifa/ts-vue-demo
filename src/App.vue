<template>
  <div id="app">
   <NewTodo @addTodo="onAddTodoList"></NewTodo>
   <TodoList :lists="lists" @updateChecked="updateChecked"></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import NewTodo from './components/NewTodo.vue'
import TodoList from './components/TodoList.vue'
import Todo from './modules/Todo'

@Component({
  components: {
    NewTodo,
    TodoList
  },
  // 监听lists变化，改变了就存入localStorage中
  watch: {
    lists(newVal: Array<Todo>): void {
      console.log('aaa')
      let str: string = JSON.stringify(newVal)
      localStorage.setItem('lists', str)
    }
  }
})
export default class App extends Vue {
  // 每次读取先从loacalStrong中读取，如果没有就是空数组
  lists: Array<Todo> = localStorage.getItem('lists') ? JSON.parse(<string>localStorage.getItem('lists')) : []
  onAddTodoList(name: string) {
    this.lists.push({name, status: 'todo'})
  }
  updateChecked(index: number, status: Partial<Todo>) {
    const newList: Todo = this.lists[index]
    newList.status = <Todo['status']>status.status
    this.lists.splice(index, 1, newList)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
