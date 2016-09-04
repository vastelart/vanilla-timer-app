class ItemModel {
	constructor(item) {
		this.id = item.getAttribute('data-id');
		this.title = item.getAttribute('title');
		this.points = item.getAttribute('data-points');
		this.restTime = item.getAttribute('data-rest_time');
		this.recoveryTime = item.getAttribute('data-recovery_time');

		this.itemBlock = document.querySelector(`#item_${this.id}`);
		this.timerBlock = document.querySelector(`#timer_${this.id}`);
		this.timer = null;
	}

	setTimer() {

		let newRecoveryTime = this.recoveryTime;

		this.itemBlock.classList.add('disabled');
		
		this.timer = setInterval(() => {

			this.timerBlock.textContent = this.timeFormatter(newRecoveryTime);
			if(newRecoveryTime == 0) this.clearTimer();
			newRecoveryTime--;

		}, 1000);
	}

	clearTimer() {
		this.itemBlock.classList.remove('disabled');
		this.timerBlock.textContent = '';
		clearInterval(this.timer);
		this.timer = null;
	}

	checkTimer() {
		return this.timer;
	}

	timeFormatter(seconds) {
		let minutes = Math.floor(seconds / 60);
		let newSeconds = seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`;

		return `${minutes}:${newSeconds}`;
	}

}

export default ItemModel;