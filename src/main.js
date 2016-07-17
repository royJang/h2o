import Vue from 'vue'
import { router }  from './routes';

import VueRouter from 'vue-router';

if( !window.Promise ){
	require('es6-promise').polyfill();	
}

Vue.use( VueRouter );

let vueRoutes = new VueRouter({
  history : true
});	

router( vueRoutes, require("./components/root.vue") );

