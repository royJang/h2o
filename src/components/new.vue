<template>
	<div class="panel panel-default">
	  <div class="panel-heading">
	  	<nav class="navbar navbar-default">
		  <div class="container-fluid">
		      <input type="text" class="form-control" />
		  </div>
		</nav>
  	  </div>
	  <div class="panel-body">
	    <ul class="list-group">
			<li class="list-group-item" v-for="i in list" track-by="$index">
				<span class="status status-200"></span>
				200 
				<span>/api/get/list</span>
			</li>
		</ul>
	  </div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				list : new Array(10)
			};	
		},
		methods : {
		},
		ready (){
		}	
	}
</script>
<style type="less">	
	.status {
		width:16px; height:16px;
		border-radius:50%; display:inline-block;
		vertical-align:-2px; margin-right:6px;
	}
	.status-200 {
		background:linear-gradient(top,#34c72a,#299a21);
	}
</style>