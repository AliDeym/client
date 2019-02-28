export default class ProductStoreRooms {
	constructor(client) {
		this.client = client;
	}

	list(productId) {
		return this.client.get(`/products/${productId}/storerooms`);
	}

	retrieve(productId, storeRoomId) {
		return this.client.get(`/products/${productId}/storerooms/${storeRoomId}`);
	}

	create(productId, data) {
		return this.client.post(`/products/${productId}/storerooms`, data);
	}

	update(productId, storeRoomId, data) {
		return this.client.put(`/products/${productId}/storerooms/${storeRoomId}`, data);
	}

	delete(productId, storeRoomId) {
		return this.client.delete(`/products/${productId}/storerooms/${storeRoomId}`);
	}
}
