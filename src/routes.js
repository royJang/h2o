import Vue from 'vue';

let routerMap = {
    '/' : {
        component : function ( resolve ){
            require(['./components/index.vue'], resolve);
        }
    },
    '/new' : { 
        component : function ( resolve ){
            require(['./components/new.vue'], resolve);
        }   
    },
    '/test' : { 
        component : function ( resolve ){
            require(['./components/test.vue'], resolve);
        }   
    },
    '/404' : {
        component : function ( resolve ){
            require(['./components/404.vue'], resolve);
        }
    }
}       

let router = function ( _router, app ){

	_router.map( routerMap );

	_router.redirect({
	  '*': '/404'
	});

    _router.start( app, '#app');
}

export { router, routerMap }