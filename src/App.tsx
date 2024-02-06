import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import '@/styles/global.css';
import Container from '@/components/container';
import Cards from '@/components/cards';

import places from '@/mocks/places.json';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>{places?.length ? <Cards places={places} /> : null}</Container>
		</ThemeProvider>
	);
};

export default App;
