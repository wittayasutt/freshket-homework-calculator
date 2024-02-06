import styled from 'styled-components';
import Button from './button';

type StepperProps = {
	number: number;
	onIncrementClick: () => void;
	onDecrementClick: () => void;
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	margin-top: 1rem;
`;

const Number = styled.p`
	font-size: 1.25rem;
`;

const Stepper = ({ number, onIncrementClick, onDecrementClick }: StepperProps) => {
	return (
		<Wrapper>
			<Button label='-' onClick={onDecrementClick} />
			<Number>{number}</Number>
			<Button label='+' onClick={onIncrementClick} />
		</Wrapper>
	);
};

export default Stepper;
