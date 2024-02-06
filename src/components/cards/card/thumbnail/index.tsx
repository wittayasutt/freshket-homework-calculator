import styled from 'styled-components';

type ThumbnailProps = {
	src: string;
	label: string;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 8px;
	aspect-ratio: 1;
`;

const Label = styled.div`
	width: 80%;

	margin: auto;
	padding: 0.75rem 1rem;

	background-color: ${(props) => props.theme.colors.dark};
	color: ${(props) => props.theme.colors.white};
	font-weight: bold;
	text-align: center;

	transform: translateY(-1.5rem);
`;

const Thumbnail = ({ src, label }: ThumbnailProps) => {
	return (
		<Wrapper>
			<Image src={src} alt={label} />
			<Label>{label}</Label>
		</Wrapper>
	);
};

export default Thumbnail;
