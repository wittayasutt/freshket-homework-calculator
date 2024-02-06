import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '@/styles/theme';

import Thumbnail from './index';

const wrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('thumbnail', () => {
	it('should not have found a label', () => {
		render(<Thumbnail color='' label='' />, { wrapper });
		expect(screen.queryByText('thumbnail')).not.toBeInTheDocument();
	});

	it('should have found a label named "thumbnail"', () => {
		render(<Thumbnail color='' label='thumbnail' />, { wrapper });
		expect(screen.queryByText('thumbnail')).toBeInTheDocument();
	});
});
