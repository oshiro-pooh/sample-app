import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDZ91hjbhnf7aNox9EMpenDkvRkdJ_ducc",
  authDomain: "my-address-p.firebaseapp.com",
  databaseURL: "https://my-address-p.firebaseio.com",
  projectId: "my-address-p",
  storageBucket: "my-address-p.appspot.com",
  messagingSenderId: "214320304184",
  appId: "1:214320304184:web:ef946d922487b9613456cd",
  measurementId: "G-Q3S1EFVS83"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
