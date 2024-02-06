import styled from 'styled-components';
import { Set } from '@/types/set';
import Thumbnail from './thumbnail';
import Stepper from './stepper';

type CardProps = {
	set: Set;
};

const Wrapper = styled.div`
	height: 100%;
	padding: 1rem;

	display: flex;
	flex-direction: column;

	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.1);

	overflow: hidden;
`;

const Content = styled.div`
	flex: 1;
`;

const Description = styled.p`
	text-align: center;
`;

const Card = ({ set }: CardProps) => {
	return (
		<Wrapper>
			<Content>
				<Thumbnail color={set.color} label={set.name} />
				{set.hasPromotion && <Description>get a 5% discount when buy 2</Description>}
			</Content>
			<Stepper number={0} onIncrementClick={() => {}} onDecrementClick={() => {}} />
		</Wrapper>
	);
};

export default Card;
