import { createApp } from 'vue';
import { createStore } from 'vuex';
import '../index.css';
import App from './App.vue';

const store = createStore<{ quantity: number }>({
  state() {
    return {
      quantity: 0,
    };
  },
  mutations: {
    setQuantity(state, payload) {
      state.quantity += payload;
    },
    reset(state) {
      state.quantity = 0;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
