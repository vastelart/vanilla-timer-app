import appStorage from '../storages/appStorage'
import ItemModel from '../models/ItemModel'
import serverCall from './serverActions'

export default function itemsGrabber() {

	document.querySelector('#app').addEventListener('click', itemClickHandler);

	let newForEach = Array.prototype.forEach;
	let items = document.querySelectorAll('.item');
	
	let pointsBlock = document.querySelector('#points');
	let points = pointsBlock.textContent;
	
	appStorage.set('points', +points);
	appStorage.set('pointsBlock', pointsBlock);
	
	newForEach.call(items, (item) => {
		let itemId = item.getAttribute('data-id');
		let newItemModel = new ItemModel(item);
		
		appStorage.set(itemId, newItemModel);
	})
}

function itemClickHandler(event) {
	let eventTarget = event.target;
	
	if(eventTarget.classList.contains('item-img')) {
		event.stopPropagation();

		let itemId = eventTarget.parentNode.getAttribute('data-id');
		let newPoints = eventTarget.parentNode.getAttribute('data-points');

		appStorage.set('justClickedItem', itemId);
		appStorage.set('justClickedItemPoints', newPoints);

		serverCall(itemId)
			.then((response) => {
				return response.json();
			})
			.then(receiveJSON)
			.catch(callError);
	}
}

function updatePoints(points) {
	let currentPoints = appStorage.get('points');
	let pointsBlock = appStorage.get('pointsBlock');
	
	appStorage.set('points', currentPoints += points);
	pointsBlock.textContent = appStorage.get('points');

	pointsBlock.classList.add('rotate-star');
	setTimeout(() => { pointsBlock.classList.remove('rotate-star'); }, 300);
}

function receiveJSON(data) {

	data.status === 'ok' ?
	setItemTimer() :
	callError(new Error('REQUEST ERROR'));

}

function setItemTimer() {

	let justClickedItem = appStorage.get('justClickedItem');
	let justClickedItemPoints = appStorage.get('justClickedItemPoints');
	let clickedItem = appStorage.get(justClickedItem);
	
	if(!clickedItem.checkTimer()) {
		
		clickedItem.setTimer();
		updatePoints(+justClickedItemPoints);

	}
}

function callError(error) {
	if(error) throw error;
}