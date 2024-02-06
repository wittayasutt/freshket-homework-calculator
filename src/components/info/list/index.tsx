import styled from 'styled-components';
import { useFoodStore } from '@/providers/FoodStoreProvider';

const Wrapper = styled.ul`
	margin-top: 1rem;
`;

const Item = styled.li``;

const List = () => {
	const foodStore = useFoodStore();

	return (
		<Wrapper>
			{foodStore.items.map((item) => {
				return item.quantity ? (
					<Item key={item.id}>
						{item.name} - {item.quantity}
					</Item>
				) : null;
			})}
		</Wrapper>
	);
};

export default List;
