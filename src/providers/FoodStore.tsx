import { Set, SetItem } from '@/types/set';

const PAIR_DISCOUNT_RATE = 0.05;
const MEMBER_DISCOUNT_RATE = 0.1;

class FoodStore {
	public items: SetItem[] = [];
	public isMember: boolean = false;

	private getItemById = (id: number): SetItem | undefined => {
		return this.items.find((item: SetItem) => item.id === id);
	};

	private getDiscountById = (id: number): number => {
		const item = this.getItemById(id);

		if (!item?.hasPromotion) {
			return 0;
		}

		const discountItem = item.quantity - (item.quantity % 2);
		return item.price * discountItem * PAIR_DISCOUNT_RATE;
	};

	private updateItems = (updatingSet: SetItem): void => {
		const isNewSet = !this.items.find((item) => item.id === updatingSet.id);

		if (isNewSet) {
			this.items.push(updatingSet);
		} else {
			this.items = this.items.map((item: SetItem) => {
				if (item.id === updatingSet.id) {
					return updatingSet;
				}

				return item;
			});
		}
	};

	addItem = (addingSet: Set): void => {
		let updatingSet = this.getItemById(addingSet.id);

		if (!updatingSet) {
			updatingSet = { ...addingSet, quantity: 0 };
		}

		updatingSet.quantity += 1;
		this.updateItems(updatingSet);
	};

	removeItem = (removingSet: Set): void => {
		const updatingSet = this.getItemById(removingSet.id);

		if (!updatingSet || updatingSet.quantity === 0) {
			return;
		}

		updatingSet.quantity -= 1;
		this.updateItems(updatingSet);
	};

	getQuantityById = (id: number): number => {
		const set = this.getItemById(id);
		return set?.quantity ?? 0;
	};

	getTotalPrice = (): number => {
		if (!this.items || this.items.length === 0) {
			return 0;
		}

		return this.items.reduce((accItem: number, curItem: SetItem) => {
			return accItem + curItem.price * curItem.quantity;
		}, 0);
	};

	getGrandTotalPrice = (): number => {
		if (!this.items || this.items.length === 0) {
			return 0;
		}

		let total = this.items.reduce((accItem: number, curItem: SetItem) => {
			const discount = this.getDiscountById(curItem.id);
			return accItem + curItem.price * curItem.quantity - discount;
		}, 0);

		if (this.isMember) {
			total = total - total * MEMBER_DISCOUNT_RATE;
		}

		return total;
	};

	getDiscountPrice = (): string => {
		if (!this.items || this.items.length === 0) {
			return '0';
		}

		return (this.getTotalPrice() - this.getGrandTotalPrice()).toFixed(2);
	};

	updateIsMember = (isMember: boolean): void => {
		this.isMember = isMember;
	};
}

export default FoodStore;
