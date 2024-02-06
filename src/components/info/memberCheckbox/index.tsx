import styled from 'styled-components';
import { useFoodStore } from '@/providers/FoodStoreProvider';

const Wrapper = styled.div``;

const Label = styled.label`
	margin-left: 1rem;
`;

const MemberCheckbox = () => {
	const foodStore = useFoodStore();

	return (
		<Wrapper>
			<input
				type='checkbox'
				name='member'
				value='isMember'
				onClick={() => foodStore.updateIsMember(!foodStore.isMember)}
			/>
			<Label>I have a member card.</Label>
		</Wrapper>
	);
};

export default MemberCheckbox;
