import FoodStore from './FoodStore';

const mockData = [
	{
		id: 1,
		name: 'Red set',
		color: 'red',
		price: 50,
		hasPromotion: false,
	},
	{
		id: 2,
		name: 'Green set',
		color: 'green',
		price: 40,
		hasPromotion: true,
	},
	{
		id: 3,
		name: 'Blue set',
		color: 'blue',
		price: 30,
		hasPromotion: false,
	},
	{
		id: 4,
		name: 'Pink set',
		color: 'pink',
		price: 80,
		hasPromotion: true,
	},
];

describe('FoodStore', () => {
	describe('adding and removing', () => {
		it('should have items when you added', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);

			const expectedItems = [
				{
					id: 1,
					name: 'Red set',
					color: 'red',
					price: 50,
					hasPromotion: false,
					quantity: 1,
				},
			];

			expect(foodStore.items).toEqual(expectedItems);
		});

		it('should have no items when you added and removed', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.removeItem(mockData[0]);

			const expectedItems = [
				{
					id: 1,
					name: 'Red set',
					color: 'red',
					price: 50,
					hasPromotion: false,
					quantity: 0,
				},
			];

			expect(foodStore.items).toEqual(expectedItems);
		});

		it('should have 2 items when you added', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[0]);

			const expectedItems = [
				{
					id: 1,
					name: 'Red set',
					color: 'red',
					price: 50,
					hasPromotion: false,
					quantity: 2,
				},
			];

			expect(foodStore.items).toEqual(expectedItems);
		});

		it('should have 2 kind of items when you added', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[1]);

			const expectedItems = [
				{
					id: 1,
					name: 'Red set',
					color: 'red',
					price: 50,
					hasPromotion: false,
					quantity: 1,
				},
				{
					id: 2,
					name: 'Green set',
					color: 'green',
					price: 40,
					hasPromotion: true,
					quantity: 1,
				},
			];

			expect(foodStore.items).toEqual(expectedItems);
		});
	});

	describe('member', () => {
		it('should be a member when you checked it', () => {
			const foodStore = new FoodStore();
			foodStore.updateIsMember(true);

			expect(foodStore.isMember).toBeTruthy();
		});

		it('should not be a member when you unchecked it', () => {
			const foodStore = new FoodStore();
			foodStore.updateIsMember(true);
			foodStore.updateIsMember(false);

			expect(foodStore.isMember).toBeFalsy();
		});
	});

	describe('pricing', () => {
		it('should get correct total price', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);

			const expectedItems = 50;

			expect(foodStore.getTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct total price when you added 2 items', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[0]);

			const expectedItems = 100;

			expect(foodStore.getTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct grand total price when you added 2 items', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[0]);

			const expectedItems = 100;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct grand total price when you added 1 item and have promotion', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[1]);

			const expectedItems = 40;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct grand total price when you added 2 items and have promotion', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[1]);
			foodStore.addItem(mockData[1]);

			const expectedItems = 76;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct grand total price when you added 3 items and have promotion', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[1]);
			foodStore.addItem(mockData[1]);
			foodStore.addItem(mockData[1]);

			const expectedItems = 116;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});

		it('should get correct grand total price when you added multiple kind of items and have promotion', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[1]);
			foodStore.addItem(mockData[1]);

			const expectedItems = 176;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});
		it('should get correct grand total price when you added multiple kind of items and have promotion, membership', () => {
			const foodStore = new FoodStore();
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[0]);
			foodStore.addItem(mockData[1]);
			foodStore.addItem(mockData[1]);
			foodStore.updateIsMember(true);

			const expectedItems = 158.4;

			expect(foodStore.getGrandTotalPrice()).toEqual(expectedItems);
		});
	});
});
