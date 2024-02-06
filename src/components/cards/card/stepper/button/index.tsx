import styled from 'styled-components';

type ButtonProps = {
	label?: string;
	onClick: () => void;
};

const Wrapper = styled.button`
	width: 2rem;
	height: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.theme.colors.white};
	border-radius: 50%;
	cursor: pointer;
`;

const Label = styled.p``;

const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<Wrapper onClick={onClick}>
			<Label>{label}</Label>
		</Wrapper>
	);
};

export default Button;
