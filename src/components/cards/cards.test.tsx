import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '@/styles/theme';

import Cards from './index';

const wrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('cards', () => {
	it('should not have found any cards', () => {
		render(<Cards sets={[]} />, { wrapper });
		expect(screen.queryByTestId('card')).not.toBeInTheDocument();
	});

	it('should render Card component with correct number of cards', () => {
		const mockData = [
			{
				id: 1,
				name: 'Red set',
				color: 'red',
				price: 50,
				hasPromotion: false,
			},
			{
				id: 2,
				name: 'Green set',
				color: 'green',
				price: 40,
				hasPromotion: true,
			},
		];

		render(<Cards sets={mockData} />, { wrapper });
		expect(screen.getAllByTestId('card')).toHaveLength(mockData.length);
	});
});
