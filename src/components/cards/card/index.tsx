import styled from 'styled-components';
import { Place } from '@/types/place';
import Thumbnail from './thumbnail';
import Tags from './tags';

type CardProps = {
	place: Place;
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
	cursor: pointer;
	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.2);
	}
`;

const Content = styled.div`
	flex: 1;
`;

const Description = styled.p`
	text-align: center;
`;

const Card = ({ place }: CardProps) => {
	return (
		<Wrapper>
			<Content>
				<Thumbnail src={place.img_url} label={place.name} />
				<Description>{place.body}</Description>
			</Content>
			<Tags tags={place.tags} />
		</Wrapper>
	);
};

export default Card;
