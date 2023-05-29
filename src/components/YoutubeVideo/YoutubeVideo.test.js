import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { YoutubeVideo } from './YoutubeVideo';

describe('YoutubeVideo', () => {
  test('renders YoutubeVideo component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<YoutubeVideo />);
    expect(component).toMatchSnapshot();
  });

  test('renders and search iframe element with correct attributes', () => {
    render(<YoutubeVideo />);
    const iframeElement = screen.getByTestId('map-iframe');
    expect(iframeElement).toBeInTheDocument();
  });
});
