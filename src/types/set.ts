export type Set = {
	id: number;
	name: string;
	color: string;
	price: number;
	hasPromotion: boolean;
};

export type SetItem = Set & {
	quantity: number;
};

export type SetPrice = {
	totalPrice: number;
	discountPrice: string;
	grandTotalPrice: number;
};
