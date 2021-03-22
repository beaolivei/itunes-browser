import { render} from '@testing-library/react';
import App from './App';

test('renders the correct elements on header', () => {
  const {getByText} = render(<App/>)

  expect(getByText("Itunes Browser")).not.toBeNull();
});

test('renders the tabs', () => {
  const {getByText} = render(<App/>);

  expect(getByText("TOP ALBUNS")).not.toBeNull();
});


test('fist element of list shows up', () => {
  const {getByTestId} = render(<App/>);

  expect(getByTestId("Input")).not.toBeNull();

});
