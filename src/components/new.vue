<template>

	<div class="panel panel-default">
	  <div class="panel-heading">Request</div>
	  <div class="panel-body">
		<!-- url -->
	    <div class="input-group">
	      	<div class="input-group-btn">
			  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			     {{ protocol }}
		    	 <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu">
			    <li><a href="#" @click="protocol='http'">http</a></li>
			    <li><a href="#" @click="protocol='https'">https</a></li>
			  </ul>
		      <div class="btn btn-default">://</div>
			</div>
	  		<input type="text" placeholder="uri" class="form-control">
		</div>	
		<br />
		<!-- headers -->
		<div class="input-group">
	   		<div class="input-group-btn">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				  	{{ this.headerKey }}<span class="caret"></span>
				</button>
				<ul class="dropdown-menu">
				  <li v-for="head in headers">
				   	<a href="#" v-text="$key" @click="this.headerKey = $key"></a>
				  </li>
				</ul>
			</div>
		    <div class="btn btn-default">:</div>
			<div class="input-group-btn">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			     	 {{ this.headersValue0 }}
				  	 <span class="caret"></span>
				</button>
			  	<ul class="dropdown-menu">
				    <li v-for="hv in this.headersValues">
				    	<a href="#" v-text="hv" @click="this.headersValue = hv"></a>
			    	</li>
			    </ul>
			</div>
		</div>
		<br />

		<!-- body -->
		<div class="input-group">
			<input type="text" placeholder="param" class="form-control"> : 
			<select class="form-control">
				<option v-for="type in types" v-text="type"></option>
			</select>
		</div>
	  </div>
	</div>

	<div class="panel panel-default">
		<div class="panel-heading">Response</div>
		<div class="panel-body">
			<div class="input-group">
				<ul>
					<li v-for="tree in resTrees">{{{ tree }}}</li>
				</ul>
			</div>
		</div>
	</div>

	<button class="form-control">SUBMIT</button>

</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				protocol : 'http',
				types : ['String', 'Number', 'Boolean'],
				headerKey : null,
				headers : {
					'Content-Type' : [
						'application/json', 
						'application/octet-stream', 
						'text/xml', 'text/plain', 
						'text/html', 
						'text/css', 
						'image/gif', 
						'image/jpeg', 
						'image/png'
					],
					'Content-Length' : Number
				},
				headersValue : null,
				resTrees : ['ret:Object']
			};
		},

		methods : {
		},
		beforeCompile (){
			//初始化head
			var headKey0 = (Object.keys( this.headers ))[ 0 ];
			this.headerKey = headKey0;
			this.headersValues = this.headers[ this.headerKey ];
			this.headersValue0 = this.headersValues[ 0 ];
		},
		ready (){
			
		}	
	}
</script>
<style type="less">
	
</style>