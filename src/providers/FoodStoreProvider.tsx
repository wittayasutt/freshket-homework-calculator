import { createContext, ReactNode, useContext, useState } from 'react';
import { Set, SetItem, SetPrice } from '@/types/set';
import FoodStore from './FoodStore';

type FoodStoreProviderInfo = {
	items: SetItem[];
	isMember: boolean;
	price: SetPrice | undefined;

	addItem: (addingSet: Set) => void;
	removeItem: (removingSet: Set) => void;
	updateIsMember: (isMember: boolean) => void;
	getQuantityById: (id: number) => number;
};

type FoodStoreProviderProps = {
	children: ReactNode;
};

const FoodStoreContext = createContext<FoodStoreProviderInfo | undefined>(undefined);

export const useFoodStore = () => {
	const foodStoreProviderContext = useContext(FoodStoreContext);

	if (foodStoreProviderContext === undefined) {
		throw new Error('useFoodStore can only be called inside the FoodStoreProvider.');
	}

	return foodStoreProviderContext;
};

export const FoodStoreProvider = ({ children }: FoodStoreProviderProps) => {
	const [store, setStore] = useState<FoodStore>(new FoodStore());
	const [items, setItems] = useState<SetItem[]>([]);
	const [isMember, setIsMember] = useState<boolean>(false);
	const [price, setPrice] = useState<SetPrice | undefined>(undefined);

	const handleUpdate = () => {
		setStore(store);
		setItems(store.items);
		setIsMember(store.isMember);

		const newPrice = {
			totalPrice: store.getTotalPrice(),
			discountPrice: store.getDiscountPrice(),
			grandTotalPrice: store.getGrandTotalPrice(),
		};

		setPrice(newPrice);
	};

	const handleAddItem = (set: Set) => {
		store.addItem(set);
		handleUpdate();
	};

	const handleRemoveItem = (set: Set) => {
		store.removeItem(set);
		handleUpdate();
	};

	const handleIsMember = (isMember: boolean) => {
		store.updateIsMember(isMember);
		handleUpdate();
	};

	const value = {
		items,
		isMember,
		price,

		addItem: handleAddItem,
		removeItem: handleRemoveItem,
		updateIsMember: handleIsMember,
		getQuantityById: store.getQuantityById,
	};

	return <FoodStoreContext.Provider value={value}>{children}</FoodStoreContext.Provider>;
};
