import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '@/styles/theme';

import Tags from './index';

jest.mock('@/mocks/tags.json', () => [
	{ id: 1, name: 'Brinebeast', type: 'Earth' },
	{ id: 2, name: 'Goolu', type: 'Air' },
]);

const wrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('tags', () => {
	it('should not have found any tags', () => {
		render(<Tags tags={[]} />, { wrapper });
		expect(screen.queryByTestId('tag')).not.toBeInTheDocument();
	});

	it('should render Tag component with correct number of tags', () => {
		const mockData = [1, 2];

		render(<Tags tags={mockData} />, { wrapper });
		expect(screen.getAllByTestId('tag')).toHaveLength(mockData.length);
	});

	it('should have found a tag named Brinebeast', () => {
		const mockData = [1, 2];

		render(<Tags tags={mockData} />, { wrapper });
		expect(screen.getByText('Brinebeast')).toBeInTheDocument();
	});
});
