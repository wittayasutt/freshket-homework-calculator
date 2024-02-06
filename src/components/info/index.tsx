import styled from 'styled-components';
import MemberCheckbox from './memberCheckbox';
import List from './list';
import Price from './price';

const Wrapper = styled.div`
	margin-top: 1rem;
`;

const Info = () => {
	return (
		<Wrapper>
			<MemberCheckbox />
			<List />
			<Price />
		</Wrapper>
	);
};

export default Info;
