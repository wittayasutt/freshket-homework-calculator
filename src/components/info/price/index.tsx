import styled from 'styled-components';
import { useFoodStore } from '@/providers/FoodStoreProvider';

const Wrapper = styled.div`
	margin-top: 1rem;
`;

const Price = () => {
	const foodStore = useFoodStore();

	if (!foodStore.price) return;
	return (
		<Wrapper>
			<p>Price: {foodStore.price.totalPrice}</p>
			<p>Discount price: {foodStore.price.discountPrice}</p>
			<p>Grand total price: {foodStore.price.grandTotalPrice}</p>
		</Wrapper>
	);
};

export default Price;
