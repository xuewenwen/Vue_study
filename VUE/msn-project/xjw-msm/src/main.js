import Vue from "vue";
//引入在vue下面
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";

import router from "./router";


Vue.use(ElementUI);

Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.VUE_APP_SERVICE_URL)
console.log(process.env.VUE_APP_BASE_API )

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
