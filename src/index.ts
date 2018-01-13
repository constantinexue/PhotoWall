import Vue from 'vue';

import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

import App from '@/components/App.vue';

Vue.use(ElementUI);

let vue = new Vue({
    el: '#app',
    render: h => h(App)
});