import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SocialLine } from './SocialLine';

describe('SocialLine', () => {
  test('renders SocialLine component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<SocialLine />);
    expect(component).toMatchSnapshot();
  });

  test('renders social media icons correctly', () => {
    render(<SocialLine />);
    const socialLink = screen.getAllByRole('link');
    expect(socialLink).toHaveLength(2);
  });
});
