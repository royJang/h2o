<template>
	<div id="app-view" class="container-fluid">	
		<div class="page-header">
		  <h1>H2O</h1>
		</div>
		<div class="row">
	    	<!--路由-->
	    	<div class="col-md-8 col-lg-8">
    			<router-view></router-view>
	    	</div>
	    </div>    
	</div>
</template>
<script>
export default {
	data () {
		return {};
	},
	components: {
	},
	methods: {
	},	
	ready () {
	}
}
</script>
<style lang="less">
body {
	text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga', 'kern';
    direction: ltr;
    font-family: 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
}
</style>