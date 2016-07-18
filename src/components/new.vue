<template>
	<div class="panel panel-default">
	  <div class="panel-heading">
	  	<form class="navbar-form" style="padding:0;">
		  	<select class="form-control">
		  		<option>All</option>
		  		<option>Error</option>
		  	</select>
		    <input type="text" class="form-control" placeholder="/api" />
		</form>
  	  </div>
	  <div class="panel-body">
	    <ul class="list-group">
			<li class="list-group-item" v-for="i in list" track-by="$index">
				<span class="status status-200"></span>
				200 	
				<span>/api/get/list</span>
				<span class="pull-right doc-text">文檔</span>
			</li>
		</ul>
	  </div>	
	</div>
</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				list : new Array(100)
			};	
		},
		methods : {
		},
		ready (){
		}	
	}
</script>
<style lang="less">	
	.status {
		width:16px; height:16px;
		border-radius:50%; display:inline-block;
		vertical-align:-2px; margin-right:6px;
	}
	.status-200 {
		background:linear-gradient(top,#33ff00,#33ffcc);
		animation:status200 4s infinite;
	}
	.doc-text {
		color:#999;
		&:hover {
			text-decoration:underline; cursor: pointer;	
		}	
	}	
	@keyframes status200 {
		0% {
			background:linear-gradient(top,#009966,#00CC00);
		}
		33% {
			background:linear-gradient(right,#009900,#00CC66);
		}
		66% {
			background:linear-gradient(bottom,#00CC66,#009900);
		}
		100% {
			background:linear-gradient(left,#00CC00,#009966);
		}
	}
</style>