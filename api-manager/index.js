
import axios from 'axios';

const ApiManager = async (params, resolve, reject) => {
	const { endpoint, body, methodType, header, parameters } = params;
	
	var authtoken = localStorage.getItem('authorization')
	authtoken = JSON.parse(authtoken)
	
	console.log("ApiManagerauthtoken", authtoken)
	var myHeaders

	if (authtoken?.access_token) {
		myHeaders = Object.assign({}, header, { Authorization: `Bearer ${authtoken?.access_token}` })
	} else {
		myHeaders = header
	}
	const configuration = {
		url: `http://159.100.241.165:8000/api/v1${endpoint}`,
		method: methodType,
		headers: myHeaders
	};
	
	if (methodType == 'POST' || methodType == 'DELETE' || methodType == 'PUT') {
		configuration.data = body;
	} else if (methodType == 'GET') {
		configuration.params = parameters
	}
	
	try {
		await axios(configuration)
			.then((response) => {
				console.log("ApiManager response", response)
				resolve(response.data)
			})
	} catch (error) {
		console.log("ApiManager error", error)
		await fetch(`http://159.100.241.165:8000/api/v1/auth/refresh/${authtoken?.refresh_token}`)
			.then(result => result.json())
			.then(response => {
				console.log("ApiManager-authtoken", response)
				if (response?.access_token) {
					localStorage.setItem('authorization', JSON.stringify(response))
					return ApiManager(params, resolve, reject)
				} else {
					localStorage.removeItem('authorization')
				}
			})
			.catch(error => {
				reject(error)
			})
		// })
	}

};
export default ApiManager;
