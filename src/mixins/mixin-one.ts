import Vue from 'vue'
import Component from 'vue-class-component'
//@Componet必须写否则会报错
@Component
export default class MyMixin extends Vue {
  mixinValue = '美女'
}