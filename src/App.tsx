import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import '@/styles/global.css';
import { FoodStoreProvider } from '@/providers/FoodStoreProvider';
import Container from '@/components/container';
import Cards from '@/components/cards';
import Info from '@/components/info';

import sets from '@/mocks/set.json';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<FoodStoreProvider>
				<Container>
					<>
						{sets?.length ? <Cards sets={sets} /> : null}
						<Info />
					</>
				</Container>
			</FoodStoreProvider>
		</ThemeProvider>
	);
};

export default App;
