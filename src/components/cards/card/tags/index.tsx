import styled from 'styled-components';
import TagComponent from './tag';

type TagsProps = {
	tags: number[];
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-top: 1rem;
`;

const TagWrapper = styled.div`
	margin: 0.25rem 0.25rem 0 0;
`;

const Tags = ({ tags }: TagsProps) => {
	return (
		<Wrapper>
			{tags.map((tag) => (
				<TagWrapper key={tag} data-testid='tag'>
					<TagComponent tag={tag} />
				</TagWrapper>
			))}
		</Wrapper>
	);
};

export default Tags;
