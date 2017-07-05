import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public msg: string = 'Welcome to Your Vue.js App 1';

    public get msgWit() {
        return this.msg + 'ahaha';
    }

    public wut() {
        console.log(this.msg);
    }
}