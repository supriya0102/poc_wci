import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initialStateMock = 
  [{
    "id": 2,
    "firstName": "Wahid",
    "lastName": "ali",
    "email": "wahidali@gmail.com",
    "deleted": false,
    "createdAt": "2023-03-09T06:29:35.066Z",
    "updatedAt": "2023-03-13T12:26:12.923Z"
}
]

const mockStore = configureStore([thunk]);
const store = mockStore(initialStateMock);

test('renders learn react link', () => {
  <Provider store={store}>
  render(<App />);
  </Provider>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
