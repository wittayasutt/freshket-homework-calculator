import styled from 'styled-components';
import { useMemo } from 'react';
import { Tag } from '@/types/tag';

import tags from '@/mocks/tags.json';

type TagProps = {
	tag: number;
};

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.colors.green};
	color: ${(props) => props.theme.colors.white};
	padding: 0.25rem 0.5rem;

	border-radius: 16px;
`;

const TagComponent = ({ tag }: TagProps) => {
	// Note: there are 2 values in the data that I get provided (name and type), so I am not too sure which one should be used.
	const label = useMemo(() => tags.find((item: Tag) => item.id === tag)?.name, [tag]);

	return <Wrapper>{label}</Wrapper>;
};

export default TagComponent;
