import { render } from '@testing-library/react';
import { OurResult } from './OurResult';

describe('OurResult', () => {
  test('renders OurResult component', () => {
    const { container } = render(<OurResult />);
    expect(container).toMatchSnapshot();
  });
});
