export default class Sms {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/sms';
	}

	post(data) {
		return this.client.post(this.resourceUrl, data);
	}
}
