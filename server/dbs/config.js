const config = {
	mongodb: 'mongodb://localhost:27017/test',
	redis:{
		host : function(){
			return '127.0.0.1'
		},
		port : function(){
			return 6379
		}
	},
	smtp:{
		host : function(){
			return 'smtp.qq.com'
		},
		user : function(){
			return '2186644363@qq.com'
		},
		pass : function(){
			return 'inaijdjlwmlldjef'
		},
		code : function(){
			return Math.random().toString(16).slice(2,6).toUpperCase()
		},
		expire : function(){
			return new Date().getTime()+60*1000
		}
	}
}

export default config