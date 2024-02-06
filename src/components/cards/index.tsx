import styled from 'styled-components';
import { Set } from '@/types/set';
import Card from './card';

type CardsProps = {
	sets: Set[];
};

const Wrapper = styled.div`
	padding: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding: 1rem 0;
	}
`;

const CardWrapper = styled.div`
	margin-bottom: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		grid-column: span 4;
		margin-bottom: 0;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 3;
	}
`;

const Cards = ({ sets }: CardsProps) => {
	return (
		<Wrapper>
			{sets.map((set) => (
				<CardWrapper key={set.id} data-testid='card'>
					<Card set={set} />
				</CardWrapper>
			))}
		</Wrapper>
	);
};

export default Cards;
