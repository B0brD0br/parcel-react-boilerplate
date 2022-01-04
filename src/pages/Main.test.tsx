import { render, screen } from '@testing-library/react';

import Main from './Main';

test('should render main tag with text', () => {
  render(<Main />);
  const main = screen.getByRole('main');
  expect(main).toHaveTextContent('Build website using Parcel V2 & React');
});
