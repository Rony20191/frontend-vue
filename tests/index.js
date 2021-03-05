import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);
Vue.config.productionTip = false;