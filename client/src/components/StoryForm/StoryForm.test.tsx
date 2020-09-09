import React from 'react';
import { render } from '@testing-library/react';
import StoryForm from './StoryForm';

test('renders an interactive form', () => {
    const { getByText } = render(<StoryForm />);
    const buttonElement = getByText(/Add Story To My Library/);
    expect(buttonElement).toBeInTheDocument();
});