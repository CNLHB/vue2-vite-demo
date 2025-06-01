import Vue from 'vue';
import App from './App.vue';
import './style.css';
const a = 1;
console.log(a);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
