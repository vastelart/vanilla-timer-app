export default function serverCall(itemId) {
	return fetch('/api.json', {
		method: 'POST',
		body: JSON.stringify({id: +itemId}),
		cache: 'no-cache'
	});
}