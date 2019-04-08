export default class AjaxPaymentHandler {
	constructor(client) {
		this.client = client;
	}

	payir(data) {
		return this.client.post(`/payir`, data);
	}

	parsian(data) {
		return this.client.post('/parsian', data);
	}
}
