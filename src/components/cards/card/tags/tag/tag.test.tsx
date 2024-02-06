import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '@/styles/theme';

import Tag from './index';

jest.mock('@/mocks/tags.json', () => [{ id: 1, name: 'Brinebeast', type: 'Earth' }]);

const wrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('tag', () => {
	it('should not render the tag name', () => {
		render(<Tag tag={0} />, { wrapper });
		expect(screen.queryByText('Brinebeast')).not.toBeInTheDocument();
	});

	it('should render the tag named Brinebeast', () => {
		render(<Tag tag={1} />, { wrapper });
		expect(screen.getByText('Brinebeast')).toBeInTheDocument();
	});
});
