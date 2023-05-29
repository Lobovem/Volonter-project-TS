import { render } from '@testing-library/react';
import { BtnSliders } from './BtnSliders';

describe('BtnSliders', () => {
  //render component
  test('renders btn component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<BtnSliders />);
    expect(component).toMatchSnapshot();
  });
});
