import axios from 'axios'

const instance = axios.create({
	baseURL : `http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
	timeout : 2000,
	withCredentials : true,
	headers : {
		'X-Requested-With' : 'XMLHttpRequest'
	}
})

export default instance