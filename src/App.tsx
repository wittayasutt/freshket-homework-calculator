import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import '@/styles/global.css';
import Container from '@/components/container';
import Cards from '@/components/cards';

import sets from '@/mocks/set.json';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>{sets?.length ? <Cards sets={sets} /> : null}</Container>
		</ThemeProvider>
	);
};

export default App;
